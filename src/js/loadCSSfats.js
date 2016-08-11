// Cargamos de forma aasincrona los CSS para facilitar la carga del contenido de la página

var fontsCSS = document.createElement('link');
fontsCSS.rel = 'stylesheet';
fontsCSS.href = 'src/css/fonts.min.css';
document.getElementsByTagName('head')[0].appendChild(fontsCSS);

var iconsCSS = document.createElement('link');
iconsCSS.rel = 'stylesheet';
iconsCSS.href = 'src/css/material-icons.min.css';
document.getElementsByTagName('head')[0].appendChild(iconsCSS);

var mainCSS = document.createElement('link');
mainCSS.rel = 'stylesheet';
mainCSS.href = 'src/css/main.min.css';
document.getElementsByTagName('head')[0].appendChild(mainCSS);