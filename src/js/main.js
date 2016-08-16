
'use strict';

var asyncJS = document.createElement('script');
asyncJS.setAttribute('src', 'src/js/asyncCSS.js');
asyncJS.setAttribute('async', '');

var cssImage = document.createElement('link');
cssImage.rel = 'stylesheet';
cssImage.href = 'src/css/image-profile.css';

var cssFonts = document.createElement('link');
cssFonts.rel = 'stylesheet';
cssFonts.href = 'src/css/fonts.css';

var cssIcons = document.createElement('link');
cssIcons.rel = 'stylesheet';
cssIcons.href = 'src/css/material-icons.css';

var iLinkedin = document.createElement('i');
iLinkedin.setAttribute('class', 'material-icons');
iLinkedin.textContent = 'person_pin';

var iMail = document.createElement('i');
iMail.setAttribute('class', 'material-icons');
iMail.textContent = 'contact_mail';



var userAgent = navigator.userAgent.toLowerCase();
var jsCurrentDate = document.getElementsByTagName('script');
var head = document.getElementsByTagName('head')[0];
var body = document.getElementsByTagName('body')[0];
var aLinkedIn = document.getElementsByTagName('a')[0];
var aMail = document.getElementsByTagName('a')[1];

// Preguntamos cual es el cliente del navegador
if (userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|webos|wos)/i) !== -1) {
  // Cargamos un JS asincrono que cargará los CSS de imagen y fuente cuando estemos en mobile
  body.appendChild(asyncJS);

} else {

  // Cargamos con JS los siguientes CSS
  head.appendChild(cssImage);
  head.appendChild(cssFonts);
  head.appendChild(cssIcons);

  // Construimos los iconos dentro de los enlaces
  aLinkedIn.insertBefore(iLinkedin, aLinkedIn.firstChild);
  aMail.insertBefore(iMail, aMail.firstChild);

}
