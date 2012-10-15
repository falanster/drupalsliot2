Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"Возникла AJAX HTTP ошибка.", "HTTP Result Code: !status":"Полученный код HTTP: !status", "An AJAX HTTP request terminated abnormally.":"HTTP запрос AJAX завершен неправильно.", "Debugging information follows.":"Следует отладочная информация.", "Path: !uri":"Путь: !uri", "StatusText: !statusText":"СтатусТекстом", "ResponseText: !responseText":"ОтветТекстом: !responseText", "ReadyState: !readyState":"ReadyState: !readyState", "Configure":"Настроить", "Hide":"Скрыть", "Show":"Показать", "Re-order rows by numerical weight instead of dragging.":"Упорядочить строки по весу вместо перетаскивания.", "Show row weights":"Показать вес строк", "Hide row weights":"Скрыть вес строк", "Drag to re-order":"Изменить порядок можно, перетащив пункт мышкой.", "Changes made in this table will not be saved until the form is submitted.":"Сделанные в списке изменения не вступят в силу, пока вы не сохраните их.", "+@count":"+@count", "-@count":"-@count", "Please wait...":"Пожалуйста, подождите...", "(active tab)":"(активная вкладка)", "Not published":"Не опубликовано", "Edit":"Редактировать", "Add":"Добавить", "Remove group":"Удалить условие", "Apply (all displays)":"Применить (все отображения)", "Revert to default":"Вернуть к настройкам по умолчанию", "Apply (this display)":"Применить (это отображение)", "Not restricted":"Без ограничений", "Restricted to certain pages":"Ограничено для определённых страниц", "Not customizable":"Не настраиваемый", "The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\u002Fem\u003E button is clicked.":"Изменения, сделанные в блоках не вступят в силу пока вы не нажмете кнопку \u003Cem\u003EСохранить блоки\u003C\u002Fem\u003E.", "The block cannot be placed in this region.":"Блок не может быть размещён в этом регионе.", "Translatable":"Переводимый", "Select all rows in this table":"Отметить все строки таблицы", "Deselect all rows in this table":"Снять отметку со всех колонок таблицы", "Wed":"ср", "Sat":"сб", "Saturday":"суббота", "This permission is inherited from the authenticated user role.":"Это право наследуется от роли «Зарегистрированный пользователь».", "Autocomplete popup":"Всплывающее автозаполнение", "Searching for matches...":"Поиск совпадений...", "Thu":"чт", "Done":"Готово", "Sunday":"воскресенье", "Sun":"вс", "Monday":"понедельник", "Oct":"Окт", "Upload":"Закачать", "Hide summary":"Скрыть анонс", "Edit summary":"Редактировать анонс", "The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"Выбранный файл %filename не может быть загружен. Возможно загрузка файлов только со следующими расширениями: %extensions.", "Not in menu":"Не в меню", "New revision":"Новая редакция", "No revision":"Нет редакции", "By @name on @date":"@name, @date", "By @name":"@name", "Automatic alias":"Автоматический синоним", "Alias: @alias":"Синоним: @alias", "No alias":"Синоним не задан", "Available tokens":"Доступные маркеры", "Insert this token into your form":"Вставить этот токен в вашу форму", "First click a text field to insert your tokens into.":"Сначала кликните в текстовое поле, чтобы вставитьтокены.", "Next":"Далее", "Tuesday":"вторник", "Wednesday":"среда", "Thursday":"четверг", "Friday":"пятница", "Year":"Год", "Month":"Месяц", "Prev":"Назад", "Day":"День", "Mon":"пн", "Tue":"вт", "Fri":"пт", "January":"января", "February":"февраля", "March":"марта", "April":"апреля", "May":"мая", "June":"июня", "July":"июля", "August":"августа", "September":"сентября", "October":"октября", "November":"ноября", "December":"декабря", "Today":"Сегодня", "Jan":"Янв", "Feb":"Фев", "Mar":"Мар", "Apr":"Апр", "Jun":"Июн", "Jul":"Июл", "Aug":"Авг", "Sep":"Сен", "Nov":"Ноя", "Dec":"Дек", "Su":"Вс", "Mo":"Пн", "Tu":"Вт", "We":"Ср", "Th":"Чт", "Fr":"Пт", "Sa":"Сб", "mm\u002Fdd\u002Fyy":"мм\u002Fдд\u002Fгг", "Only files with the following extensions are allowed: %files-allowed.":"Прикреплять можно только файлы с расширениями: %files-allowed.", "Requires a title":"Требуется заголовок", "Don\u0027t display post information":"Не показывать информацию материала", "Directory":"Каталог", "File browsing is disabled in directory %dir.":"Просмотр файлов запрещен для папки %dir.", "You can not perform this operation.":"Вы не можете выполнить эту операцию.", "Do you want to refresh the current directory?":"Вы хотите обновить текущую папку?", "Delete selected files?":"Удалить выбранные файлы?", "Please select a thumbnail.":"Выберите миниатюру.", "Please specify dimensions within the allowed range that is from 1x1 to @dimensions.":"Пожалуйста укажите размер внутри разрешённого диапозона от 1x1 до @dimensions.", "Please select a file.":"Выберите файл.", "Log messages":"Сообщения в лог", "%filename is not an image.":"Файл %filename не является изображением.", "You must select at least %num files.":"Необходимо выбрать не менее %num файлов.", "You are not allowed to operate on more than %num files.":"Вам не разрешено управлять больше чем с %num файлами.", "Close":"Закрыть", "Change view":"Сменить вид", "You are not alllowed to create more than %num directories.":"Вам запрещено создавать папок больше %num.", "%dirname is not a valid directory name. It should contain only alphanumeric characters, hyphen and underscore.":"%dirname - это неверное имя для папки. Оно должно содержать только буквы, цифры, дефисы или нижние подчеркивания.", "Subdirectory %dir already exists.":"Подпапка %dir уже существует.", "Subdirectory %dir does not exist.":"Папка %dir не существует.", "Are you sure want to delete this subdirectory with all directories and files in it?":"Вы точно хотите удалить эту подпапку со всем содержимым?", "Insert file":"Вставить файл", "Second":"Секунда", "Hour":"Час", "Minute":"Минута", "Seconds":"Секунды", "Days":"Дней", "Hours":"Часов", "Minutes":"Минут"}} };