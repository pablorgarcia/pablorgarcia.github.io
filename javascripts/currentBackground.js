
'use strict';

var cssWhite = document.createElement('link');
cssWhite.rel = 'stylesheet';
cssWhite.href = 'src/css/white-background.css';

var cssGreen = document.createElement('link');
cssGreen.rel = 'stylesheet';
cssGreen.href = 'src/css/green-background.css';


/* Que hora es?
de las 6h a las 8h de la noche en verde
de las 8h a las 19h de la tarde blanco
de las 19h a las 21h de la noche en verde
*/

var date = new Date;
var currentHour = date.getHours();

if (currentHour >= 8 && currentHour < 19) {
  document.getElementsByTagName('head')[0].appendChild(cssWhite);
} else {
  document.getElementsByTagName('head')[0].appendChild(cssGreen);
}