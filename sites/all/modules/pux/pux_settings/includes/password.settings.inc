<?php

function pux_settings_password_form($form, $form_state, $account) {
	global $user;
	// Call some default variables we need everytime
  pux_settings_default_settings($form, $form_state, $account);
	
	$form['pass'] = array(
		'#type' => 'password_confirm', 
		'#size' => 25, 
		'#description' => t('To change the current user password, enter the new password in both fields.'),
		'#weight' => 99,
	);

	// To skip the current password field, the user must have logged in via a
	// one-time link and have the token in the URL.
	$pass_reset = isset($_SESSION['pass_reset_' . $account->uid]) && isset($_GET['pass-reset-token']) && ($_GET['pass-reset-token'] == $_SESSION['pass_reset_' . $account->uid]);
	$protected_values = array();
	$current_pass_description = '';
	
	// The user may only change their own password without their current
	// password if they logged in via a one-time login link.
	if (!$pass_reset) {
		$protected_values['pass'] = t('Password');
		$request_new = l(t('Request new password'), 'user/password', array('attributes' => array('title' => t('Request new password via e-mail.'))));
	}
	
	// The user must enter their current password to change to a new one.
	if ($user->uid == $account->uid) {
		$form['account']['current_pass_required_values'] = array(
			'#type' => 'value', 
			'#value' => $protected_values,
		);
		$form['account']['current_pass'] = array(
			'#type' => 'password', 
			'#title' => t('Current password'), 
			'#size' => 25, 
			'#access' => !empty($protected_values), 
			'#description' => $current_pass_description, 
			'#weight' => -500,
		);
		$form['#validate'][] = 'user_validate_current_pass';
	}
	
	$form['submit'] = array(
		'#type' => 'submit', 
		'#value' => t('Change password'),
		'#weight' => 100,
	);
	
	$form['#user_category'] = 'account';
	
	form_load_include($form_state, "inc", "user", "user.pages");
	$form['#submit'][] = 'user_profile_form_submit';
	
	return $form;
}
