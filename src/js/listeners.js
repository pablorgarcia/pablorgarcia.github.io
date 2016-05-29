
// The init function to do the animation control
document.addEventListener('DOMContentLoaded', init, false);

// Firsts LinkedIn, E-mail and About me links
for(var i=0; i<3; i++) { anchor[i].addEventListener('click', linkCliked, false); }

// Back to Home link
//anchor[5].addEventListener('click', backToHome, false);

/* ERROR: "_gaq is not defined"
// Analytics: LinkedIn clicado
anchor[0].addEventListener('click', ga('send', 'event', 'link', 'click', 'LinkedIn'), false);
anchor[0].addEventListener('click', _gaq.push(['_trackEvent','LinkedIn','clickado']), false);
// Analytics: Email clicado
anchor[1].addEventListener('click', _gaq.push(['_trackEvent','Email','clickado']), false);
// Analytics: About me clicado
anchor[2].addEventListener('click', _gaq.push(['_trackEvent','About-me','clickado']), false);
// Analytics: Language clicado
//.addEventListener('click', _gaq.push(['_trackEvent','Language','clickado']), false);
*/
// onclick="ga('send', 'event', 'link','click', 'Download clicado');"

/*
jQuery(document).ready(function ($) {
   $('#download').on('click', function() {
     ga('send', 'event', 'link','click', 'Download clicado');
   });
});
*/



