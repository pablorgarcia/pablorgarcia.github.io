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

  // Create a 'header terminal' pop up when it will be called
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
  };

  // Create a body content pop up
  const createBodyTerminal = (eventTarget) => {
    const bodyTerminal = document.createElement('div');
    bodyTerminal.setAttribute('class', 'body-terminal');

    const pHost = document.createElement('p');
    const textHost = document.createTextNode('pablo@garcia.dev');
    pHost.appendChild(textHost);
    pHost.setAttribute('class', 'terminal-host');
    bodyTerminal.appendChild(pHost);

    const pfirstArrow = document.createElement('p');
    bodyTerminal.appendChild(pfirstArrow);
    pfirstArrow.setAttribute('class', 'first-arrow');

    const pPath = document.createElement('p');
    const textPath = document.createTextNode(eventTarget.textContent);
    bodyTerminal.appendChild(pPath);
    pPath.appendChild(textPath);
    pPath.setAttribute('class', 'terminal-path');

    const pSecondArrow = document.createElement('p');
    bodyTerminal.appendChild(pSecondArrow);
    pSecondArrow.setAttribute('class', 'second-arrow');

    const pText = document.createElement('p');
    const contentText = document.createTextNode(eventTarget.title);
    bodyTerminal.appendChild(pText);
    pText.setAttribute('data-name', eventTarget.textContent);
    pText.setAttribute('class', 'terminal-content');
    pText.appendChild(contentText);

    popUpElement.appendChild(bodyTerminal);
    popUpElement.setAttribute('class', 'pop-up pop-up-active');
  };

  // Call the header terminal pop up and text pop up
  const showPopUp = (eventTarget) => {
    createHeaderTerminal(eventTarget);
    createBodyTerminal(eventTarget);
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
