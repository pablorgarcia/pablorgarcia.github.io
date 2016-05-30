// HTML header
//var header = document.getElementsByTagName('header')[0];
// HTML Footer
var footer = document.getElementsByTagName('footer')[0];
// HTML Headings
var heading1 = document.getElementsByTagName('h1')[0];
var heading2 = document.getElementsByTagName('h2')[0];
// Array of HTML links
var anchor = document.getElementsByTagName('a');


/* * * * * * * * * * * * * * * * * * * * * 
 * We will start the site enter animation.
 */

var init = function() {
  opacityToTags();
  setTimeout(animToH1, 800);
  setTimeout(animToH2, 2600);
  setTimeout(animToLinkeLink, 4600);
  setTimeout(animToEmailLink, 5100);
  setTimeout(animToAboutLink, 5600);
  setTimeout(animToFooter, 6000);
  setTimeout(removeAminClass, 6400);
};

var opacityToTags = function() {
  heading1.classList.add('opacity');
  heading2.classList.add('opacity');
  for(var n=0; n<3; n++) { anchor[n].classList.add('opacity'); }
  footer.classList.add('opacity');
};
var animToH1 = function() { return heading1.classList.add('anim-headings'); };
var animToH2 = function() { return heading2.classList.add('anim-headings'); };
var animToLinkeLink = function() { return anchor[0].classList.add('anim-link'); };
var animToEmailLink = function() { return anchor[1].classList.add('anim-link'); };
var animToAboutLink = function() { return anchor[2].classList.add('anim-link'); };
var animToFooter = function() { return footer.classList.add('anim-footer'); };
var removeAminClass = function() {
  heading1.removeAttribute('class');
  heading2.removeAttribute('class');
  for(var n=0; n<3; n++) { anchor[n].removeAttribute('class'); }
  anchor[2].classList.add('highlight-button');
  footer.removeAttribute('class');
};


/* * * * * * * * * * * * * * * * * * * * * 
 * We will animate to go another external URL
 */

var cliked = function( event ) {
  event.preventDefault();
  trackButton(event);
  heading1.classList.add('anim-link-down');
  heading2.classList.add('anim-link-down');
  for(var i=0; i<3; i++) { anchor[i].classList.add('anim-link-down'); }
  this.removeAttribute('class');
  this.classList.add('active');
  anchor[2].classList.add('highlight-button');
  setTimeout(externalURL(this.href), 600);
}

function externalURL( url ) { location.href = url; }

function trackButton(e) { ga('send', 'event', 'link', 'click', e.textContent); };


/* * * * * * * * * * * * * * * * * * * * * 
 * We will animate the footer links
 */

function blue() {
  footer.children[0].classList.add('anim-footer-list'); // ul
//  footer.children[0].children[i].add('open'); // li
//  footer.children[0].children[0].children[0].style.color = "blue"; // a
}