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
if(currentMonth < 10) { var space = '-0'; }
else { var space = '-'; }
var attDate = currentYear + space + currentMonth;
var currentDate = month[ currentMonth ] + ' ' + currentYear;
// Paint the attribute and the text
timeTag.setAttribute('datatime', attDate);
timeTag.textContent = currentDate;