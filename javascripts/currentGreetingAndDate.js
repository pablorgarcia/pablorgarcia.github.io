
'use strict';

// New obj Date and get the month and year from the browser
var date = new Date();
var currentMonth = date.getMonth();
var currentYear = date.getFullYear();
var currentHour = date.getHours();

/* * * * * * * * * * * * * * * * * * * * * 
 * We will show the current greeting that is expected depending on the time of day
 */

// Create the <p> element
var pGreeting = document.createElement('p');

// Adding the attribute and the text on <p> element
if (currentHour < 6) {
  pGreeting.textContent = "Welcome. Are you sleepless?";
} else if (currentHour < 12) {
  pGreeting.textContent = "Good Morning";
} else if (currentHour < 18) {
  pGreeting.textContent = "Good afternoon";
} else {
  pGreeting.textContent = "Good evening";
}

// Append the <time> element to the HTML
var idGreeting = document.getElementById('elGreeting');
idGreeting.appendChild(pGreeting);


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

// Format the string for display it
var space = '';
if (currentMonth < 10) { space = '-0'; }
else { space = '-'; }
var currentDate = currentDate = month[ currentMonth ] + ' ' + currentYear;
var attDate = currentYear + space + ++currentMonth;

// Create the <time> element
var time = document.createElement('time');

// Adding the attribute and the text on <time> element
time.setAttribute('datatime', attDate);
time.textContent = currentDate;

// Append the <time> element to the HTML
var lastElementMain = document.getElementById('elDate');
lastElementMain.appendChild(time);
