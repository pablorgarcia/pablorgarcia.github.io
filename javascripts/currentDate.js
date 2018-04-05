
'use strict';

/* * * * * * * * * * * * * * * * * * * * * 
 * We will show the month and current year
 */

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

// New obj Date and get the month and year from the browser
var date = new Date();
var currentMonth = date.getMonth();
var currentYear = date.getFullYear();

// Format the string for display it
var space = '';
if (currentMonth < 10) { space = '-0'; }
else { space = '-'; }
var currentDate = currentDate = month[ currentMonth ] + ' ' + currentYear;
var attDate = currentYear + space + ++currentMonth;

// Create the <time> element
var time = document.createElement('time');

// Paint the attribute and the text on <time> element
time.setAttribute('datatime', attDate);
time.textContent = currentDate;

// Append the <time> element to the HTML
var lastElementMain = document.getElementById('elDate');
//var lastElementMain = document.getElementsByTagName('main')[0].lastElementChild;
lastElementMain.appendChild(time);

//<time datatime="2018-04">April 2018</time>