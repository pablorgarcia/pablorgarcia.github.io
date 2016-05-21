
// HTML Headings
var heading1 = document.getElementsByTagName('h1')[0];
var heading2 = document.getElementsByTagName('h2')[0];
// Array of HTML links
var anchor = document.getElementsByTagName('a');
// HTML Footer
var footer = document.getElementsByTagName('footer')[0];


/* * * * * * * * * * * * * * * * * * * * * 
 * We will start the site enter animation.
 */

var init = function() {
  setTimeout(opacityToTags, 0);
  setTimeout(animToH1, 1000);
  setTimeout(animToH2, 3700);
  setTimeout(animToLinkeLink, 6400);
  setTimeout(animToEmailLink, 6700);
  setTimeout(animToAboutLink, 7000);
  setTimeout(animToFooter, 7400);
  setTimeout(removeAminClass, 7900);
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
var animToFooter = function() { return footer.classList.add('anim-link'); };
var removeAminClass = function() {
  heading1.removeAttribute('class');
  heading2.removeAttribute('class');
  for(var n=0; n<3; n++) { anchor[n].removeAttribute('class'); }
  anchor[2].classList.add('highlight');
  footer.removeAttribute('class');
};


/* * * * * * * * * * * * * * * * * * * * * 
 * We will animate to go another external URL
 */

function linkCliked( event ) {
  event.preventDefault();
  heading1.classList.add('anim-link-down');
  heading2.classList.add('anim-link-down');
  for(var i=0; i<3; i++) { anchor[i].classList.add('anim-link-down'); }
  this.removeAttribute('class');
  this.classList.add('active');
  setTimeout(externalURL(this.href), 600);
}

function externalURL( url ) { location.href = url; }

function internalURL() {}


/* * * * * * * * * * * * * * * * * * * * * 
 * We will show the month and current year
 */

// Get the element where we are goint to paint the date
var timeTag = document.getElementsByTagName('time')[0];
// Created the months strings
var month = [''];
month[0] = 'January';
month[1] = 'February';
month[2] = 'March';
month[3] = 'April';
month[4] = 'March';
month[5] = 'June';
month[6] = 'July';
month[7] = 'August';
month[8] = 'September';
month[9] = 'October';
month[10] = 'November';
month[11] = 'December';
// New obj Date and get the month and year
var date = new Date();
var currentMonth = date.getMonth();
var currentYear = date.getFullYear();
// Constructing the format to show it
var space = '';
if(currentMonth < 10) { space = '-0'; }
else { space = '-'; }
var attDate = currentYear + space + currentMonth;
var currentDate = month[ currentMonth ] + ' ' + currentYear;
// Paint the attribute and the text
timeTag.setAttribute('datatime', attDate);
timeTag.textContent = currentDate;

