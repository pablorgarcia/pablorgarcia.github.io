document.addEventListener('DOMContentLoaded', () => {

  /* at-day and at-night class */
  // Getting data info from the browser
  const date = new Date();
  date.month = date.getMonth();
  date.year = date.getFullYear();
  date.hour = date.getHours();

  // Setting the general styles, at-dat, at-night or terminal class 
  const body = document.getElementsByTagName('body')[0];

  // Add at-day or at-night class depending on the current hour
  date.hour >= 8 && date.hour < 21 ? body.classList.add('at-day') : body.classList.add('at-night');


  /* Current time */
  // Mounts set
  const month = ['January', 'February', 'March', 'April', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Format the string for display the mount on time HTML tag
  let space = '';
  date.month < 10 ? space = '-0' : space = '-';
  const currentDate = `${month[date.month]} ${date.year}`;
  const attDate = `${date.year}${space}${date.month+1}`;

  // Adding the attribute and the text on <time> element
  const time = document.getElementsByTagName('time')[0];
  time.setAttribute('datatime', attDate);
  time.textContent = currentDate;


  /* Show and hide the pop up div */
  // Get the pop up div
  const popUpElement = document.getElementById('pop-up');

  // Create a new 'header terminal' pop up when it will be called
  const createHeaderTerminal = (eventTarget) => {
    const headerTerminal = document.createElement('span');
    const buttonRed = document.createElement('span');
    const buttonYellow = document.createElement('span');
    const buttonGreen = document.createElement('span');
    const titleElement = document.createElement('pre');
    const terminalTitle = document.createTextNode(eventTarget.textContent);
    headerTerminal.setAttribute('class', 'header-terminal');
    buttonRed.setAttribute('class', 'button-terminal-red');
    buttonYellow.setAttribute('class', 'button-terminal-yellow');
    buttonGreen.setAttribute('class', 'button-terminal-green');
    titleElement.setAttribute('class', 'terminal-title');
    titleElement.appendChild(terminalTitle);
    popUpElement.appendChild(headerTerminal);
    headerTerminal.appendChild(buttonRed);
    headerTerminal.appendChild(buttonYellow);
    headerTerminal.appendChild(buttonGreen);
    headerTerminal.appendChild(titleElement);
  }

  // Create a pop up text
  const createTextPopUp = (eventTarget) => {
    const pElement = document.createElement('p');
    const popUpText = document.createTextNode(eventTarget.title);
    pElement.setAttribute('data-name', eventTarget.textContent);
    popUpElement.setAttribute('class', 'pop-up pop-up-active');
    popUpElement.appendChild(pElement);
    pElement.appendChild(popUpText);
  }

  // Call the header terminal pop up and text pop up
  const showPopUp = (eventTarget) => {
    createHeaderTerminal(eventTarget);
    createTextPopUp(eventTarget);
    body.style.overflow = 'hidden';
  };

  // Remove all pop up content
  const hidePopUp = () => {
    popUpElement.setAttribute('class', 'pop-up pop-up-disabled');
    popUpElement.textContent = '';
    body.removeAttribute('style');
  };

  // Listen to title attribute clicks
  document.addEventListener('click', (event) => {
    if (!event.target.hasAttribute('title')) {
      hidePopUp();
    } else {
      if (popUpElement.textContent != '') {
        hidePopUp();
      } else {
        showPopUp(event.target);
      }
    }

  }, false);

});

console.log("👋 HELLO PARTNET. Feel free to fork it on https://github.com/pablorgarcia/pablorgarcia.github.io :)");
