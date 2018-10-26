console.log("👋 HELLO PARTNET. Feel free to fork it on https://github.com/pablorgarcia/pablorgarcia.github.io :)");
// New obj Date and get the month and year from the browser
const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
const currentHour = date.getHours();

const month = ['January', 'February', 'March', 'April', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Format the string for display it
let space = '';
let point = '.';
currentMonth < 10 ? space = '-0' : space = '-';
const currentDate = `${month[currentMonth]} ${currentYear}${point}`;
const attDate = `${currentYear}${space}${currentMonth+1}`;

const time = document.getElementsByTagName('time')[0];

// Adding the attribute and the text on <time> element
time.setAttribute('datatime', attDate);
time.textContent = currentDate;

