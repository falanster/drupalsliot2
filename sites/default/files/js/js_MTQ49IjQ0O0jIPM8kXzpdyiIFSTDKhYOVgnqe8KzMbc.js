Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"Возникла AJAX HTTP ошибка.", "HTTP Result Code: !status":"Полученный код HTTP: !status", "An AJAX HTTP request terminated abnormally.":"HTTP запрос AJAX завершен неправильно.", "Debugging information follows.":"Следует отладочная информация.", "Path: !uri":"Путь: !uri", "StatusText: !statusText":"СтатусТекстом", "ResponseText: !responseText":"ОтветТекстом: !responseText", "ReadyState: !readyState":"ReadyState: !readyState", "Configure":"Настроить", "Hide":"Скрыть", "Show":"Показать", "Re-order rows by numerical weight instead of dragging.":"Упорядочить строки по весу вместо перетаскивания.", "Show row weights":"Показать вес строк", "Hide row weights":"Скрыть вес строк", "Drag to re-order":"Изменить порядок можно, перетащив пункт мышкой.", "Changes made in this table will not be saved until the form is submitted.":"Сделанные в списке изменения не вступят в силу, пока вы не сохраните их.", "+@count":"+@count", "-@count":"-@count", "Please wait...":"Пожалуйста, подождите...", "(active tab)":"(активная вкладка)", "Enabled":"Включено", "Not published":"Не опубликовано", "Edit":"Редактировать", "Add":"Добавить", "Disabled":"Отключено", "Remove group":"Удалить условие", "Apply (all displays)":"Применить (все отображения)", "Revert to default":"Вернуть к настройкам по умолчанию", "Apply (this display)":"Применить (это отображение)", "Not restricted":"Без ограничений", "Restricted to certain pages":"Ограничено для определённых страниц", "Not customizable":"Не настраиваемый", "The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\u002Fem\u003E button is clicked.":"Изменения, сделанные в блоках не вступят в силу пока вы не нажмете кнопку \u003Cem\u003EСохранить блоки\u003C\u002Fem\u003E.", "The block cannot be placed in this region.":"Блок не может быть размещён в этом регионе.", "Translatable":"Переводимый", "Select all rows in this table":"Отметить все строки таблицы", "Deselect all rows in this table":"Снять отметку со всех колонок таблицы", "Wed":"ср", "Sat":"сб", "Saturday":"суббота", "This permission is inherited from the authenticated user role.":"Это право наследуется от роли «Зарегистрированный пользователь».", "Autocomplete popup":"Всплывающее автозаполнение", "Searching for matches...":"Поиск совпадений...", "Thu":"чт", "Done":"Готово", "Sunday":"воскресенье", "Sun":"вс", "Monday":"понедельник", "Oct":"Окт", "Upload":"Закачать", "Hide summary":"Скрыть анонс", "Edit summary":"Редактировать анонс", "The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"Выбранный файл %filename не может быть загружен. Возможно загрузка файлов только со следующими расширениями: %extensions.", "Not in menu":"Не в меню", "New revision":"Новая редакция", "No revision":"Нет редакции", "By @name on @date":"@name, @date", "By @name":"@name", "Automatic alias":"Автоматический синоним", "Alias: @alias":"Синоним: @alias", "No alias":"Синоним не задан", "Available tokens":"Доступные маркеры", "Insert this token into your form":"Вставить этот токен в вашу форму", "First click a text field to insert your tokens into.":"Сначала кликните в текстовое поле, чтобы вставитьтокены.", "Next":"Далее", "Tuesday":"вторник", "Wednesday":"среда", "Thursday":"четверг", "Friday":"пятница", "Year":"Год", "Month":"Месяц", "Prev":"Назад", "Day":"День", "Mon":"пн", "Tue":"вт", "Fri":"пт", "January":"января", "February":"февраля", "March":"марта", "April":"апреля", "May":"мая", "June":"июня", "July":"июля", "August":"августа", "September":"сентября", "October":"октября", "November":"ноября", "December":"декабря", "Today":"Сегодня", "Jan":"Янв", "Feb":"Фев", "Mar":"Мар", "Apr":"Апр", "Jun":"Июн", "Jul":"Июл", "Aug":"Авг", "Sep":"Сен", "Nov":"Ноя", "Dec":"Дек", "Su":"Вс", "Mo":"Пн", "Tu":"Вт", "We":"Ср", "Th":"Чт", "Fr":"Пт", "Sa":"Сб", "mm\u002Fdd\u002Fyy":"мм\u002Fдд\u002Fгг", "Only files with the following extensions are allowed: %files-allowed.":"Прикреплять можно только файлы с расширениями: %files-allowed.", "Requires a title":"Требуется заголовок", "Don\u0027t display post information":"Не показывать информацию материала", "Directory":"Каталог", "File browsing is disabled in directory %dir.":"Просмотр файлов запрещен для папки %dir.", "You can not perform this operation.":"Вы не можете выполнить эту операцию.", "Do you want to refresh the current directory?":"Вы хотите обновить текущую папку?", "Delete selected files?":"Удалить выбранные файлы?", "Please select a thumbnail.":"Выберите миниатюру.", "Please specify dimensions within the allowed range that is from 1x1 to @dimensions.":"Пожалуйста укажите размер внутри разрешённого диапозона от 1x1 до @dimensions.", "Please select a file.":"Выберите файл.", "Log messages":"Сообщения в лог", "%filename is not an image.":"Файл %filename не является изображением.", "You must select at least %num files.":"Необходимо выбрать не менее %num файлов.", "You are not allowed to operate on more than %num files.":"Вам не разрешено управлять больше чем с %num файлами.", "Close":"Закрыть", "Change view":"Сменить вид", "You are not alllowed to create more than %num directories.":"Вам запрещено создавать папок больше %num.", "%dirname is not a valid directory name. It should contain only alphanumeric characters, hyphen and underscore.":"%dirname - это неверное имя для папки. Оно должно содержать только буквы, цифры, дефисы или нижние подчеркивания.", "Subdirectory %dir already exists.":"Подпапка %dir уже существует.", "Subdirectory %dir does not exist.":"Папка %dir не существует.", "Are you sure want to delete this subdirectory with all directories and files in it?":"Вы точно хотите удалить эту подпапку со всем содержимым?", "Insert file":"Вставить файл", "Second":"Секунда", "Hour":"Час", "Minute":"Минута", "Seconds":"Секунды", "Days":"Дней", "Hours":"Часов", "Minutes":"Минут"}} };;
(function ($) {

  Drupal.behaviors.context_accordion = {
    attach: function (context, settings) {
      $('#edit-reactions-plugins-block-selector').accordion({ header: '.form-type-checkboxes > label', autoHeight: false});
    }
  };
}(jQuery));


;

/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
 */

;(function($){
	$.fn.superfish = function(op){

		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
				$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};

	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 1,
		delay		: 800,
		animation	: {opacity:'show'},
		speed		: 'normal',
		autoArrows	: true,
		dropShadows : true,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide().css('visibility','hidden');
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden').css('visibility','visible');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});

})(jQuery);
;
/* Copyright (c) 2006 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate: 2007-06-19 20:25:28 -0500 (Tue, 19 Jun 2007) $
 * $Rev: 2111 $
 *
 * Version 2.1
 */
(function($){$.fn.bgIframe=$.fn.bgiframe=function(s){if($.browser.msie&&parseInt($.browser.version)<=6){s=$.extend({top:'auto',left:'auto',width:'auto',height:'auto',opacity:true,src:'javascript:false;'},s||{});var prop=function(n){return n&&n.constructor==Number?n+'px':n;},html='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+'style="display:block;position:absolute;z-index:-1;'+(s.opacity!==false?'filter:Alpha(Opacity=\'0\');':'')+'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+'"/>';return this.each(function(){if($('> iframe.bgiframe',this).length==0)this.insertBefore(document.createElement(html),this.firstChild);});}return this;};if(!$.browser.version)$.browser.version=navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)[1];})(jQuery);;
﻿/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);;

// This uses Superfish 1.4.8
// (http://users.tpg.com.au/j_birch/plugins/superfish)

// Add Superfish to all Nice menus with some basic options.
(function ($) {
  $(document).ready(function() {
    $('ul.nice-menu').superfish({
      // Apply a generic hover class.
      hoverClass: 'over',
      // Disable generation of arrow mark-up.
      autoArrows: false,
      // Disable drop shadows.
      dropShadows: false,
      // Mouse delay.
      delay: Drupal.settings.nice_menus_options.delay,
      // Animation speed.
      speed: Drupal.settings.nice_menus_options.speed
    // Add in Brandon Aaron’s bgIframe plugin for IE select issues.
    // http://plugins.jquery.com/node/46/release
    }).find('ul').bgIframe({opacity:false});
    $('ul.nice-menu ul').css('display', 'none');
  });
})(jQuery);
;
(function ($) {

/**
 * Attach handlers to evaluate the strength of any password fields and to check
 * that its confirmation is correct.
 */
Drupal.behaviors.password = {
  attach: function (context, settings) {
    var translate = settings.password;
    $('input.password-field', context).once('password', function () {
      var passwordInput = $(this);
      var innerWrapper = $(this).parent();
      var outerWrapper = $(this).parent().parent();

      // Add identifying class to password element parent.
      innerWrapper.addClass('password-parent');

      // Add the password confirmation layer.
      $('input.password-confirm', outerWrapper).parent().prepend('<div class="password-confirm">' + translate['confirmTitle'] + ' <span></span></div>').addClass('confirm-parent');
      var confirmInput = $('input.password-confirm', outerWrapper);
      var confirmResult = $('div.password-confirm', outerWrapper);
      var confirmChild = $('span', confirmResult);

      // Add the description box.
      var passwordMeter = '<div class="password-strength"><div class="password-strength-text" aria-live="assertive"></div><div class="password-strength-title">' + translate['strengthTitle'] + '</div><div class="password-indicator"><div class="indicator"></div></div></div>';
      $(confirmInput).parent().after('<div class="password-suggestions description"></div>');
      $(innerWrapper).prepend(passwordMeter);
      var passwordDescription = $('div.password-suggestions', outerWrapper).hide();

      // Check the password strength.
      var passwordCheck = function () {

        // Evaluate the password strength.
        var result = Drupal.evaluatePasswordStrength(passwordInput.val(), settings.password);

        // Update the suggestions for how to improve the password.
        if (passwordDescription.html() != result.message) {
          passwordDescription.html(result.message);
        }

        // Only show the description box if there is a weakness in the password.
        if (result.strength == 100) {
          passwordDescription.hide();
        }
        else {
          passwordDescription.show();
        }

        // Adjust the length of the strength indicator.
        $(innerWrapper).find('.indicator').css('width', result.strength + '%');

        // Update the strength indication text.
        $(innerWrapper).find('.password-strength-text').html(result.indicatorText);

        passwordCheckMatch();
      };

      // Check that password and confirmation inputs match.
      var passwordCheckMatch = function () {

        if (confirmInput.val()) {
          var success = passwordInput.val() === confirmInput.val();

          // Show the confirm result.
          confirmResult.css({ visibility: 'visible' });

          // Remove the previous styling if any exists.
          if (this.confirmClass) {
            confirmChild.removeClass(this.confirmClass);
          }

          // Fill in the success message and set the class accordingly.
          var confirmClass = success ? 'ok' : 'error';
          confirmChild.html(translate['confirm' + (success ? 'Success' : 'Failure')]).addClass(confirmClass);
          this.confirmClass = confirmClass;
        }
        else {
          confirmResult.css({ visibility: 'hidden' });
        }
      };

      // Monitor keyup and blur events.
      // Blur must be used because a mouse paste does not trigger keyup.
      passwordInput.keyup(passwordCheck).focus(passwordCheck).blur(passwordCheck);
      confirmInput.keyup(passwordCheckMatch).blur(passwordCheckMatch);
    });
  }
};

/**
 * Evaluate the strength of a user's password.
 *
 * Returns the estimated strength and the relevant output message.
 */
Drupal.evaluatePasswordStrength = function (password, translate) {
  var weaknesses = 0, strength = 100, msg = [];

  var hasLowercase = /[a-z]+/.test(password);
  var hasUppercase = /[A-Z]+/.test(password);
  var hasNumbers = /[0-9]+/.test(password);
  var hasPunctuation = /[^a-zA-Z0-9]+/.test(password);

  // If there is a username edit box on the page, compare password to that, otherwise
  // use value from the database.
  var usernameBox = $('input.username');
  var username = (usernameBox.length > 0) ? usernameBox.val() : translate.username;

  // Lose 5 points for every character less than 6, plus a 30 point penalty.
  if (password.length < 6) {
    msg.push(translate.tooShort);
    strength -= ((6 - password.length) * 5) + 30;
  }

  // Count weaknesses.
  if (!hasLowercase) {
    msg.push(translate.addLowerCase);
    weaknesses++;
  }
  if (!hasUppercase) {
    msg.push(translate.addUpperCase);
    weaknesses++;
  }
  if (!hasNumbers) {
    msg.push(translate.addNumbers);
    weaknesses++;
  }
  if (!hasPunctuation) {
    msg.push(translate.addPunctuation);
    weaknesses++;
  }

  // Apply penalty for each weakness (balanced against length penalty).
  switch (weaknesses) {
    case 1:
      strength -= 12.5;
      break;

    case 2:
      strength -= 25;
      break;

    case 3:
      strength -= 40;
      break;

    case 4:
      strength -= 40;
      break;
  }

  // Check if password is the same as the username.
  if (password !== '' && password.toLowerCase() === username.toLowerCase()) {
    msg.push(translate.sameAsUsername);
    // Passwords the same as username are always very weak.
    strength = 5;
  }

  // Based on the strength, work out what text should be shown by the password strength meter.
  if (strength < 60) {
    indicatorText = translate.weak;
  } else if (strength < 70) {
    indicatorText = translate.fair;
  } else if (strength < 80) {
    indicatorText = translate.good;
  } else if (strength <= 100) {
    indicatorText = translate.strong;
  }

  // Assemble the final message.
  msg = translate.hasWeaknesses + '<ul><li>' + msg.join('</li><li>') + '</li></ul>';
  return { strength: strength, message: msg, indicatorText: indicatorText };

};

/**
 * Field instance settings screen: force the 'Display on registration form'
 * checkbox checked whenever 'Required' is checked.
 */
Drupal.behaviors.fieldUserRegistration = {
  attach: function (context, settings) {
    var $checkbox = $('form#field-ui-field-edit-form input#edit-instance-settings-user-register-form');

    if ($checkbox.length) {
      $('input#edit-instance-required', context).once('user-register-form-checkbox', function () {
        $(this).bind('change', function (e) {
          if ($(this).attr('checked')) {
            $checkbox.attr('checked', true);
          }
        });
      });

    }
  }
};

})(jQuery);
;
(function ($) {

/**
 * Open links to Mollom.com in a new window.
 *
 * Required for valid XHTML Strict markup.
 */
Drupal.behaviors.mollomTarget = {
  attach: function (context) {
    $(context).find('.mollom-target').click(function () {
      this.target = '_blank';
    });
  }
};

/**
 * Attach click event handlers for CAPTCHA links.
 */
Drupal.behaviors.mollomCaptcha = {
  attach: function (context, settings) {
    // @todo Pass the local settings we get from Drupal.attachBehaviors(), or
    //   inline the click event handlers, or turn them into methods of this
    //   behavior object.
    $('a.mollom-switch-captcha', context).click(getMollomCaptcha);
  }
};

/**
 * Fetch a Mollom CAPTCHA and output the image or audio into the form.
 */
function getMollomCaptcha() {
  // Get the current requested CAPTCHA type from the clicked link.
  var newCaptchaType = $(this).hasClass('mollom-audio-captcha') ? 'audio' : 'image';

  var context = $(this).parents('form');

  // Extract the form build ID and Mollom content ID from the form.
  var formBuildId = $('input[name="form_build_id"]', context).val();
  var mollomContentId = $('input.mollom-content-id', context).val();

  var path = 'mollom/captcha/' + newCaptchaType + '/' + formBuildId;
  if (mollomContentId) {
    path += '/' + mollomContentId;
  }

  // Retrieve a CAPTCHA:
  $.getJSON(Drupal.settings.basePath + path,
    function (data) {
      if (!(data && data.content)) {
        return;
      }
      // Inject new CAPTCHA.
      $('.mollom-captcha-content', context).parent().html(data.content);
      // Update CAPTCHA ID.
      $('input.mollom-captcha-id', context).val(data.captchaId);
      // Add an onclick-event handler for the new link.
      Drupal.attachBehaviors(context);
      // Focus on the CAPTCHA input.
      $('input[name="mollom[captcha]"]', context).focus();
    }
  );
  return false;
}

})(jQuery);
;