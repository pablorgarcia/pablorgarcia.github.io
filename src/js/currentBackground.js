
'use strict';

var cssWhite = document.createElement('link');
cssWhite.rel = 'stylesheet';
cssWhite.href = 'src/css/white-background.css';

var cssGreen = document.createElement('link');
cssGreen.rel = 'stylesheet';
cssGreen.href = 'src/css/green-background.css';

var cssBlack = document.createElement('link');
cssBlack.rel = 'stylesheet';
cssBlack.href = 'src/css/black-background.css';



/* Que hora es?
si estoy entre esta hora 1 y esta hora 2 aplico este CSS
si estoy entre esta hora 2 y esta hora 3 este otro CSS
si estoy entre esta hora 3 y esta hora 4 este otro CSS
--
de las 8h a las 19h de la tarde blanco
de las 19h a las 21h de la noche en verde
de las 21h a las 6h de la noche en negro
de las 6h a las 8h de la noche en verde
*/

var date = new Date;
var currentHour = date.getHours();

if (currentHour >= 8 && currentHour < 19) {
  document.getElementsByTagName('head')[0].appendChild(cssWhite);
} else if (currentHour >= 19 && currentHour < 21) {
  document.getElementsByTagName('head')[0].appendChild(cssGreen);
} else if (currentHour >= 21 && currentHour < 6) {
  document.getElementsByTagName('head')[0].appendChild(cssBlack);
} else if (currentHour >= 6 && currentHour < 8) {
  document.getElementsByTagName('head')[0].appendChild(cssGreen);
} else { console.log('some problem to load the background CSS'); }
