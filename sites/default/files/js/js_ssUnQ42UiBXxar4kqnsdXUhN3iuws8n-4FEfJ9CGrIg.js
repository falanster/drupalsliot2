Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"Возникла AJAX HTTP ошибка.", "HTTP Result Code: !status":"Полученный код HTTP: !status", "An AJAX HTTP request terminated abnormally.":"HTTP запрос AJAX завершен неправильно.", "Debugging information follows.":"Следует отладочная информация.", "Path: !uri":"Путь: !uri", "StatusText: !statusText":"СтатусТекстом", "ResponseText: !responseText":"ОтветТекстом: !responseText", "ReadyState: !readyState":"ReadyState: !readyState", "Configure":"Настроить", "Hide":"Скрыть", "Show":"Показать", "Re-order rows by numerical weight instead of dragging.":"Упорядочить строки по весу вместо перетаскивания.", "Show row weights":"Показать вес строк", "Hide row weights":"Скрыть вес строк", "Drag to re-order":"Изменить порядок можно, перетащив пункт мышкой.", "Changes made in this table will not be saved until the form is submitted.":"Сделанные в списке изменения не вступят в силу, пока вы не сохраните их.", "+@count":"+@count", "-@count":"-@count", "Please wait...":"Пожалуйста, подождите...", "(active tab)":"(активная вкладка)", "Enabled":"Включено", "Not published":"Не опубликовано", "Edit":"Редактировать", "Add":"Добавить", "Disabled":"Отключено", "Remove group":"Удалить условие", "Apply (all displays)":"Применить (все отображения)", "Revert to default":"Вернуть к настройкам по умолчанию", "Apply (this display)":"Применить (это отображение)", "Not restricted":"Без ограничений", "Restricted to certain pages":"Ограничено для определённых страниц", "Not customizable":"Не настраиваемый", "The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\u002Fem\u003E button is clicked.":"Изменения, сделанные в блоках не вступят в силу пока вы не нажмете кнопку \u003Cem\u003EСохранить блоки\u003C\u002Fem\u003E.", "The block cannot be placed in this region.":"Блок не может быть размещён в этом регионе.", "Translatable":"Переводимый", "Select all rows in this table":"Отметить все строки таблицы", "Deselect all rows in this table":"Снять отметку со всех колонок таблицы", "Wed":"ср", "Sat":"сб", "Saturday":"суббота", "This permission is inherited from the authenticated user role.":"Это право наследуется от роли «Зарегистрированный пользователь».", "Autocomplete popup":"Всплывающее автозаполнение", "Searching for matches...":"Поиск совпадений...", "Thu":"чт", "Done":"Готово", "Sunday":"воскресенье", "Sun":"вс", "Monday":"понедельник", "Oct":"Окт", "Upload":"Закачать", "Hide summary":"Скрыть анонс", "Edit summary":"Редактировать анонс", "The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"Выбранный файл %filename не может быть загружен. Возможно загрузка файлов только со следующими расширениями: %extensions.", "Not in menu":"Не в меню", "New revision":"Новая редакция", "No revision":"Нет редакции", "By @name on @date":"@name, @date", "By @name":"@name", "Automatic alias":"Автоматический синоним", "Alias: @alias":"Синоним: @alias", "No alias":"Синоним не задан", "Available tokens":"Доступные маркеры", "Insert this token into your form":"Вставить этот токен в вашу форму", "First click a text field to insert your tokens into.":"Сначала кликните в текстовое поле, чтобы вставитьтокены.", "Next":"Далее", "Tuesday":"вторник", "Wednesday":"среда", "Thursday":"четверг", "Friday":"пятница", "Year":"Год", "Month":"Месяц", "Prev":"Назад", "Day":"День", "Mon":"пн", "Tue":"вт", "Fri":"пт", "January":"января", "February":"февраля", "March":"марта", "April":"апреля", "May":"мая", "June":"июня", "July":"июля", "August":"августа", "September":"сентября", "October":"октября", "November":"ноября", "December":"декабря", "Today":"Сегодня", "Jan":"Янв", "Feb":"Фев", "Mar":"Мар", "Apr":"Апр", "Jun":"Июн", "Jul":"Июл", "Aug":"Авг", "Sep":"Сен", "Nov":"Ноя", "Dec":"Дек", "Su":"Вс", "Mo":"Пн", "Tu":"Вт", "We":"Ср", "Th":"Чт", "Fr":"Пт", "Sa":"Сб", "mm\u002Fdd\u002Fyy":"мм\u002Fдд\u002Fгг", "Only files with the following extensions are allowed: %files-allowed.":"Прикреплять можно только файлы с расширениями: %files-allowed.", "Requires a title":"Требуется заголовок", "Don\u0027t display post information":"Не показывать информацию материала", "Directory":"Каталог", "File browsing is disabled in directory %dir.":"Просмотр файлов запрещен для папки %dir.", "You can not perform this operation.":"Вы не можете выполнить эту операцию.", "Do you want to refresh the current directory?":"Вы хотите обновить текущую папку?", "Delete selected files?":"Удалить выбранные файлы?", "Please select a thumbnail.":"Выберите миниатюру.", "Please specify dimensions within the allowed range that is from 1x1 to @dimensions.":"Пожалуйста укажите размер внутри разрешённого диапозона от 1x1 до @dimensions.", "Please select a file.":"Выберите файл.", "Log messages":"Сообщения в лог", "%filename is not an image.":"Файл %filename не является изображением.", "You must select at least %num files.":"Необходимо выбрать не менее %num файлов.", "You are not allowed to operate on more than %num files.":"Вам не разрешено управлять больше чем с %num файлами.", "Close":"Закрыть", "Change view":"Сменить вид", "You are not alllowed to create more than %num directories.":"Вам запрещено создавать папок больше %num.", "%dirname is not a valid directory name. It should contain only alphanumeric characters, hyphen and underscore.":"%dirname - это неверное имя для папки. Оно должно содержать только буквы, цифры, дефисы или нижние подчеркивания.", "Subdirectory %dir already exists.":"Подпапка %dir уже существует.", "Subdirectory %dir does not exist.":"Папка %dir не существует.", "Are you sure want to delete this subdirectory with all directories and files in it?":"Вы точно хотите удалить эту подпапку со всем содержимым?", "Insert file":"Вставить файл", "Translate Text":"Перевести текст", "An HTTP error @status occured.":"Произошла следующая ошибка протокола  HTTP @status.", "Second":"Секунда", "On by default with opt out":"По умолчанию включено, с отказом", "Off by default with opt in":"По умолчанию выключено, с согласием", "Not tracked":"Не отслеживается", "One domain with multiple subdomains":"Один домен с несколькими субдоменами", "Multiple top-level domains":"Несколько доменов верхнего уровня", "All pages with exceptions":"Все страницы с исключениями", "Excepted: @roles":"Исключены: @roles", "A single domain":"Один домен", "No privacy":"Нет конфиденциальности", "@items enabled":"@items включены", "Hour":"Час", "Minute":"Минута", "Seconds":"Секунды", "Days":"Дней", "Hours":"Часов", "Minutes":"Минут"}} };;
(function ($) {

  Drupal.behaviors.context_accordion = {
    attach: function (context, settings) {
      $('#edit-reactions-plugins-block-selector').accordion({ header: '.form-type-checkboxes > label', autoHeight: false});
    }
  };
}(jQuery));


;
/******************************************************************************************************************************

 * @ Original idea by by Binny V A, Original version: 2.00.A 
 * @ http://www.openjs.com/scripts/events/keyboard_shortcuts/
 * @ Original License : BSD
 
 * @ jQuery Plugin by Tzury Bar Yochay 
        mail: tzury.by@gmail.com
        blog: evalinux.wordpress.com
        face: facebook.com/profile.php?id=513676303
        
        (c) Copyrights 2007
        
 * @ jQuery Plugin version Beta (0.0.3)
 * @ License: jQuery-License.
 
TODO:
    add queue support (as in gmail) e.g. 'x' then 'y', etc.
    add mouse + mouse wheel events.

USAGE:
    $.hotkeys.add('Ctrl+c', function(){ alert('copy anyone?');});
    $.hotkeys.add('Ctrl+c', {target:'div#editor', type:'keyup', propagate: true},function(){ alert('copy anyone?');});>
    $.hotkeys.remove('Ctrl+c'); 
    $.hotkeys.remove('Ctrl+c', {target:'div#editor', type:'keypress'}); 
    
******************************************************************************************************************************/
(function (jQuery) {

  this.version = '(beta)(0.0.3)';

  this.all = {};

  this.special_keys = {
    27: 'esc', 9: 'tab', 32:'space', 13: 'return', 8:'backspace', 145: 'scroll', 20: 'capslock', 
    144: 'numlock', 19:'pause', 45:'insert', 36:'home', 46:'del',35:'end', 33: 'pageup', 
    34:'pagedown', 37:'left', 38:'up', 39:'right',40:'down', 112:'f1',113:'f2', 114:'f3', 
    115:'f4', 116:'f5', 117:'f6', 118:'f7', 119:'f8', 120:'f9', 121:'f10', 122:'f11', 123:'f12'};        

  this.shift_nums = { "`":"~", "1":"!", "2":"@", "3":"#", "4":"$", "5":"%", "6":"^", "7":"&", 
    "8":"*", "9":"(", "0":")", "-":"_", "=":"+", ";":":", "'":"\"", ",":"<", 
    ".":">",  "/":"?",  "\\":"|" };        

  this.add = function(combi, options, callback) {
    if (jQuery.isFunction(options)) {
      callback = options;
      options = {};
    }
    var opt = {};
    var defaults = {type: 'keydown', propagate: false, disableInInput: false, target: 'html'};
    var that = this;
    var opt = jQuery.extend( opt , defaults, options || {} );
    combi = combi.toLowerCase();        
        
    // inspect if keystroke matches
    var inspector = function(event) {
      event = jQuery.event.fix(event); // jQuery event normalization.
      var selector = event.data.selector;
      var element = jQuery(event.target);

      // Disable shortcut keys in Input, Textarea fields
      if(opt['disableInInput'] && element.is('textarea, input')) {
        return;
      }

      var
        code = event.which,
        type = event.type,
        character = String.fromCharCode(code).toLowerCase(),
        special = that.special_keys[code],
        shift = event.shiftKey,
        ctrl = event.ctrlKey,
        alt= event.altKey,
        propagate = true, // default behaivour
        mapPoint = null;

      var cbMap = that.all[selector].events[type].callbackMap;
      if(!shift && !ctrl && !alt) { // No Modifiers
        mapPoint = cbMap[special] ||  cbMap[character]
      }
      
      // deals with combinaitons (alt|ctrl|shift+anything)
      else{
        var modif = '';
        if(alt) modif +='alt+';
        if(ctrl) modif+= 'ctrl+';
        if(shift) modif += 'shift+';
        // modifiers + special keys or modifiers + characters or modifiers + shift characters
        mapPoint = cbMap[modif+special] || cbMap[modif+character] || cbMap[modif+that.shift_nums[character]]
      }

      if (mapPoint){
        mapPoint.cb(event);
        if(!mapPoint.propagate) {
          event.stopPropagation();
          event.preventDefault();
          return false;
        }
      }
    };

    // first hook for this element
    if (!this.all[opt.target]){
      this.all[opt.target] = {events:{}};
    }
    if (!this.all[opt.target].events[opt.type]){
      this.all[opt.target].events[opt.type] = {callbackMap: {}}
      jQuery(opt.target).bind(opt.type, {selector: opt.target}, inspector);
    }
    this.all[opt.target].events[opt.type].callbackMap[combi] =  {cb: callback, propagate:opt.propagate};                
    return jQuery;
	};    

  this.remove = function(exp, opt) {
    opt = opt || {};
    target = opt.target || 'html';
    type = opt.type || 'keydown';
    exp = exp.toLowerCase();
    jQuery(target).unbind(type);
    delete this.all[target].events[type].callbackMap[exp];
    return jQuery;
	};
	
  jQuery.hotkeys = this;
  return jQuery;    

})(jQuery);;

/**
 * Cookie plugin 1.0
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};
;

(function ($) {

// Store all l10n_client related data + methods in its own object
$.extend(Drupal, {
  l10nClient: new (function() {
    // Set "selected" string to unselected, i.e. -1
    this.selected = -1;
    // Keybindings
    this.keys = {'toggle':'ctrl+shift+s', 'clear': 'esc'}; // Keybindings
    // Keybinding functions
    this.key = function(pressed) {
      switch(pressed) {
        case 'toggle':
          // Grab user-hilighted text & send it into the search filter
          userSelection = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text;
          userSelection = String(userSelection);
          if(userSelection.length > 0) {
            Drupal.l10nClient.filter(userSelection);
            Drupal.l10nClient.toggle(1);
            $('#l10n-client .string-search').focus();
          } else {
            if($('#l10n-client').is('.hidden')) {
              Drupal.l10nClient.toggle(1);
              if(!$.browser.safari) {
                $('#l10n-client .string-search').focus();
              }
            } else {
              Drupal.l10nClient.toggle(0);
            }
          }
        break;
        case 'clear':
          this.filter(false);
        break;
      }
    }
    // Toggle the l10nclient
    this.toggle = function(state) {
      switch(state) {
        case 1:
          $('#l10n-client-string-select, #l10n-client-string-editor, #l10n-client .labels .label').show();
          $('#l10n-client').height('22em').removeClass('hidden');
          $('#l10n-client .labels .toggle').text('X');
          if(!$.browser.msie) {
            $('body').css('border-bottom', '22em solid #fff');
          }
          $.cookie('Drupal_l10n_client', '1', {expires: 7, path: '/'});
        break;
        case 0:
          $('#l10n-client-string-select, #l10n-client-string-editor, #l10n-client .labels .label').hide();
          $('#l10n-client').height('2em').addClass('hidden');
          $('#l10n-client .labels .toggle').text(Drupal.t('Translate Text'));
          if(!$.browser.msie) {
            $('body').css('border-bottom', '0px');
          }
          $.cookie('Drupal_l10n_client', '0', {expires: 7, path: '/'});
        break;
      }
    }
    // Get a string from the DOM tree
    this.getString = function(index, type) {
      return $('#l10n-client-data div:eq('+index+') .'+type).text();
    }
    // Set a string in the DOM tree
    this.setString = function(index, data) {
      $('#l10n-client-data div:eq('+index+') .target').text(data);
    }
    // Filter the the string list by a search string
    this.filter = function(search) {
      if(search == false || search == '') {
        $('#l10n-client #l10n-client-search-filter-clear').focus();
        $('#l10n-client-string-select li').show();
        $('#l10n-client .string-search').val('');
        $('#l10n-client .string-search').focus();
      } else {
        if(search.length > 0) {
          $('#l10n-client-string-select li').hide();
          $('#l10n-client-string-select li:contains('+search+')').show();
          $('#l10n-client .string-search').val(search);
        }
      }
    }
  })
});

// Attaches the localization editor behavior to all required fields.
Drupal.behaviors.l10nClient = {}
Drupal.behaviors.l10nClient.attach = function (context) {
  // Killswitch - attach only once.
  if ($('#l10n-client').is('.l10n-client-processed')) {
    return;
  }

  // First time - init & attach all handlers.
  $('#l10n-client').addClass('l10n-client-processed');

  switch($.cookie('Drupal_l10n_client')) {
    case '1':
      Drupal.l10nClient.toggle(1);
    break;
    default:
      Drupal.l10nClient.toggle(0);
    break;
  }

  // If the selection changes, copy string values to the source and target fields.
  // Add class to indicate selected string in list widget.
  $('#l10n-client-string-select li').click(function() {
    $('#l10n-client-string-select li').removeClass('active');
    $(this).addClass('active');
    var index = $('#l10n-client-string-select li').index(this);

    $('#l10n-client-string-editor .source-text').text(Drupal.l10nClient.getString(index, 'source'));
    $('#l10n-client-form .translation-target').val(Drupal.l10nClient.getString(index, 'target'));
    $('#l10n-client-form .source-textgroup').val(Drupal.l10nClient.getString(index, 'textgroup'));
    $('#l10n-client-form .source-context').val(Drupal.l10nClient.getString(index, 'context'));
    $('#l10n-client-string-editor .context').text(Drupal.l10nClient.getString(index, 'context'));

    Drupal.l10nClient.selected = index;
    $('#l10n-client-form .form-submit').removeAttr("disabled");
  });

  // When l10n_client window is clicked, toggle based on current state.
  $('#l10n-client .labels .toggle').click(function() {
    if($('#l10n-client').is('.hidden')) {
      Drupal.l10nClient.toggle(1);
    } else {
      Drupal.l10nClient.toggle(0);
    }
  });

  // Copy source text to translation field on button click.
  $('#l10n-client-form .edit-copy').click(function() {
    $('#l10n-client-form .translation-target').val($('#l10n-client-string-editor .source-text').text());
    return false;
  });

  // Clear translation field on button click.
  $('#l10n-client-form .edit-clear').click(function() {
    $('#l10n-client-form .translation-target').val('');
    return false;
  });

  // Register keybindings using jQuery hotkeys
  if($.hotkeys) {
    $.hotkeys.add(Drupal.l10nClient.keys['toggle'], function(){Drupal.l10nClient.key('toggle')});
    $.hotkeys.add(Drupal.l10nClient.keys['clear'], {target:'#l10n-client .string-search', type:'keyup'}, function(){Drupal.l10nClient.key('clear')});
  }

  // Custom listener for l10n_client livesearch
  $('#l10n-client .string-search').keyup(function(key) {
    Drupal.l10nClient.filter($('#l10n-client .string-search').val());
  });

  // Clear search
  $('#l10n-client #l10n-client-search-filter-clear').click(function() {
    Drupal.l10nClient.filter(false);
    return false;
  });

  // Send AJAX POST data on form submit.
  $('#l10n-client-form').submit(function() {
    $('#l10n-client-form .form-submit').attr("disabled", "true");
    $.ajax({
      type: "POST",
      url: $('#l10n-client-form').attr('action'),
      // Send source and target strings.
      data: {
        source: $('#l10n-client-string-editor .source-text').text(),
        target: $('#l10n-client-form .translation-target').val(),
        textgroup: $('#l10n-client-form .source-textgroup').val(),
        context: $('#l10n-client-string-editor .context').text(),
        'form_token': $('#l10n-client-form input[name=form_token]').val()
      },
      success: function (data) {
        // Store string in local js
        Drupal.l10nClient.setString(Drupal.l10nClient.selected, $('#l10n-client-form .translation-target').val());

        // Figure out the display of the new translation in the selection list.
        var newTranslation = $('#l10n-client-form .translation-target').val();
        var newTranslationDisplay = newTranslation;
        var newTranslationStripped = newTranslation.replace(/<\/?[^<>]+>/gi, '')
                                                   .replace(/&quot;/g, '"')
                                                   .replace(/&lt;/g, "<")
                                                   .replace(/&gt;/g, ">")
                                                   .replace(/&amp;/g, "&");
        if (newTranslationStripped.length == 0) {
          // Only contains HTML tags (edge case). Keep the whole string.
          // HTML tags will show up in the selector, but that is normal in this case.
          newTranslationDisplay = newTranslation;
        }
        else if (newTranslationStripped.length > 81) {
          // Long translation, strip length to display only first part.
          // We strip at 78 chars and add thre dots, if the total length is
          // above 81.
          newTranslationDisplay = newTranslationStripped.substr(0, 78) + '...';
        }

        // Mark string as translated.
        $('#l10n-client-string-select li').eq(Drupal.l10nClient.selected).removeClass('untranslated').removeClass('active').addClass('translated').text(newTranslationDisplay);

        // Empty input fields.
        $('#l10n-client-string-editor .source-text').html(data);
        $('#l10n-client-form .translation-target').val('');

      },
      error: function (xmlhttp) {
        alert(Drupal.t('An HTTP error @status occured.', { '@status': xmlhttp.status }));
      }
    });
    return false;
  });

};

})(jQuery);
;
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
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
 * Attaches double-click behavior to toggle full path of Krumo elements.
 */
Drupal.behaviors.devel = {
  attach: function (context, settings) {

    // Add hint to footnote
    $('.krumo-footnote .krumo-call').before('<img style="vertical-align: middle;" title="Click to expand. Double-click to show path." src="' + Drupal.settings.basePath + 'misc/help.png"/>');

    var krumo_name = [];
    var krumo_type = [];

    function krumo_traverse(el) {
      krumo_name.push($(el).html());
      krumo_type.push($(el).siblings('em').html().match(/\w*/)[0]);

      if ($(el).closest('.krumo-nest').length > 0) {
        krumo_traverse($(el).closest('.krumo-nest').prev().find('.krumo-name'));
      }
    }

    $('.krumo-child > div:first-child', context).dblclick(
      function(e) {
        if ($(this).find('> .krumo-php-path').length > 0) {
          // Remove path if shown.
          $(this).find('> .krumo-php-path').remove();
        }
        else {
          // Get elements.
          krumo_traverse($(this).find('> a.krumo-name'));

          // Create path.
          var krumo_path_string = '';
          for (var i = krumo_name.length - 1; i >= 0; --i) {
            // Start element.
            if ((krumo_name.length - 1) == i)
              krumo_path_string += '$' + krumo_name[i];

            if (typeof krumo_name[(i-1)] !== 'undefined') {
              if (krumo_type[i] == 'Array') {
                krumo_path_string += "[";
                if (!/^\d*$/.test(krumo_name[(i-1)]))
                  krumo_path_string += "'";
                krumo_path_string += krumo_name[(i-1)];
                if (!/^\d*$/.test(krumo_name[(i-1)]))
                  krumo_path_string += "'";
                krumo_path_string += "]";
              }
              if (krumo_type[i] == 'Object')
                krumo_path_string += '->' + krumo_name[(i-1)];
            }
          }
          $(this).append('<div class="krumo-php-path" style="font-family: Courier, monospace; font-weight: bold;">' + krumo_path_string + '</div>');

          // Reset arrays.
          krumo_name = [];
          krumo_type = [];
        }
      }
    );
  }
};

})(jQuery);
;
/*
 * jQuery Form Plugin
 * version: 2.67 (12-MAR-2011)
 * @requires jQuery v1.3.2 or later
 */
(function(b){b.fn.ajaxSubmit=function(t){if(!this.length){a("ajaxSubmit: skipping submit process - no element selected");return this}if(typeof t=="function"){t={success:t}}var h=this.attr("action");var d=(typeof h==="string")?b.trim(h):"";if(d){d=(d.match(/^([^#]+)/)||[])[1]}d=d||window.location.href||"";t=b.extend(true,{url:d,type:this[0].getAttribute("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var u={};this.trigger("form-pre-serialize",[this,t,u]);if(u.veto){a("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(t.beforeSerialize&&t.beforeSerialize(this,t)===false){a("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var f,p,m=this.formToArray(t.semantic);if(t.data){t.extraData=t.data;for(f in t.data){if(t.data[f] instanceof Array){for(var i in t.data[f]){m.push({name:f,value:t.data[f][i]})}}else{p=t.data[f];p=b.isFunction(p)?p():p;m.push({name:f,value:p})}}}if(t.beforeSubmit&&t.beforeSubmit(m,this,t)===false){a("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[m,this,t,u]);if(u.veto){a("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var c=b.param(m);if(t.type.toUpperCase()=="GET"){t.url+=(t.url.indexOf("?")>=0?"&":"?")+c;t.data=null}else{t.data=c}var s=this,l=[];if(t.resetForm){l.push(function(){s.resetForm()})}if(t.clearForm){l.push(function(){s.clearForm()})}if(!t.dataType&&t.target){var r=t.success||function(){};l.push(function(n){var k=t.replaceTarget?"replaceWith":"html";b(t.target)[k](n).each(r,arguments)})}else{if(t.success){l.push(t.success)}}t.success=function(w,n,x){var v=t.context||t;for(var q=0,k=l.length;q<k;q++){l[q].apply(v,[w,n,x||s,s])}};var g=b("input:file",this).length>0;var e="multipart/form-data";var j=(s.attr("enctype")==e||s.attr("encoding")==e);if(t.iframe!==false&&(g||t.iframe||j)){if(t.closeKeepAlive){b.get(t.closeKeepAlive,o)}else{o()}}else{b.ajax(t)}this.trigger("form-submit-notify",[this,t]);return this;function o(){var v=s[0];if(b(":input[name=submit],:input[id=submit]",v).length){alert('Error: Form elements must not have name or id of "submit".');return}var B=b.extend(true,{},b.ajaxSettings,t);B.context=B.context||B;var E="jqFormIO"+(new Date().getTime()),z="_"+E;var w=b('<iframe id="'+E+'" name="'+E+'" src="'+B.iframeSrc+'" />');var A=w[0];w.css({position:"absolute",top:"-1000px",left:"-1000px"});var x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){a("aborting upload...");var n="aborted";this.aborted=1;w.attr("src",B.iframeSrc);x.error=n;B.error&&B.error.call(B.context,x,"error",n);I&&b.event.trigger("ajaxError",[x,B,n]);B.complete&&B.complete.call(B.context,x,"error")}};var I=B.global;if(I&&!b.active++){b.event.trigger("ajaxStart")}if(I){b.event.trigger("ajaxSend",[x,B])}if(B.beforeSend&&B.beforeSend.call(B.context,x,B)===false){if(B.global){b.active--}return}if(x.aborted){return}var H=0;var y=v.clk;if(y){var F=y.name;if(F&&!y.disabled){B.extraData=B.extraData||{};B.extraData[F]=y.value;if(y.type=="image"){B.extraData[F+".x"]=v.clk_x;B.extraData[F+".y"]=v.clk_y}}}function G(){var O=s.attr("target"),M=s.attr("action");v.setAttribute("target",E);if(v.getAttribute("method")!="POST"){v.setAttribute("method","POST")}if(v.getAttribute("action")!=B.url){v.setAttribute("action",B.url)}if(!B.skipEncodingOverride){s.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})}if(B.timeout){setTimeout(function(){H=true;D()},B.timeout)}var N=[];try{if(B.extraData){for(var P in B.extraData){N.push(b('<input type="hidden" name="'+P+'" value="'+B.extraData[P]+'" />').appendTo(v)[0])}}w.appendTo("body");A.attachEvent?A.attachEvent("onload",D):A.addEventListener("load",D,false);v.submit()}finally{v.setAttribute("action",M);if(O){v.setAttribute("target",O)}else{s.removeAttr("target")}b(N).remove()}}if(B.forceSync){G()}else{setTimeout(G,10)}var K,L,J=50;function D(){if(x.aborted){return}var R=A.contentWindow?A.contentWindow.document:A.contentDocument?A.contentDocument:A.document;if(!R||R.location.href==B.iframeSrc){return}A.detachEvent?A.detachEvent("onload",D):A.removeEventListener("load",D,false);var N=true;try{if(H){throw"timeout"}var S=B.dataType=="xml"||R.XMLDocument||b.isXMLDoc(R);a("isXml="+S);if(!S&&window.opera&&(R.body==null||R.body.innerHTML=="")){if(--J){a("requeing onLoad callback, DOM not available");setTimeout(D,250);return}}x.responseText=R.body?R.body.innerHTML:R.documentElement?R.documentElement.innerHTML:null;x.responseXML=R.XMLDocument?R.XMLDocument:R;x.getResponseHeader=function(U){var T={"content-type":B.dataType};return T[U]};var Q=/(json|script)/.test(B.dataType);if(Q||B.textarea){var M=R.getElementsByTagName("textarea")[0];if(M){x.responseText=M.value}else{if(Q){var P=R.getElementsByTagName("pre")[0];var n=R.getElementsByTagName("body")[0];if(P){x.responseText=P.textContent}else{if(n){x.responseText=n.innerHTML}}}}}else{if(B.dataType=="xml"&&!x.responseXML&&x.responseText!=null){x.responseXML=C(x.responseText)}}K=k(x,B.dataType,B)}catch(O){a("error caught:",O);N=false;x.error=O;B.error&&B.error.call(B.context,x,"error",O);I&&b.event.trigger("ajaxError",[x,B,O])}if(x.aborted){a("upload aborted");N=false}if(N){B.success&&B.success.call(B.context,K,"success",x);I&&b.event.trigger("ajaxSuccess",[x,B])}I&&b.event.trigger("ajaxComplete",[x,B]);if(I&&!--b.active){b.event.trigger("ajaxStop")}B.complete&&B.complete.call(B.context,x,N?"success":"error");setTimeout(function(){w.removeData("form-plugin-onload");w.remove();x.responseXML=null},100)}var C=b.parseXML||function(n,M){if(window.ActiveXObject){M=new ActiveXObject("Microsoft.XMLDOM");M.async="false";M.loadXML(n)}else{M=(new DOMParser()).parseFromString(n,"text/xml")}return(M&&M.documentElement&&M.documentElement.nodeName!="parsererror")?M:null};var q=b.parseJSON||function(n){return window["eval"]("("+n+")")};var k=function(Q,O,N){var M=Q.getResponseHeader("content-type")||"",n=O==="xml"||!O&&M.indexOf("xml")>=0,P=n?Q.responseXML:Q.responseText;if(n&&P.documentElement.nodeName==="parsererror"){b.error&&b.error("parsererror")}if(N&&N.dataFilter){P=N.dataFilter(P,O)}if(typeof P==="string"){if(O==="json"||!O&&M.indexOf("json")>=0){P=q(P)}else{if(O==="script"||!O&&M.indexOf("javascript")>=0){b.globalEval(P)}}}return P}}};b.fn.ajaxForm=function(c){if(this.length===0){var d={s:this.selector,c:this.context};if(!b.isReady&&d.s){a("DOM not ready, queuing ajaxForm");b(function(){b(d.s,d.c).ajaxForm(c)});return this}a("terminating; zero elements found by selector"+(b.isReady?"":" (DOM not ready)"));return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(f){if(!f.isDefaultPrevented()){f.preventDefault();b(this).ajaxSubmit(c)}}).bind("click.form-plugin",function(j){var i=j.target;var g=b(i);if(!(g.is(":submit,input:image"))){var f=g.closest(":submit");if(f.length==0){return}i=f[0]}var h=this;h.clk=i;if(i.type=="image"){if(j.offsetX!=undefined){h.clk_x=j.offsetX;h.clk_y=j.offsetY}else{if(typeof b.fn.offset=="function"){var k=g.offset();h.clk_x=j.pageX-k.left;h.clk_y=j.pageY-k.top}else{h.clk_x=j.pageX-i.offsetLeft;h.clk_y=j.pageY-i.offsetTop}}}setTimeout(function(){h.clk=h.clk_x=h.clk_y=null},100)})};b.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};b.fn.formToArray=function(q){var p=[];if(this.length===0){return p}var d=this[0];var g=q?d.getElementsByTagName("*"):d.elements;if(!g){return p}var k,h,f,r,e,m,c;for(k=0,m=g.length;k<m;k++){e=g[k];f=e.name;if(!f){continue}if(q&&d.clk&&e.type=="image"){if(!e.disabled&&d.clk==e){p.push({name:f,value:b(e).val()});p.push({name:f+".x",value:d.clk_x},{name:f+".y",value:d.clk_y})}continue}r=b.fieldValue(e,true);if(r&&r.constructor==Array){for(h=0,c=r.length;h<c;h++){p.push({name:f,value:r[h]})}}else{if(r!==null&&typeof r!="undefined"){p.push({name:f,value:r})}}}if(!q&&d.clk){var l=b(d.clk),o=l[0];f=o.name;if(f&&!o.disabled&&o.type=="image"){p.push({name:f,value:l.val()});p.push({name:f+".x",value:d.clk_x},{name:f+".y",value:d.clk_y})}}return p};b.fn.formSerialize=function(c){return b.param(this.formToArray(c))};b.fn.fieldSerialize=function(d){var c=[];this.each(function(){var h=this.name;if(!h){return}var f=b.fieldValue(this,d);if(f&&f.constructor==Array){for(var g=0,e=f.length;g<e;g++){c.push({name:h,value:f[g]})}}else{if(f!==null&&typeof f!="undefined"){c.push({name:this.name,value:f})}}});return b.param(c)};b.fn.fieldValue=function(h){for(var g=[],e=0,c=this.length;e<c;e++){var f=this[e];var d=b.fieldValue(f,h);if(d===null||typeof d=="undefined"||(d.constructor==Array&&!d.length)){continue}d.constructor==Array?b.merge(g,d):g.push(d)}return g};b.fieldValue=function(c,j){var e=c.name,p=c.type,q=c.tagName.toLowerCase();if(j===undefined){j=true}if(j&&(!e||c.disabled||p=="reset"||p=="button"||(p=="checkbox"||p=="radio")&&!c.checked||(p=="submit"||p=="image")&&c.form&&c.form.clk!=c||q=="select"&&c.selectedIndex==-1)){return null}if(q=="select"){var k=c.selectedIndex;if(k<0){return null}var m=[],d=c.options;var g=(p=="select-one");var l=(g?k+1:d.length);for(var f=(g?k:0);f<l;f++){var h=d[f];if(h.selected){var o=h.value;if(!o){o=(h.attributes&&h.attributes.value&&!(h.attributes.value.specified))?h.text:h.value}if(g){return o}m.push(o)}}return m}return b(c).val()};b.fn.clearForm=function(){return this.each(function(){b("input,select,textarea",this).clearFields()})};b.fn.clearFields=b.fn.clearInputs=function(){return this.each(function(){var d=this.type,c=this.tagName.toLowerCase();if(d=="text"||d=="password"||c=="textarea"){this.value=""}else{if(d=="checkbox"||d=="radio"){this.checked=false}else{if(c=="select"){this.selectedIndex=-1}}}})};b.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||(typeof this.reset=="object"&&!this.reset.nodeType)){this.reset()}})};b.fn.enable=function(c){if(c===undefined){c=true}return this.each(function(){this.disabled=!c})};b.fn.selected=function(c){if(c===undefined){c=true}return this.each(function(){var d=this.type;if(d=="checkbox"||d=="radio"){this.checked=c}else{if(this.tagName.toLowerCase()=="option"){var e=b(this).parent("select");if(c&&e[0]&&e[0].type=="select-one"){e.find("option").selected(false)}this.selected=c}}})};function a(){if(b.fn.ajaxSubmit.debug){var c="[jquery.form] "+Array.prototype.join.call(arguments,"");if(window.console&&window.console.log){window.console.log(c)}else{if(window.opera&&window.opera.postError){window.opera.postError(c)}}}}})(jQuery);
;

(function($) {
//Global container.
window.imce = {tree: {}, findex: [], fids: {}, selected: {}, selcount: 0, ops: {}, cache: {}, urlId: {},
vars: {previewImages: 1, cache: 1},
hooks: {load: [], list: [], navigate: [], cache: []},

//initiate imce.
initiate: function() {
  imce.conf = Drupal.settings.imce || {};
  if (imce.conf.error != false) return;
  imce.FLW = imce.el('file-list-wrapper'), imce.SBW = imce.el('sub-browse-wrapper');
  imce.NW = imce.el('navigation-wrapper'), imce.BW = imce.el('browse-wrapper');
  imce.PW = imce.el('preview-wrapper'), imce.FW = imce.el('forms-wrapper');
  imce.updateUI();
  imce.prepareMsgs();//process initial status messages
  imce.initiateTree();//build directory tree
  imce.hooks.list.unshift(imce.processRow);//set the default list-hook.
  imce.initiateList();//process file list
  imce.initiateOps();//prepare operation tabs
  imce.refreshOps();
  imce.invoke('load', window);//run functions set by external applications.
},

//process navigation tree
initiateTree: function() {
  $('#navigation-tree li').each(function(i) {
    var a = this.firstChild, txt = a.firstChild;
    txt && (txt.data = imce.decode(txt.data));
    var branch = imce.tree[a.title] = {'a': a, li: this, ul: this.lastChild.tagName == 'UL' ? this.lastChild : null};
    if (a.href) imce.dirClickable(branch);
    imce.dirCollapsible(branch);
  });
},

//Add a dir to the tree under parent
dirAdd: function(dir, parent, clickable) {
  if (imce.tree[dir]) return clickable ? imce.dirClickable(imce.tree[dir]) : imce.tree[dir];
  var parent = parent || imce.tree['.'];
  parent.ul = parent.ul ? parent.ul : parent.li.appendChild(imce.newEl('ul'));
  var branch = imce.dirCreate(dir, imce.decode(dir.substr(dir.lastIndexOf('/')+1)), clickable);
  parent.ul.appendChild(branch.li);
  return branch;
},

//create list item for navigation tree
dirCreate: function(dir, text, clickable) {
  if (imce.tree[dir]) return imce.tree[dir];
  var branch = imce.tree[dir] = {li: imce.newEl('li'), a: imce.newEl('a')};
  $(branch.a).addClass('folder').text(text).attr('title', dir).appendTo(branch.li);
  imce.dirCollapsible(branch);
  return clickable ? imce.dirClickable(branch) : branch;
},

//change currently active directory
dirActivate: function(dir) {
  if (dir != imce.conf.dir) {
    if (imce.tree[imce.conf.dir]){
      $(imce.tree[imce.conf.dir].a).removeClass('active');
    }
    $(imce.tree[dir].a).addClass('active');
    imce.conf.dir = dir;
  }
  return imce.tree[imce.conf.dir];
},

//make a dir accessible
dirClickable: function(branch) {
  if (branch.clkbl) return branch;
  $(branch.a).attr('href', '#').removeClass('disabled').click(function() {imce.navigate(this.title); return false;});
  branch.clkbl = true;
  return branch;
},

//sub-directories expand-collapse ability
dirCollapsible: function (branch) {
  if (branch.clpsbl) return branch;
  $(imce.newEl('span')).addClass('expander').html('&nbsp;').click(function() {
    if (branch.ul) {
      $(branch.ul).toggle();
      $(branch.li).toggleClass('expanded');
      $.browser.msie && $('#navigation-header').css('top', imce.NW.scrollTop);
    }
    else if (branch.clkbl){
      $(branch.a).click();
    }
  }).prependTo(branch.li);
  branch.clpsbl = true;
  return branch;
},

//update navigation tree after getting subdirectories.
dirSubdirs: function(dir, subdirs) {
  var branch = imce.tree[dir];
  if (subdirs && subdirs.length) {
    var prefix = dir == '.' ? '' : dir +'/';
    for (var i in subdirs) {//add subdirectories
      imce.dirAdd(prefix + subdirs[i], branch, true);
    }
    $(branch.li).removeClass('leaf').addClass('expanded');
    $(branch.ul).show();
  }
  else if (!branch.ul){//no subdirs->leaf
    $(branch.li).removeClass('expanded').addClass('leaf');
  }
},

//process file list
initiateList: function(cached) {
  var L = imce.hooks.list, dir = imce.conf.dir, token = {'%dir':  dir == '.' ? $(imce.tree['.'].a).text() : imce.decode(dir)}
  imce.findex = [], imce.fids = {}, imce.selected = {}, imce.selcount = 0, imce.vars.lastfid = null;
  imce.tbody = imce.el('file-list').tBodies[0];
  if (imce.tbody.rows.length) {
    for (var row, i = 0; row = imce.tbody.rows[i]; i++) {
      var fid = row.id;
      imce.findex[i] = imce.fids[fid] = row;
      if (cached) {
        if (imce.hasC(row, 'selected')) {
          imce.selected[imce.vars.lastfid = fid] = row;
          imce.selcount++;
        }
      }
      else {
        for (var func, j = 0; func = L[j]; j++) func(row);//invoke list-hook
      }
    }
  }
  if (!imce.conf.perm.browse) {
    imce.setMessage(Drupal.t('File browsing is disabled in directory %dir.', token), 'error');
  }
},

//add a file to the list. (having properties name,size,formatted size,width,height,date,formatted date)
fileAdd: function(file) {
  var row, fid = file.name, i = imce.findex.length, attr = ['name', 'size', 'width', 'height', 'date'];
  if (!(row = imce.fids[fid])) {
    row = imce.findex[i] = imce.fids[fid] = imce.tbody.insertRow(i);
    for (var i in attr) row.insertCell(i).className = attr[i];
  }
  row.cells[0].innerHTML = row.id = fid;
  row.cells[1].innerHTML = file.fsize; row.cells[1].id = file.size;
  row.cells[2].innerHTML = file.width;
  row.cells[3].innerHTML = file.height;
  row.cells[4].innerHTML = file.fdate; row.cells[4].id = file.date;
  imce.invoke('list', row);
  if (imce.vars.prvfid == fid) imce.setPreview(fid);
  if (file.id) imce.urlId[imce.getURL(fid)] = file.id;
},

//remove a file from the list
fileRemove: function(fid) {
  if (!(row = imce.fids[fid])) return;
  imce.fileDeSelect(fid);
  imce.findex.splice(row.rowIndex, 1);
  $(row).remove();
  delete imce.fids[fid];
  if (imce.vars.prvfid == fid) imce.setPreview();
},

//return a file object containing all properties.
fileGet: function (fid) {
  var row = imce.fids[fid];
  var url = imce.getURL(fid);
  return row ? {
    name: imce.decode(fid),
    url: url,
    size: row.cells[1].innerHTML,
    bytes: row.cells[1].id * 1,
    width: row.cells[2].innerHTML * 1,
    height: row.cells[3].innerHTML * 1,
    date: row.cells[4].innerHTML,
    time: row.cells[4].id * 1,
    id: imce.urlId[url] || 0, //file id for newly uploaded files
    relpath: (imce.conf.dir == '.' ? '' : imce.conf.dir +'/') + fid //rawurlencoded path relative to file directory path.
  } : null;
},

//simulate row click. selection-highlighting
fileClick: function(row, ctrl, shft) {
  if (!row) return;
  var fid = typeof(row) == 'string' ? row : row.id;
  if (ctrl || fid == imce.vars.prvfid) {
    imce.fileToggleSelect(fid);
  }
  else if (shft) {
    var last = imce.lastFid();
    var start = last ? imce.fids[last].rowIndex : -1;
    var end = imce.fids[fid].rowIndex;
    var step = start > end ? -1 : 1;
    while (start != end) {
      start += step;
      imce.fileSelect(imce.findex[start].id);
    }
  }
  else {
    for (var fname in imce.selected) {
      imce.fileDeSelect(fname);
    }
    imce.fileSelect(fid);
  }
  //set preview
  imce.setPreview(imce.selcount == 1 ? imce.lastFid() : null);
},

//file select/deselect functions
fileSelect: function (fid) {
  if (imce.selected[fid] || !imce.fids[fid]) return;
  imce.selected[fid] = imce.fids[imce.vars.lastfid=fid];
  $(imce.selected[fid]).addClass('selected');
  imce.selcount++;
},
fileDeSelect: function (fid) {
  if (!imce.selected[fid] || !imce.fids[fid]) return;
  if (imce.vars.lastfid == fid) imce.vars.lastfid = null;
  $(imce.selected[fid]).removeClass('selected');
  delete imce.selected[fid];
  imce.selcount--;
},
fileToggleSelect: function (fid) {
  imce['file'+ (imce.selected[fid] ? 'De' : '') +'Select'](fid);
},

//process file operation form and create operation tabs.
initiateOps: function() {
  imce.setHtmlOps();
  imce.setUploadOp();//upload
  imce.setFileOps();//thumb, delete, resize
},

//process existing html ops.
setHtmlOps: function () {
  $(imce.el('ops-list')).children('li').each(function() {
    if (!this.firstChild) return $(this).remove();
    var name = this.id.substr(8);
    var Op = imce.ops[name] = {div: imce.el('op-content-'+ name), li: imce.el('op-item-'+ name)};
    Op.a = Op.li.firstChild;
    Op.title = Op.a.innerHTML;
    $(Op.a).click(function() {imce.opClick(name); return false;});
  });
},

//convert upload form to an op.
setUploadOp: function () {
  var form = imce.el('imce-upload-form');
  if (!form) return;
  $(form).ajaxForm(imce.uploadSettings()).find('fieldset').each(function() {//clean up fieldsets
    this.removeChild(this.firstChild);
    $(this).after(this.childNodes);
  }).remove();
  imce.opAdd({name: 'upload', title: Drupal.t('Upload'), content: form});//add op
},

//convert fileop form submit buttons to ops.
setFileOps: function () {
  var form = imce.el('imce-fileop-form');
  if (!form) return;
  $(form.elements.filenames).parent().remove();
  $(form).find('fieldset').each(function() {//remove fieldsets
    var $sbmt = $('input:submit', this);
    if (!$sbmt.size()) return;
    var Op = {name: $sbmt.attr('id').substr(5)};
    var func = function() {imce.fopSubmit(Op.name); return false;};
    $sbmt.click(func);
    Op.title = $(this).children('legend').remove().text() || $sbmt.val();
    Op.name == 'delete' ? (Op.func = func) : (Op.content = this.childNodes);
    imce.opAdd(Op);
  }).remove();
  imce.vars.opform = $(form).serialize();//serialize remaining parts.
},

//refresh ops states. enable/disable
refreshOps: function() {
  for (var p in imce.conf.perm) {
    if (imce.conf.perm[p]) imce.opEnable(p);
    else imce.opDisable(p);
  }
},

//add a new file operation
opAdd: function (op) {
  var oplist = imce.el('ops-list'), opcons = imce.el('op-contents');
  var name = op.name || ('op-'+ $(oplist).children('li').size());
  var title = op.title || 'Untitled';
  var Op = imce.ops[name] = {title: title};
  if (op.content) {
    Op.div = imce.newEl('div');
    $(Op.div).attr({id: 'op-content-'+ name, 'class': 'op-content'}).appendTo(opcons).append(op.content);
  }
  Op.a = imce.newEl('a');
  Op.li = imce.newEl('li');
  $(Op.a).attr({href: '#', name: name, title: title}).html('<span>' + title +'</span>').click(imce.opClickEvent);
  $(Op.li).attr('id', 'op-item-'+ name).append(Op.a).appendTo(oplist);
  Op.func = op.func || imce.opVoid;
  return Op;
},

//click event for file operations
opClickEvent: function(e) {
  imce.opClick(this.name);
  return false;
},

//void operation function
opVoid: function() {},

//perform op click
opClick: function(name) {
  var Op = imce.ops[name], oldop = imce.vars.op;
  if (!Op || Op.disabled) {
    return imce.setMessage(Drupal.t('You can not perform this operation.'), 'error');
  }
  if (Op.div) {
    if (oldop) {
      var toggle = oldop == name;
      imce.opShrink(oldop, toggle ? 'fadeOut' : 'hide');
      if (toggle) return false;
    }
    var left = Op.li.offsetLeft;
    var $opcon = $('#op-contents').css({left: 0});
    $(Op.div).fadeIn('normal', function() {
      setTimeout(function() {
        if (imce.vars.op) {
          var $inputs = $('input', imce.ops[imce.vars.op].div);
          $inputs.eq(0).focus();
          //form inputs become invisible in IE. Solution is as stupid as the behavior.
          $('html').is('.ie') && $inputs.addClass('dummyie').removeClass('dummyie');
       }
      });
    });
    var diff = left + $opcon.width() - $('#imce-content').width();
    $opcon.css({left: diff > 0 ? left - diff - 1 : left});
    $(Op.li).addClass('active');
    $(imce.opCloseLink).fadeIn(300);
    imce.vars.op = name;
  }
  Op.func(true);
  return true;
},

//enable a file operation
opEnable: function(name) {
  var Op = imce.ops[name];
  if (Op && Op.disabled) {
    Op.disabled = false;
    $(Op.li).show();
  }
},

//disable a file operation
opDisable: function(name) {
  var Op = imce.ops[name];
  if (Op && !Op.disabled) {
    Op.div && imce.opShrink(name);
    $(Op.li).hide();
    Op.disabled = true;
  }
},

//hide contents of a file operation
opShrink: function(name, effect) {
  if (imce.vars.op != name) return;
  var Op = imce.ops[name];
  $(Op.div).stop(true, true)[effect || 'hide']();
  $(Op.li).removeClass('active');
  $(imce.opCloseLink).hide();
  Op.func(false);
  imce.vars.op = null;
},

//navigate to dir
navigate: function(dir) {
  if (imce.vars.navbusy || (dir == imce.conf.dir && !confirm(Drupal.t('Do you want to refresh the current directory?')))) return;
  var cache = imce.vars.cache && dir != imce.conf.dir;
  var set = imce.navSet(dir, cache);
  if (cache && imce.cache[dir]) {//load from the cache
    set.success({data: imce.cache[dir]});
    set.complete();
  }
  else $.ajax(set);//live load
},
//ajax navigation settings
navSet: function (dir, cache) {
  $(imce.tree[dir].li).addClass('loading');
  imce.vars.navbusy = dir;
  return {url: imce.ajaxURL('navigate', dir),
  type: 'GET',
  dataType: 'json',
  success: function(response) {
    if (response.data && !response.data.error) {
      if (cache) imce.navCache(imce.conf.dir, dir);//cache the current dir
      imce.navUpdate(response.data, dir);
    }
    imce.processResponse(response);
  },
  complete: function () {
    $(imce.tree[dir].li).removeClass('loading');
    imce.vars.navbusy = null;
  }
  };
},

//update directory using the given data
navUpdate: function(data, dir) {
  var cached = data == imce.cache[dir], olddir = imce.conf.dir;
  if (cached) data.files.id = 'file-list';
  $(imce.FLW).html(data.files);
  imce.dirActivate(dir);
  imce.dirSubdirs(dir, data.subdirectories);
  $.extend(imce.conf.perm, data.perm);
  imce.refreshOps();
  imce.initiateList(cached);
  imce.setPreview(imce.selcount == 1 ? imce.lastFid() : null);
  imce.SBW.scrollTop = 0;
  imce.invoke('navigate', data, olddir, cached);
},

//set cache
navCache: function (dir, newdir) {
  var C = imce.cache[dir] = {'dir': dir, files: imce.el('file-list'), dirsize: imce.el('dir-size').innerHTML, perm: $.extend({}, imce.conf.perm)};
  C.files.id = 'cached-list-'+ dir;
  imce.FW.appendChild(C.files);
  imce.invoke('cache', C, newdir);
},

//validate upload form
uploadValidate: function (data, form, options) {
  var path = data[0].value;
  if (!path) return false;
  if (imce.conf.extensions != '*') {
    var ext = path.substr(path.lastIndexOf('.') + 1);
    if ((' '+ imce.conf.extensions +' ').indexOf(' '+ ext.toLowerCase() +' ') == -1) {
      return imce.setMessage(Drupal.t('Only files with the following extensions are allowed: %files-allowed.', {'%files-allowed': imce.conf.extensions}), 'error');
    }
  }
  var sep = path.indexOf('/') == -1 ? '\\' : '/';
  options.url = imce.ajaxURL('upload');//make url contain current dir.
  imce.fopLoading('upload', true);
  return true;
},

//settings for upload
uploadSettings: function () {
  return {beforeSubmit: imce.uploadValidate, success: function (response) {imce.processResponse($.parseJSON(response));}, complete: function () {imce.fopLoading('upload', false);}, resetForm: true};
},

//validate default ops(delete, thumb, resize)
fopValidate: function(fop) {
  if (!imce.validateSelCount(1, imce.conf.filenum)) return false;
  switch (fop) {
    case 'delete':
      return confirm(Drupal.t('Delete selected files?'));
    case 'thumb':
      if (!$('input:checked', imce.ops['thumb'].div).size()) {
        return imce.setMessage(Drupal.t('Please select a thumbnail.'), 'error');
      }
      return imce.validateImage();
    case 'resize':
      var w = imce.el('edit-width').value, h = imce.el('edit-height').value;
      var maxDim = imce.conf.dimensions.split('x');
      var maxW = maxDim[0]*1, maxH = maxW ? maxDim[1]*1 : 0;
      if (!(/^[1-9][0-9]*$/).test(w) || !(/^[1-9][0-9]*$/).test(h) || (maxW && (maxW < w*1 || maxH < h*1))) {
        return imce.setMessage(Drupal.t('Please specify dimensions within the allowed range that is from 1x1 to @dimensions.', {'@dimensions': maxW ? imce.conf.dimensions : Drupal.t('unlimited')}), 'error');
      }
      return imce.validateImage();
  }

  var func = fop +'OpValidate';
  if (imce[func]) return imce[func](fop);
  return true;
},

//submit wrapper for default ops
fopSubmit: function(fop) {
  switch (fop) {
    case 'thumb': case 'delete': case 'resize':  return imce.commonSubmit(fop);
  }
  var func = fop +'OpSubmit';
  if (imce[func]) return imce[func](fop);
},

//common submit function shared by default ops
commonSubmit: function(fop) {
  if (!imce.fopValidate(fop)) return false;
  imce.fopLoading(fop, true);
  $.ajax(imce.fopSettings(fop));
},

//settings for default file operations
fopSettings: function (fop) {
  return {url: imce.ajaxURL(fop), type: 'POST', dataType: 'json', success: imce.processResponse, complete: function (response) {imce.fopLoading(fop, false);}, data: imce.vars.opform +'&filenames='+ imce.serialNames() +'&jsop='+ fop + (imce.ops[fop].div ? '&'+ $('input, select, textarea', imce.ops[fop].div).serialize() : '')};
},

//toggle loading state
fopLoading: function(fop, state) {
  var el = imce.el('edit-'+ fop), func = state ? 'addClass' : 'removeClass'
  if (el) {
    $(el)[func]('loading').attr('disabled', state);
  }
  else {
    $(imce.ops[fop].li)[func]('loading');
    imce.ops[fop].disabled = state;
  }
},

//preview a file.
setPreview: function (fid) {
  var row, html = '';
  imce.vars.prvfid = fid;
  if (fid && (row = imce.fids[fid])) {
    var width = row.cells[2].innerHTML * 1;
    html = imce.vars.previewImages && width ? imce.imgHtml(fid, width, row.cells[3].innerHTML) : imce.decodePlain(fid);
    html = '<a href="#" onclick="imce.send(\''+ fid +'\'); return false;" title="'+ (imce.vars.prvtitle||'') +'">'+ html +'</a>';
  }
  imce.el('file-preview').innerHTML = html;
},

//default file send function. sends the file to the new window.
send: function (fid) {
  fid && window.open(imce.getURL(fid));
},

//add an operation for an external application to which the files are send.
setSendTo: function (title, func) {
  imce.send = function (fid) { fid && func(imce.fileGet(fid), window);};
  var opFunc = function () {
    if (imce.selcount != 1) return imce.setMessage(Drupal.t('Please select a file.'), 'error');
    imce.send(imce.vars.prvfid);
  };
  imce.vars.prvtitle = title;
  return imce.opAdd({name: 'sendto', title: title, func: opFunc});
},

//move initial page messages into log
prepareMsgs: function () {
  var msgs;
  if (msgs = imce.el('imce-messages')) {
    $('>div', msgs).each(function (){
      var type = this.className.split(' ')[1];
      var li = $('>ul li', this);
      if (li.size()) li.each(function () {imce.setMessage(this.innerHTML, type);});
      else imce.setMessage(this.innerHTML, type);
    });
    $(msgs).remove();
  }
},

//insert log message
setMessage: function (msg, type) {
  var $box = $(imce.msgBox);
  var logs = imce.el('log-messages') || $(imce.newEl('div')).appendTo('#help-box-content').before('<h4>'+ Drupal.t('Log messages') +':</h4>').attr('id', 'log-messages')[0];
  var msg = '<div class="message '+ (type || 'status') +'">'+ msg +'</div>';
  $box.queue(function() {
    $box.css({opacity: 0, display: 'block'}).html(msg);
    $box.dequeue();
  });
  var q = $box.queue().length, t = imce.vars.msgT || 1000;
  q = q < 2 ? 1 : q < 3 ? 0.8 : q < 4 ? 0.7 : 0.4;//adjust speed with respect to queue length
  $box.fadeTo(600 * q, 1).fadeTo(t * q, 1).fadeOut(400 * q);
  $(logs).append(msg);
  return false;
},

//invoke hooks
invoke: function (hook) {
  var i, args, func, funcs;
  if ((funcs = imce.hooks[hook]) && funcs.length) {
    (args = $.makeArray(arguments)).shift();
    for (i = 0; func = funcs[i]; i++) func.apply(this, args);
  }
},

//process response
processResponse: function (response) {
  if (response.data) imce.resData(response.data);
  if (response.messages) imce.resMsgs(response.messages);
},

//process response data
resData: function (data) {
  var i, added, removed;
  if (added = data.added) {
    var cnt = imce.findex.length;
    for (i in added) {//add new files or update existing
      imce.fileAdd(added[i]);
    }
    if (added.length == 1) {//if it is a single file operation
      imce.highlight(added[0].name);//highlight
    }
    if (imce.findex.length != cnt) {//if new files added, scroll to bottom.
      $(imce.SBW).animate({scrollTop: imce.SBW.scrollHeight}).focus();
    }
  }
  if (removed = data.removed) for (i in removed) {
    imce.fileRemove(removed[i]);
  }
  imce.conf.dirsize = data.dirsize;
  imce.updateStat();
},

//set response messages
resMsgs: function (msgs) {
  for (var type in msgs) for (var i in msgs[type]) {
    imce.setMessage(msgs[type][i], type);
  }
},

//return img markup
imgHtml: function (fid, width, height) {
  return '<img src="'+ imce.getURL(fid) +'" width="'+ width +'" height="'+ height +'" alt="'+ imce.decodePlain(fid) +'">';
},

//check if the file is an image
isImage: function (fid) {
  return imce.fids[fid].cells[2].innerHTML * 1;
},

//find the first non-image in the selection
getNonImage: function (selected) {
  for (var fid in selected) {
    if (!imce.isImage(fid)) return fid;
  }
  return false;
},

//validate current selection for images
validateImage: function () {
  var nonImg = imce.getNonImage(imce.selected);
  return nonImg ? imce.setMessage(Drupal.t('%filename is not an image.', {'%filename': imce.decode(nonImg)}), 'error') : true;
},

//validate number of selected files
validateSelCount: function (Min, Max) {
  if (Min && imce.selcount < Min) {
    return imce.setMessage(Min == 1 ? Drupal.t('Please select a file.') : Drupal.t('You must select at least %num files.', {'%num': Min}), 'error');
  }
  if (Max && Max < imce.selcount) {
    return imce.setMessage(Drupal.t('You are not allowed to operate on more than %num files.', {'%num': Max}), 'error');
  }
  return true;
},

//update file count and dir size
updateStat: function () {
  imce.el('file-count').innerHTML = imce.findex.length;
  imce.el('dir-size').innerHTML = imce.conf.dirsize;
},

//serialize selected files. return fids with a colon between them
serialNames: function () {
  var str = '';
  for (var fid in imce.selected) {
    str += ':'+ fid;
  }
  return str.substr(1);
},

//get file url. re-encode & and # for mod rewrite
getURL: function (fid) {
  var path = (imce.conf.dir == '.' ? '' : imce.conf.dir +'/') + fid;
  return imce.conf.furl + (imce.conf.modfix ? path.replace(/%(23|26)/g, '%25$1') : path);
},

//el. by id
el: function (id) {
  return document.getElementById(id);
},

//find the latest selected fid
lastFid: function () {
  if (imce.vars.lastfid) return imce.vars.lastfid;
  for (var fid in imce.selected);
  return fid;
},

//create ajax url
ajaxURL: function (op, dir) {
  return imce.conf.url + (imce.conf.clean ? '?' :'&') +'jsop='+ op +'&dir='+ (dir||imce.conf.dir);
},

//fast class check
hasC: function (el, name) {
  return el.className && (' '+ el.className +' ').indexOf(' '+ name +' ') != -1;
},

//highlight a single file
highlight: function (fid) {
  if (imce.vars.prvfid) imce.fileClick(imce.vars.prvfid);
  imce.fileClick(fid);
},

//process a row
processRow: function (row) {
  row.cells[0].innerHTML = '<span>' + imce.decodePlain(row.id) + '</span>';
  row.onmousedown = function(e) {
    var e = e||window.event;
    imce.fileClick(this, e.ctrlKey, e.shiftKey);
    return !(e.ctrlKey || e.shiftKey);
  };
  row.ondblclick = function(e) {
    imce.send(this.id);
    return false;
  };
},

//decode urls. uses unescape. can be overridden to use decodeURIComponent
decode: function (str) {
  return unescape(str);
},

//decode and convert to plain text
decodePlain: function (str) {
  return Drupal.checkPlain(imce.decode(str));
},

//global ajax error function
ajaxError: function (e, response, settings, thrown) {
  imce.setMessage(Drupal.ajaxError(response, settings.url).replace(/\n/g, '<br />'), 'error');
},

//convert button elements to standard input buttons
convertButtons: function(form) {
  $('button:submit', form).each(function(){
    $(this).replaceWith('<input type="submit" value="'+ $(this).text() +'" name="'+ this.name +'" class="form-submit" id="'+ this.id +'" />');
  });
},

//create element
newEl: function(name) {
  return document.createElement(name);
},

//scroll syncronization for section headers
syncScroll: function(scrlEl, fixEl, bottom) {
  var $fixEl = $(fixEl);
  var prop = bottom ? 'bottom' : 'top';
  var factor = bottom ? -1 : 1;
  var syncScrl = function(el) {
    $fixEl.css(prop, factor * el.scrollTop);
  }
  $(scrlEl).scroll(function() {
    var el = this;
    syncScrl(el);
    setTimeout(function() {
      syncScrl(el);
    });
  });
},

//get UI ready. provide backward compatibility.
updateUI: function() {
  //file urls.
  var furl = imce.conf.furl, isabs = furl.indexOf('://') > -1;
  var absurls = imce.conf.absurls = imce.vars.absurls || imce.conf.absurls;
  var host = location.host;
  var baseurl = location.protocol + '//' + host;
  if (furl.charAt(furl.length - 1) != '/') {
    furl = imce.conf.furl = furl + '/';
  }
  imce.conf.modfix = imce.conf.clean && furl.indexOf(host + '/system/') > -1;
  if (absurls && !isabs) {
    imce.conf.furl = baseurl + furl;
  }
  else if (!absurls && isabs && furl.indexOf(baseurl) == 0) {
    imce.conf.furl = furl.substr(baseurl.length);
  }
  //convert button elements to input elements.
  imce.convertButtons(imce.FW);
  //ops-list
  $('#ops-list').removeClass('tabs secondary').addClass('clear-block clearfix');
  imce.opCloseLink = $(imce.newEl('a')).attr({id: 'op-close-link', href: '#', title: Drupal.t('Close')}).click(function() {
    imce.vars.op && imce.opClick(imce.vars.op);
    return false;
  }).appendTo('#op-contents')[0];
  //navigation-header
  if (!$('#navigation-header').size()) {
    $(imce.NW).children('.navigation-text').attr('id', 'navigation-header').wrapInner('<span></span>');
  }
  //log
  $('#log-prv-wrapper').before($('#log-prv-wrapper > #preview-wrapper')).remove();
  $('#log-clearer').remove();
  //content resizer
  $('#content-resizer').remove();
  //message-box
  imce.msgBox = imce.el('message-box') || $(imce.newEl('div')).attr('id', 'message-box').prependTo('#imce-content')[0];
  //create help tab
  var $hbox = $('#help-box');
  $hbox.is('a') && $hbox.replaceWith($(imce.newEl('div')).attr('id', 'help-box').append($hbox.children()));
  imce.hooks.load.push(function() {
    imce.opAdd({name: 'help', title: $('#help-box-title').remove().text(), content: $('#help-box').show()});
  });
  //add ie classes
  $.browser.msie && $('html').addClass('ie') && parseFloat($.browser.version) < 8 && $('html').addClass('ie-7');
  // enable box view for file list
  imce.vars.boxW && imce.boxView();
  //scrolling file list
  imce.syncScroll(imce.SBW, '#file-header-wrapper');
  imce.syncScroll(imce.SBW, '#dir-stat', true);
  //scrolling directory tree
  imce.syncScroll(imce.NW, '#navigation-header');
}

};

//initiate
$(document).ready(imce.initiate).ajaxError(imce.ajaxError);

})(jQuery);;
//This pack implemets: keyboard shortcuts, file sorting, resize bars, and inline thumbnail preview.

(function($) {

// add scale calculator for resizing.
imce.hooks.load.push(function () {
  $('#edit-width, #edit-height').focus(function () {
    var fid, r, w, isW, val;
    if (fid = imce.vars.prvfid) {
      isW = this.id == 'edit-width', val =  imce.el(isW ? 'edit-height' : 'edit-width').value*1;
      if (val && (w = imce.isImage(fid)) && (r = imce.fids[fid].cells[3].innerHTML*1 / w))
        this.value = Math.round(isW ? val/r : val*r);
    }
  });
});

// Shortcuts
var F = null;
imce.initiateShortcuts = function () {
  $(imce.NW).attr('tabindex', '0').keydown(function (e) {
    if (F = imce.dirKeys['k'+ e.keyCode]) return F(e);
  });
  $(imce.FLW).attr('tabindex', '0').keydown(function (e) {
    if (F = imce.fileKeys['k'+ e.keyCode]) return F(e);
  }).focus();
};

//shortcut key-function pairs for directories
imce.dirKeys = {
  k35: function (e) {//end-home. select first or last dir
    var L = imce.tree['.'].li;
    if (e.keyCode == 35) while (imce.hasC(L, 'expanded')) L = L.lastChild.lastChild;
    $(L.childNodes[1]).click().focus();
  },
  k37: function (e) {//left-right. collapse-expand directories.(right may also move focus on files)
    var L, B = imce.tree[imce.conf.dir], right = e.keyCode == 39;
    if (B.ul && (right ^ imce.hasC(L = B.li, 'expanded')) ) $(L.firstChild).click();
    else if (right) $(imce.FLW).focus();
  },
  k38: function (e) {//up. select the previous directory
    var B = imce.tree[imce.conf.dir];
    if (L = B.li.previousSibling) {
      while (imce.hasC(L, 'expanded')) L = L.lastChild.lastChild;
      $(L.childNodes[1]).click().focus();
    }
    else if ((L = B.li.parentNode.parentNode) && L.tagName == 'LI') $(L.childNodes[1]).click().focus();
  },
  k40: function (e) {//down. select the next directory
    var B = imce.tree[imce.conf.dir], L = B.li, U = B.ul;
    if (U && imce.hasC(L, 'expanded')) $(U.firstChild.childNodes[1]).click().focus();
    else do {if (L.nextSibling) return $(L.nextSibling.childNodes[1]).click().focus();
    }while ((L = L.parentNode.parentNode).tagName == 'LI');
  }
};
//add equal keys
imce.dirKeys.k36 = imce.dirKeys.k35;
imce.dirKeys.k39 = imce.dirKeys.k37;

//shortcut key-function pairs for files
imce.fileKeys = {
  k38: function (e) {//up-down. select previous-next row
    var fid = imce.lastFid(), i = fid ? imce.fids[fid].rowIndex+e.keyCode-39 : 0;
    imce.fileClick(imce.findex[i], e.ctrlKey, e.shiftKey);
  },
  k35: function (e) {//end-home. select first or last row
    imce.fileClick(imce.findex[e.keyCode == 35 ? imce.findex.length-1 : 0], e.ctrlKey, e.shiftKey);
  },
  k13: function (e) {//enter-insert. send file to external app.
    imce.send(imce.vars.prvfid);
    return false;
  },
  k37: function (e) {//left. focus on directories
    $(imce.tree[imce.conf.dir].a).focus();
  },
  k65: function (e) {//ctrl+A to select all
    if (e.ctrlKey && imce.findex.length) {
      var fid = imce.findex[0].id;
      imce.selected[fid] ? (imce.vars.lastfid = fid) : imce.fileClick(fid);//select first row
      imce.fileClick(imce.findex[imce.findex.length-1], false, true);//shift+click last row
      return false;
    }
  }
};
//add equal keys
imce.fileKeys.k40 = imce.fileKeys.k38;
imce.fileKeys.k36 = imce.fileKeys.k35;
imce.fileKeys.k45 = imce.fileKeys.k13;
//add default operation keys. delete, R(esize), T(humbnails), U(pload)
$.each({k46: 'delete', k82: 'resize', k84: 'thumb', k85: 'upload'}, function (k, op) {
  imce.fileKeys[k] = function (e) {
    if (imce.ops[op] && !imce.ops[op].disabled) imce.opClick(op);
  };
});

//prepare column sorting
imce.initiateSorting = function() {
  //add cache hook. cache the old directory's sort settings before the new one replaces it.
  imce.hooks.cache.push(function (cache, newdir) {
    cache.cid = imce.vars.cid, cache.dsc = imce.vars.dsc;
  });
  //add navigation hook. refresh sorting after the new directory content is loaded.
  imce.hooks.navigate.push(function (data, olddir, cached) {
    cached ? imce.updateSortState(data.cid, data.dsc) : imce.firstSort();
  });
  imce.vars.cid = imce.cookie('imcecid') * 1;
  imce.vars.dsc = imce.cookie('imcedsc') * 1;
  imce.cols = imce.el('file-header').rows[0].cells;
  $(imce.cols).click(function () {imce.columnSort(this.cellIndex, imce.hasC(this, 'asc'));});
  imce.firstSort();
};

//sort the list for the first time
imce.firstSort = function() {
  imce.columnSort(imce.vars.cid, imce.vars.dsc);
};

//sort file list according to column index.
imce.columnSort = function(cid, dsc) {
  if (imce.findex.length < 2) return;
  if (cid == imce.vars.cid && dsc != imce.vars.dsc) {
    imce.findex.reverse();
  }
  else {
    var func = 'sort'+ (cid == 0 ? 'Str' : 'Num') + (dsc ? 'Dsc' : 'Asc');
    var prop = cid == 2 || cid == 3 ? 'innerHTML' : 'id';
    //sort rows
    imce.findex.sort(cid ? function(r1, r2) {return imce[func](r1.cells[cid][prop], r2.cells[cid][prop])} : function(r1, r2) {return imce[func](r1.id, r2.id)});
  }
  //insert sorted rows
  for (var row, i=0; row = imce.findex[i]; i++) {
    imce.tbody.appendChild(row);
  }
  imce.updateSortState(cid, dsc);
};

//update column states
imce.updateSortState = function(cid, dsc) {
  $(imce.cols[imce.vars.cid]).removeClass(imce.vars.dsc ? 'desc' : 'asc');
  $(imce.cols[cid]).addClass(dsc ? 'desc' : 'asc');
  imce.vars.cid != cid && imce.cookie('imcecid', imce.vars.cid = cid);
  imce.vars.dsc != dsc && imce.cookie('imcedsc', (imce.vars.dsc = dsc) ? 1 : 0);
};

//sorters
imce.sortStrAsc = function(a, b) {return a.toLowerCase() < b.toLowerCase() ? -1 : 1;};
imce.sortStrDsc = function(a, b) {return imce.sortStrAsc(b, a);};
imce.sortNumAsc = function(a, b) {return a-b;};
imce.sortNumDsc = function(a, b) {return b-a};

//set resizers for resizable areas and recall previous dimensions
imce.initiateResizeBars = function () {
  imce.setResizer('#navigation-resizer', 'X', imce.NW, null, 1, function(p1, p2, m) {
    p1 != p2 && imce.cookie('imcenww', p2);
  });
  imce.setResizer('#browse-resizer', 'Y', imce.BW, imce.PW, 50, function(p1, p2, m) {
    p1 != p2 && imce.cookie('imcebwh', p2);
  });
  imce.recallDimensions();
};

//set a resize bar
imce.setResizer = function (resizer, axis, area1, area2, Min, callback) {
  var opt = axis == 'X' ? {pos: 'pageX', func: 'width'} : {pos: 'pageY', func: 'height'};
  var Min = Min || 0;
  var $area1 = $(area1), $area2 = area2 ? $(area2) : null, $doc = $(document);
  $(resizer).mousedown(function(e) {
    var pos = e[opt.pos];
    var end = start = $area1[opt.func]();
    var Max = $area2 ? start + $area2[opt.func]() : 1200;
    var drag = function(e) {
      end = Math.min(Max - Min, Math.max(start + e[opt.pos] - pos, Min));
      $area1[opt.func](end);
      $area2 && $area2[opt.func](Max - end);
      return false;
    };
    var undrag = function(e) {
      $doc.unbind('mousemove', drag).unbind('mouseup', undrag);
      callback && callback(start, end, Max);
    };
    $doc.mousemove(drag).mouseup(undrag);
    return false;
  });
};

//get&set area dimensions of the last session from the cookie
imce.recallDimensions = function() {
  var $body = $(document.body);
  if (!$body.is('.imce')) return;
  //row heights
  imce.recallHeights(imce.cookie('imcebwh') * 1);
  $(window).resize(function(){imce.recallHeights()});
  //navigation wrapper
  var nwOldWidth = imce.cookie('imcenww') * 1;
  nwOldWidth && $(imce.NW).width(Math.min(nwOldWidth, $body.width() - 10));
};

//set row heights with respect to window height
imce.recallHeights = function(bwFixedHeight) {
  //window & body dimensions
  var winHeight = $.browser.opera ? window.innerHeight : $(window).height();
  var bodyHeight = $(document.body).outerHeight(true);
  var diff = winHeight - bodyHeight;
  var bwHeight = $(imce.BW).height(), pwHeight = $(imce.PW).height();
  if (bwFixedHeight) {
    //row heights
    diff -= bwFixedHeight - bwHeight;
    bwHeight = bwFixedHeight;
    pwHeight += diff;
  }
  else {
    diff = parseInt(diff/2);
    bwHeight += diff;
    pwHeight += diff;
  }
  $(imce.BW).height(bwHeight);
  $(imce.PW).height(pwHeight);
};

//cookie get & set
imce.cookie = function (name, value) {
  if (typeof(value) == 'undefined') {//get
    return unescape((document.cookie.match(new RegExp('(^|;) *'+ name +'=([^;]*)(;|$)')) || ['', '', ''])[2]);
  }
  document.cookie = name +'='+ escape(value) +'; expires='+ (new Date(new Date() * 1 + 15 * 86400000)).toGMTString() +'; path=' + Drupal.settings.basePath + 'imce';//set
};

//view thumbnails(smaller than tMaxW x tMaxH) inside the rows.
//Large images can also be previewed by setting imce.vars.prvstyle to a valid image style(imagecache preset)
imce.thumbRow = function (row) {
  var w = row.cells[2].innerHTML * 1;
  if (!w) return;
  var h = row.cells[3].innerHTML * 1;
  if (imce.vars.tMaxW < w || imce.vars.tMaxH < h) {
    if (!imce.vars.prvstyle || imce.conf.dir.indexOf('styles') == 0) return;
    var img = new Image();
    img.src = imce.imagestyleURL(imce.getURL(row.id), imce.vars.prvstyle);
    img.className = 'imagestyle-' + imce.vars.prvstyle;
  }
  else {
    var prvH = h, prvW = w;
    if (imce.vars.prvW < w || imce.vars.prvH < h) {
      if (h < w) {
        prvW = imce.vars.prvW;
        prvH = prvW*h/w;
      }
      else {
        prvH = imce.vars.prvH;
        prvW = prvH*w/h;
      }
    }
    var img = new Image(prvW, prvH);
    img.src = imce.getURL(row.id);
  }
  var cell = row.cells[0];
  cell.insertBefore(img, cell.firstChild);
};

//convert a file URL returned by imce.getURL() to an image style(imagecache preset) URL
imce.imagestyleURL = function (url, stylename) {
  var len = imce.conf.furl.length - 1;
  return url.substr(0, len) + '/styles/' + stylename + '/' + imce.conf.scheme + url.substr(len);
};

// replace table view with box view for file list
imce.boxView = function () {
  var w = imce.vars.boxW, h = imce.vars.boxH;
  if (!w || !h || $.browser.msie && parseFloat($.browser.version) < 8) return;
  var $body = $(document.body);
  var toggle = function() {
    $body.toggleClass('box-view');
    // refresh dom. required by all except FF.
    !$.browser.mozilla && $('#file-list').appendTo(imce.FW).appendTo(imce.FLW);
  };
  $body.append('<style type="text/css">.box-view #file-list td.name {width: ' + w + 'px;height: ' + h + 'px;} .box-view #file-list td.name span {width: ' + w + 'px;word-wrap: normal;text-overflow: ellipsis;}</style>');
  imce.hooks.load.push(function() {
    toggle();
    imce.SBW.scrollTop = 0;
    imce.opAdd({name: 'changeview', title: Drupal.t('Change view'), func: toggle});
  });
  imce.hooks.list.push(imce.boxViewRow);
};

// process a row for box view. include all data in box title.
imce.boxViewRow = function (row) {
  var s = ' | ', w = row.cells[2].innerHTML * 1, dim = w ? s + w + 'x' + row.cells[3].innerHTML * 1 : '';
  row.cells[0].title = imce.decode(row.id) + s + row.cells[1].innerHTML + (dim) + s + row.cells[4].innerHTML;
};

})(jQuery);;

(function($) {
//add hook:load. process mkdir form 
imce.hooks.load.push(function () {
  if (!(imce.mkdirForm = imce.el('imce-mkdir-form'))) return;
  var form = $(imce.mkdirForm);
  //clean up fieldsets
  form.find('fieldset').each(function() {
    this.removeChild(this.firstChild);
    $(this).after(this.childNodes);
  }).remove();
  imce.mkdirOps = {};
  form.find('input:submit').each(function(i) {
    var dop = this.id.substr(5);
    $(imce.mkdirOps[dop] = this).click(function() {imce.dopSubmit(dop); return false;});
  });
  imce.opAdd({name: 'mngdir', title: Drupal.t('Directory'), content: form});
  imce.mkdirRefreshOps();
  //add hook:navigate. set dirops visibility
  imce.hooks.navigate.push(function (data, olddir, cached) {
    imce.mkdirRefreshOps();
  });
  // add subdir selector
  imce.mkdirSubSelector();
});

//change dirops states.
imce.mkdirRefreshOps = function () {
  var perm, func = 'opDisable';
  for (var op in imce.mkdirOps) {
    if (perm = imce.conf.perm[op]) func = 'opEnable';
    $(imce.mkdirOps[op])[perm ? 'show' : 'hide']();
  }
  imce[func]('mngdir');
};

//successful mkdir
imce.mkdirSuccess = function (response) {
  if (response.data) {
    if (response.data.diradded) imce.dirSubdirs(imce.conf.dir, response.data.diradded);
    if (response.data.dirremoved) imce.rmdirSubdirs(imce.conf.dir, response.data.dirremoved);
    imce.mkdirSSBuild && imce.mkdirSSBuild();
  }
  if (response.messages) imce.resMsgs(response.messages);
};

//validate default dops(mkdir, rmdir)
imce.dopValidate = function(dop) {
  var dirname = imce.el('edit-dirname').value, dir = imce.conf.dir, branch = imce.tree[dir], newdir = (dir == '.' ? '' : dir +'/') + dirname;
  switch (dop) {
    case 'mkdir':
      if (imce.conf.mkdirnum && branch.ul && branch.ul.childNodes.length >= imce.conf.mkdirnum) {
        return imce.setMessage(Drupal.t('You are not alllowed to create more than %num directories.', {'%num': imce.conf.mkdirnum}), 'error');
      }
      if (dirname.search(/^[A-Za-z0-9_\-]+$/) == -1) {
        return imce.setMessage(Drupal.t('%dirname is not a valid directory name. It should contain only alphanumeric characters, hyphen and underscore.', {'%dirname': dirname}), 'error');
      }
      if (imce.tree[newdir]) {
        return imce.setMessage(Drupal.t('Subdirectory %dir already exists.', {'%dir': dirname}), 'error');
      }
      return true;
    case 'rmdir':
      if (!imce.tree[newdir]) {
        return imce.setMessage(Drupal.t('Subdirectory %dir does not exist.', {'%dir': dirname}), 'error');
      }
      return confirm(Drupal.t('Are you sure want to delete this subdirectory with all directories and files in it?'));
  }

  var func = dop +'DopValidate';
  if (imce[func]) return imce[func](dop);
  return true;
};

//submit directory operations
imce.dopSubmit = function(dop) {
  if (!imce.dopValidate(dop)) return false;
  var func = dop +'DopSubmit';
  if (imce[func]) return imce[func](dop);
  imce.fopLoading(dop, true);
  $.ajax(imce.dopSettings(dop));
};

//ajax settings for directory operations
imce.dopSettings = function (dop) {
  return {url: imce.ajaxURL(dop), type: 'POST', dataType: 'json', success: imce.mkdirSuccess, complete: function (response) {imce.fopLoading(dop, false); imce.mkdirForm.reset();}, data: $(imce.mkdirForm).serialize()};
};

//remove subdirectories
imce.rmdirSubdirs = function(dir, subdirs) {
  var branch = imce.tree[dir];
  if (branch.ul && subdirs && subdirs.length) {
    var prefix = dir == '.' ? '' : dir +'/';
    for (var i in subdirs) {
      var subdir = prefix + subdirs[i];
      if (imce.tree[subdir]) {
        $(imce.tree[subdir].li).remove();
        delete imce.tree[subdir];
        if (imce.cache[subdir]) {
          $(imce.cache[subdir].files).remove();
          delete imce.cache[subdir];
        }
      }
    }
    if (!$('li', branch.ul).size()) {
      $(branch.ul).remove();
      $(branch.li).removeClass('expanded').addClass('leaf');
      delete branch.ul;
    }
  }
};

// visual sub directory selector
imce.mkdirSubSelector = function () {
  var ie7 = $('html').is('.ie-7');
  var $inp = $(imce.el('edit-dirname'));
  // create selector
  var $subsel = $(imce.newEl('div')).attr({id: 'subdir-selector'}).css('display', 'none').appendTo(document.body);
  // create selector button
  var $button = $(imce.newEl('a')).attr({id: 'subdir-selector-button', href: '#'}).click(function() {
    var offset = $inp.offset();
    offset.top += $inp.outerHeight();
    $subsel.css(offset).slideDown('normal', itemfocus);
    $(document).mouseup(hide);
    ie7 && $subsel.css('width', 'auto') && $subsel.width($subsel[0].offsetWidth);
    return false;
  }).insertAfter($inp[0]);
  // focus on first subdir item
  var itemfocus = function(){$subsel.children().eq(0).focus()};
  // hide selector
  var hide = function(e){
    if (e.target != $subsel[0]) {
      $subsel.hide();
      $(document).unbind('mouseup', hide);
    }
  };
  // adjust newdir input
  var newdir = imce.el('edit-newdirname');
  newdir && $(newdir).css('marginRight', parseFloat($(newdir).css('marginRight')) + parseFloat($button.css('width')));
  // subdir click
  var subclick = function() {
    $inp.val(this.title.substr(this.title.lastIndexOf('/') + 1)).focus();
    $subsel.hide();
    return false;
  };
  // subdir process
  var subproc = function(i, a) {
    $(imce.newEl('a')).attr({href: '#', title: a.title}).html(a.innerHTML).click(subclick).appendTo($subsel[0]);
  };
  // navigation hook
  var navhook = imce.mkdirSSBuild = function() {
    var branch = imce.tree[imce.conf.dir];
    $subsel.empty();
    if (branch.ul && branch.ul.firstChild) {
      $(branch.ul).children('li').children('a').each(subproc);
      $button.css('visibility', 'visible');
    }
    else {
      $button.css('visibility', 'hidden');
    }
  };
  imce.hooks.navigate.push(navhook);
  navhook();
};

})(jQuery);;
/*
 * IMCE Integration by URL
 * Ex-1: http://example.com/imce?app=XEditor|url@urlFieldId|width@widthFieldId|height@heightFieldId
 * Creates "Insert file" operation tab, which fills the specified fields with url, width, height properties
 * of the selected file in the parent window
 * Ex-2: http://example.com/imce?app=XEditor|sendto@functionName
 * "Insert file" operation calls parent window's functionName(file, imceWindow)
 * Ex-3: http://example.com/imce?app=XEditor|imceload@functionName
 * Parent window's functionName(imceWindow) is called as soon as IMCE UI is ready. Send to operation
 * needs to be set manually. See imce.setSendTo() method in imce.js
 */

(function($) {

var appFields = {}, appWindow = (top.appiFrm||window).opener || parent;

// Execute when imce loads.
imce.hooks.load.push(function(win) {
  var index = location.href.lastIndexOf('app=');
  if (index == -1) return;
  var data = decodeURIComponent(location.href.substr(index + 4)).split('|');
  var arr, prop, str, func, appName = data.shift();
  // Extract fields
  for (var i = 0, len = data.length; i < len; i++) {
    str = data[i];
    if (!str.length) continue;
    if (str.indexOf('&') != -1) str = str.split('&')[0];
    arr = str.split('@');
    if (arr.length > 1) {
      prop = arr.shift();
      appFields[prop] = arr.join('@');
    }
  }
  // Run custom onload function if available
  if (appFields.imceload && (func = isFunc(appFields.imceload))) {
    func(win);
    delete appFields.imceload;
  }
  // Set custom sendto function. appFinish is the default.
  var sendtoFunc = appFields.url ? appFinish : false;
  //check sendto@funcName syntax in URL
  if (appFields.sendto && (func = isFunc(appFields.sendto))) {
    sendtoFunc = func;
    delete appFields.sendto;
  }
  // Check old method windowname+ImceFinish.
  else if (win.name && (func = isFunc(win.name +'ImceFinish'))) {
    sendtoFunc = func;
  }
  // Highlight file
  if (appFields.url) {
    // Support multiple url fields url@field1,field2..
    if (appFields.url.indexOf(',') > -1) {
      var arr = appFields.url.split(',');
      for (var i in arr) {
        if ($('#'+ arr[i], appWindow.document).size()) {
          appFields.url = arr[i];
          break;
        }
      }
    }
    var filename = $('#'+ appFields.url, appWindow.document).val() || '';
    imce.highlight(filename.substr(filename.lastIndexOf('/')+1));
  }
  // Set send to
  sendtoFunc && imce.setSendTo(Drupal.t('Insert file'), sendtoFunc);
});

// Default sendTo function
var appFinish = function(file, win) {
  var $doc = $(appWindow.document);
  for (var i in appFields) {
    $doc.find('#'+ appFields[i]).val(file[i]);
  }
  if (appFields.url) {
    try{
      $doc.find('#'+ appFields.url).blur().change().focus();
    }catch(e){
      try{
        $doc.find('#'+ appFields.url).trigger('onblur').trigger('onchange').trigger('onfocus');//inline events for IE
      }catch(e){}
    }
  }
  appWindow.focus();
  win.close();
};

// Checks if a string is a function name in the given scope.
// Returns function reference. Supports x.y.z notation.
var isFunc = function(str, scope) {
  var obj = scope || appWindow;
  var parts = str.split('.'), len = parts.length;
  for (var i = 0; i < len && (obj = obj[parts[i]]); i++);
  return obj && i == len && (typeof obj == 'function' || typeof obj != 'string' && !obj.nodeName && obj.constructor != Array && /^[\s[]?function/.test(obj.toString())) ? obj : false;
}

})(jQuery);;
