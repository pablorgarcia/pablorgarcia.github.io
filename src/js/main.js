
'use strict';

var bgJS = document.createElement('script');
bgJS.setAttribute('src', 'src/js/currentBackground.js');

var asyncJS = document.createElement('script');
asyncJS.setAttribute('src', 'src/js/asyncCSS.js');
asyncJS.setAttribute('async', '');

var cssFonts = document.createElement('link');
cssFonts.rel = 'stylesheet';
cssFonts.href = 'src/css/fonts.css';

var cssImage = document.createElement('link');
cssImage.rel = 'stylesheet';
cssImage.href = 'src/css/image-profile.css';


var userAgent = navigator.userAgent.toLowerCase();
var jsCurrentDate = document.getElementsByTagName('script');
var head = document.getElementsByTagName('head')[0];
var body = document.getElementsByTagName('body')[0];
var aLinkedIn = document.getElementsByTagName('a')[0];
var aMail = document.getElementsByTagName('a')[1];

// Preguntamos cual es el cliente del navegador
if (userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|webos|wos)/i) !== -1) {
  // Cargamos un JS asincrono que cargará los CSS de imagen y fuente cuando estemos en mobile para que la carga sea óptima
  body.appendChild(asyncJS);

} else {

  // Cargamos con JS los siguientes CSS
  body.appendChild(bgJS);
  head.appendChild(cssFonts);
  head.appendChild(cssImage);

}
