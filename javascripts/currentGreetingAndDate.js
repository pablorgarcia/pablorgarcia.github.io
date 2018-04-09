// New obj Date and get the month and year from the browser
const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
const currentHour = date.getHours();

/* * * * * * * * * * * * * * * * * * * * * 
 * We will show the current greeting that is expected depending on the time of day
 */

// Create the <p> element
let pGreeting = document.createElement('p');

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
let idGreeting = document.getElementById('elGreeting');
idGreeting.appendChild(pGreeting);


/* * * * * * * * * * * * * * * * * * * * * 
 * We will show the month and current year
 */

// Created the months strings
const month = ['January', 'February', 'March', 'April', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Format the string for display it
let space = '';
currentMonth < 10 ? space = '-0' : space = '-';
let currentDate = `${month[currentMonth]} ${currentYear}`;
let attDate = `${currentYear}${space}${currentMonth+1}`;

// Create the <time> element
let time = document.createElement('time');

// Adding the attribute and the text on <time> element
time.setAttribute('datatime', attDate);
time.textContent = currentDate;

// Append the <time> element to the HTML
let lastElementMain = document.getElementById('elDate');
lastElementMain.appendChild(time);