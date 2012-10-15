<?php
/**
 * Callback to show any fields attached to the user
 */
function pux_settings_account_form($form, $form_state, $account) {
	global $user;
	
	pux_settings_default_settings($form, $form_state, $account);

  $register = ($form['#user']->uid > 0 ? FALSE : TRUE);
	
	if($register) {
		$form['#user_category'] = 'register';
	}
	else {
		$form['#user_category'] = 'account';
	}

  $admin = user_access('administer users');

	// Account information.
  $form['account'] = array(
    '#weight' => -10,
  );
  // Only show name field on registration form or user can change own username.
  $form['account']['name'] = array(
    '#type' => 'textfield', 
    '#title' => t('Username'), 
    '#maxlength' => USERNAME_MAX_LENGTH, 
    '#description' => t('Spaces are allowed; punctuation is not allowed except for periods, hyphens, apostrophes, and underscores.'), 
    '#required' => TRUE, 
    '#attributes' => array('class' => array('username')), 
    '#default_value' => (!$register ? $account->name : ''), 
    '#access' => ($register || ($user->uid == $account->uid && user_access('change own username')) || $admin), 
    '#weight' => -10,
  );

	$form['account']['mail'] = array(
    '#type' => 'textfield', 
    '#title' => t('E-mail address'), 
    '#maxlength' => EMAIL_MAX_LENGTH, 
    '#description' => t('A valid e-mail address. All e-mails from the system will be sent to this address. The e-mail address is not made public and will only be used if you wish to receive a new password or wish to receive certain news or notifications by e-mail.'), 
    '#required' => TRUE, 
    '#default_value' => (!$register ? $account->mail : ''),
  );

	if ($admin) {
    $status = isset($account->status) ? $account->status : 1;
  }
  else {
    $status = $register ? variable_get('user_register', USER_REGISTER_VISITORS_ADMINISTRATIVE_APPROVAL) == USER_REGISTER_VISITORS : $account->status;
  }
  $form['account']['status'] = array(
    '#type' => 'radios', 
    '#title' => t('Status'), 
    '#default_value' => $status, 
    '#options' => array(t('Blocked'), t('Active')), 
    '#access' => $admin,
  );

  $roles = array_map('check_plain', user_roles(TRUE));
  // The disabled checkbox subelement for the 'authenticated user' role
  // must be generated separately and added to the checkboxes element,
  // because of a limitation in Form API not supporting a single disabled
  // checkbox within a set of checkboxes.
  // @todo This should be solved more elegantly. See issue #119038.
  $checkbox_authenticated = array(
    '#type' => 'checkbox', 
    '#title' => $roles[DRUPAL_AUTHENTICATED_RID], 
    '#default_value' => TRUE, 
    '#disabled' => TRUE,
  );
  unset($roles[DRUPAL_AUTHENTICATED_RID]);
  $form['account']['roles'] = array(
    '#type' => 'checkboxes', 
    '#title' => t('Roles'), 
    '#default_value' => (!$register && isset($account->roles) ? array_keys($account->roles) : array()), 
    '#options' => $roles, 
    '#access' => $roles && user_access('administer permissions'), 
    DRUPAL_AUTHENTICATED_RID => $checkbox_authenticated,
  );

  $form['account']['notify'] = array(
    '#type' => 'checkbox', 
    '#title' => t('Notify user of new account'), 
    '#access' => $register && $admin,
  );

  // Signature.
  $form['signature_settings'] = array(
    '#type' => 'fieldset', 
    '#title' => t('Signature settings'), 
    '#weight' => 1, 
    '#access' => (!$register && variable_get('user_signatures', 0)),
  );

  $form['signature_settings']['signature'] = array(
    '#type' => 'text_format', 
    '#title' => t('Signature'), 
    '#default_value' => isset($account->signature) ? $account->signature : '', 
    '#description' => t('Your signature will be publicly displayed at the end of your comments.'), 
    '#format' => isset($account->signature_format) ? $account->signature_format : NULL,
  );
	
	$form['submit'] = array(
		'#type' => 'submit',
		'#value' => t("Save changes"),
		'#weight' => 100,
	);
	
	if ($form['#user_category'] == "account") {
    $form['actions']['cancel'] = array(
      '#type' => 'submit', 
      '#value' => t('Cancel account'), 
      '#submit' => array('user_edit_cancel_submit'), 
      '#access' => $account->uid > 1 && (($account->uid == $user->uid && user_access('cancel account')) || user_access('administer users')),
    );
  }
	
	$form['#validate'][] = 'pux_settings_account_form_validate';
	
	form_load_include($form_state, "inc", "user", "user.pages");
	$form['#submit'][] = 'user_profile_form_submit';

	return $form;
}

function pux_settings_account_form_validate($form, &$form_state) {
  if ($form['#user_category'] == 'account' || $form['#user_category'] == 'register') {
    $account = $form['#user'];
    // Validate new or changing username.
    if (isset($form_state['values']['name'])) {
      if ($error = user_validate_name($form_state['values']['name'])) {
        form_set_error('name', $error);
      }
      elseif ((bool) db_select('users')->fields('users', array('uid'))->condition('uid', $account->uid, '<>')->condition('name', db_like($form_state['values']['name']), 'LIKE')->range(0, 1)->execute()->fetchField()) {
        form_set_error('name', t('The name %name is already taken.', array('%name' => $form_state['values']['name'])));
      }
    }

    // Validate the e-mail address, and check if it is taken by an existing user.
    if ($error = user_validate_mail($form_state['values']['mail'])) {
      form_set_error('mail', $error);
    }
    elseif ((bool) db_select('users')->fields('users', array('uid'))->condition('uid', $account->uid, '<>')->condition('mail', db_like($form_state['values']['mail']), 'LIKE')->range(0, 1)->execute()->fetchField()) {
      // Format error message dependent on whether the user is logged in or not.
      if ($GLOBALS['user']->uid) {
        form_set_error('mail', t('The e-mail address %email is already taken.', array('%email' => $form_state['values']['mail'])));
      }
      else {
        form_set_error('mail', t('The e-mail address %email is already registered. <a href="@password">Have you forgotten your password?</a>', array('%email' => $form_state['values']['mail'], '@password' => url('user/password'))));
      }
    }

    // Make sure the signature isn't longer than the size of the database field.
    // Signatures are disabled by default, so make sure it exists first.
    if (isset($form_state['values']['signature'])) {
      // Move text format for user signature into 'signature_format'.
      $form_state['values']['signature_format'] = $form_state['values']['signature']['format'];
      // Move text value for user signature into 'signature'.
      $form_state['values']['signature'] = $form_state['values']['signature']['value'];

      $user_schema = drupal_get_schema('users');
      if (drupal_strlen($form_state['values']['signature']) > $user_schema['fields']['signature']['length']) {
        form_set_error('signature', t('The signature is too long: it must be %max characters or less.', array('%max' => $user_schema['fields']['signature']['length'])));
      }
    }
  }
}

