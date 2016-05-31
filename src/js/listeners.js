
// The init function to do the animation control
document.addEventListener('DOMContentLoaded', init, false);

// First LinkedIn, E-mail and About me links
for(var i=0; i<3; i++) { anchor[i].addEventListener('click', cliked, false); }
// onclick="ga('send', 'event', 'link','click', 'Download clicado');"

// Back to Home link
//anchor[5].addEventListener('click', backToHome, false);

// Footer
//footer.addEventListener('mouseenter', red);
footer.addEventListener('click', blue, false);
//footer.addEventListener('onmouseover', red);
// meter eventos Touch
//http://www.w3schools.com/jsref/dom_obj_event.asp