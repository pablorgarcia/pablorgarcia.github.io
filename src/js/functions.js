
// HTML Headings
var heading1 = document.getElementsByTagName('h1')[0];
var heading2 = document.getElementsByTagName('h2')[0];
// Array of HTML links
var anchor = document.getElementsByTagName('a');

/* * * * * * * * * * * * * * * * * * * * * 
 * We will ...
 */

var init = function() {
  setTimeout(opacityToTags, 0);
  setTimeout(animToH1, 1000);
  setTimeout(animToH2, 3700);
  setTimeout(animToAboutLink, 6400);
  setTimeout(animToLinkeLink, 6700);
  setTimeout(animToEmailLink, 7000);
  setTimeout(removeAminClass, 7500);
} 

var opacityToTags = function() {
  heading1.classList.add('opacity');
  heading2.classList.add('opacity');
  for(var n=0; n<3; n++) { anchor[n].classList.add('opacity'); }
}
var animToH1 = function() { return heading1.classList.add('anim-headings'); }
var animToH2 = function() { return heading2.classList.add('anim-headings'); }
var animToAboutLink = function() { return anchor[0].classList.add('anim-link'); }
var animToLinkeLink = function() { return anchor[1].classList.add('anim-link'); }
var animToEmailLink = function() { return anchor[2].classList.add('anim-link'); }
var removeAminClass = function() {
  heading1.removeAttribute('class');
  heading2.removeAttribute('class');
  for(var n=0; n<3; n++) { anchor[n].removeAttribute('class'); }
  anchor[2].classList.add('highlight');
}




/* * * * * * * * * * * * * * * * * * * * * 
 * We will ...
 */

function linkCliked( event ) {
  event.preventDefault();
  heading1.classList.add('anim-link-down');
  heading2.classList.add('anim-link-down');
  for(var i=0; i<3; i++) { anchor[i].classList.add('anim-link-down'); }
  this.removeAttribute('class');
  this.classList.add('active');
}



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

