
'use strict';

var bgJS = document.createElement('script');
var asyncJS = document.createElement('script');
var cssFonts = document.createElement('link');
var userAgent = navigator.userAgent.toLowerCase();
var jsCurrentDate = document.getElementsByTagName('script');
var head = document.getElementsByTagName('head')[0];
var body = document.getElementsByTagName('body')[0];
var aMail = document.getElementsByTagName('a')[0];
var aLinkedIn = document.getElementsByTagName('a')[1];
var aTwitter = document.getElementsByTagName('a')[2];

// adding the propieties to the variabels
bgJS.setAttribute('src', 'src/js/currentBackground.js');
asyncJS.setAttribute('src', 'src/js/asyncCSS.js');
asyncJS.setAttribute('async', '');
cssFonts.rel = 'stylesheet';
cssFonts.href = 'src/css/fonts.css';

// Preguntamos cual es el cliente del navegador
if (userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|webos|wos)/i) !== -1) {
  // Cargamos un JS asincrono que cargará los CSS de imagen y fuente cuando estemos en mobile para que la carga sea óptima
  body.appendChild(asyncJS);

} else {

  // Cargamos con JS los siguientes CSS
  body.appendChild(bgJS);
  head.appendChild(cssFonts);

}
