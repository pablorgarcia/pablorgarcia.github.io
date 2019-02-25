
document.addEventListener('DOMContentLoaded', () => {
 
  // Getting data info from the browser
  const date = new Date();
  date.month = date.getMonth();
  date.year = date.getFullYear();
  date.hour = date.getHours();

  // Setting the general styles, at-dat, at-night or terminal class 
  const body = document.getElementsByTagName('body')[0];
  const head = document.getElementsByTagName('head')[0];
  const link = document.getElementsByTagName('link')[6];
  const asyncLink = document.createElement('link');
  asyncLink.setAttribute('rel', 'stylesheet');
  head.insertBefore(asyncLink, link);

  // add at-day or at-night class depending on the current hour
  if (date.hour >= 8 && date.hour < 21) {
    asyncLink.setAttribute('href', 'css/terminal.min.css');
    body.classList.add('terminal');
  } else {
    asyncLink.setAttribute('href', 'css/at-night.min.css');
    body.classList.add('at-night');
  }

  // add animation-bg test when DOM content is loaded
  // body.classList.add('animation-bg');
  
  // Mount for time HTML tag
  // Mounts set
  const month = ['January', 'February', 'March', 'April', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Format the string for display it
  let space = '';
  date.month < 10 ? space = '-0' : space = '-';
  const currentDate = `${month[date.month]} ${date.year}`;
  const attDate = `${date.year}${space}${date.month+1}`;

  // Adding the attribute and the text on <time> element
  const time = document.getElementsByTagName('time')[0];
  time.setAttribute('datatime', attDate);
  time.textContent = currentDate;

});

console.log("👋 HELLO PARTNET. Feel free to fork it on https://github.com/pablorgarcia/pablorgarcia.github.io :)");
