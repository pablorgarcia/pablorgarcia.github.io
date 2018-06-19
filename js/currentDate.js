console.log("👋 HELLO PARTNET");
// New obj Date and get the month and year from the browser
const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
const currentHour = date.getHours();

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
let lastElementMain = document.getElementById('currentDate');
lastElementMain.appendChild(time);
