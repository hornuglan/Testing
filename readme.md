# Тестовое задание Selectel

Сверстайте страницу по макету Figma (для полноценного просмотра необходима регистрация):
http://slc.tl/UYfao

Данные для отображения конфигураций серверов необходимо получать GET запросом из API:
https://api.jsonbin.io/b/5b683d097b212953678c03dd

API возвращает массив конфигураций серверов в формате JSON. Каждая конфигурация представляет собой объект со следующими полями:

| Поле {тип}      | Описание                  |
|-----------------|---------------------------|
| cpu {string}    | Наименование процессора   |
| hdd {number}    | Объем жесткого диска в ГБ |
| ram {number}    | Объем памяти в ГБ         |
| price {number}  | Цена в месяц в копейках   |

Мы обратим внимание на:

* соответствие вёрстки исходному макету;
* способность исправить очевидные ошибки дизайнера, если они присутствуют;
* организацию и качество кода;
* корректное отображение в разных браузерах: последние версии Chrome, Opera, Firefox, Safari, Edge, Internet Explorer 10+;
* валидность кода (https://validator.w3.org/nu/).

Обязательные требования к коду:

* наименование классов и организация css-модулей по БЭМ (https://nicothin.github.io/idiomatic-pre-CSS/);
* использование Pug для HTML и Stylus для CSS;
* использование Gulp для автоматизации, оптимизации и сборки;
* использование нативного JS.

Поведение элементов:

* title и description страницы -- "Тестовое задание Selectel";
* favicon -- файл favicon.png из архива с заданием;
* логотипы Selectel в хэдере и футере, а также все кнопки "Заказать" открывают страницу https://selectel.ru/ в новой вкладке браузера;
* по нажатию на телефон в хэдере осуществляется звонок на указанный номер;
* слайды сменяются автоматически каждые 5 секунд, а также по нажатию на кнопки в нижней части слайдера;
* анимация смены слайда -- плавное изменение прозрачности длительностью 0.6 секунды;
* плюсом будет реализованная в мобильной версии возможность перелистывания слайдов свайпом по экрану (анимация остается прежней);
* до загрузки данных из API вместо карточек конфигураций отображается картинка loader.svg из архива с заданием;
* в случае ошибки при загрузке данных из API вместо картинки выводится текст "Ошибка соединения";
* кнопки социальных сетей в футере открывают в новой вкладке следующие страницы соответственно:
  * https://vk.com/selectel
  * https://www.facebook.com/selectel/
  * https://twitter.com/selectel
  * https://habrahabr.ru/company/selectel/
  * https://www.youtube.com/channel/UCVU0Ml1l_Y90wmy5EjWTSng
  * https://www.instagram.com/selectel.ru/

Исходники проекта должны быть выложены в публичном репозитории на GitHub. Плюсом будет реализация работающей страницы на GitHub Pages.

Если будут вопросы по заданию, пишите в Telegram @art_bazhin или vk.com/art_bazhin