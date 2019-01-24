
document.addEventListener('DOMContentLoaded', () => {

  // Getting data info from the browser
  const date = new Date();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const currentHour = date.getHours();

  // Setting the general styles, at-dat or at-night 
  const body = document.getElementsByTagName('body')[0];

  // add at-day or at-night class depending on the current hour
  (currentHour >= 8 && currentHour < 21) ? body.classList.add('terminal') : body.classList.add('at-night');

  // Mount for time tag
  // Mounts set
  const month = ['January', 'February', 'March', 'April', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Format the string for display it
  let space = '';
  currentMonth < 10 ? space = '-0' : space = '-';
  const currentDate = `${month[currentMonth]} ${currentYear}`;
  const attDate = `${currentYear}${space}${currentMonth+1}`;

  // Adding the attribute and the text on <time> element
  const time = document.getElementsByTagName('time')[0];
  time.setAttribute('datatime', attDate);
  time.textContent = currentDate;

});

console.log("👋 HELLO PARTNET. Feel free to fork it on https://github.com/pablorgarcia/pablorgarcia.github.io :)");
