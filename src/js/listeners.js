
// The init function do the animation control 
document.addEventListener('DOMContentLoaded', init, false);

// Firsts LinkedIn, E-mail and About me links
for(var i=0; i<3; i++) {
  anchor[i].addEventListener('click', linkCliked, false);
}

// About text link
anchor[2].addEventListener('click', internalURL, false);
/*
http://stackoverflow.com/questions/3498492/javascriptvoid0-vs-return-false-vs-preventdefault
http://lea.verou.me/2011/05/change-url-hash-without-page-jump/
*/


//about_text.addEventListener('click', internalURL, false);

// Analytics LinkedIn clicado
anchor[0].addEventListener(
  'click',
  _gaq.push([‘_trackEvent‘,‘LinkedIn’,’clickado’]),
  false);
