document.addEventListener('DOMContentLoaded', () => {

  /* at-day and at-night class */
  // Getting data info from the browser
  const date = new Date();
  date.month = date.getMonth();
  date.year = date.getFullYear();
  date.hour = date.getHours();

  // Getting Config Nav tags
  const configNav = document.getElementById('configNav');
  const menuButton = document.getElementById('menu-button');
  const closeButtonMenu = document.getElementById('closeNav');

  // Setting the general styles, at-dat, at-night or terminal class
  const body = document.getElementsByTagName('body')[0];
  let buttonThemeChecked = document.getElementById('myCheck').checked;
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");


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
  const popUpShadowElement = document.getElementById('pop-up-shadow');

  // Create a 'header terminal' pop up when it will be called
  const createHeaderTerminal = () => {
    const headerTerminal = document.createElement('span');
    const buttonRed = document.createElement('span');
    const buttonYellow = document.createElement('span');
    const buttonGreen = document.createElement('span');
    const titleElement = document.createElement('pre');
    const terminalTitle = document.createTextNode('pablogarcia.dev');
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
    const textHost = document.createTextNode('Specialties');
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
    pText.setAttribute('class', 'terminal-content cursor-for-last-text');
    pText.appendChild(contentText);

    popUpElement.appendChild(bodyTerminal);
    popUpElement.setAttribute('class', 'pop-up pop-up-active');
  };

  const createPopUpShadow = () => {
    popUpShadowElement.setAttribute('class', 'pop-up-shadow');
  };

  // Call the header terminal pop up and text pop up
  const showPopUp = (eventTarget) => {
    createPopUpShadow();
    createHeaderTerminal();
    createBodyTerminal(eventTarget);
    body.style.overflow = 'hidden';
  };

  // Remove all pop up content
  const hidePopUp = () => {
    popUpShadowElement.setAttribute('class', '');
    popUpElement.setAttribute('class', 'pop-up pop-up-disabled');
    popUpElement.textContent = '';
    body.removeAttribute('style');
  };

  // Popup is active or disabled variable
  let popUpIsActive = 0;
  // Listen to title attribute clicks
  document.addEventListener('click', (event) => {
    if (popUpIsActive === 1) {
      popUpIsActive = 0;
      hidePopUp();
    }
    if (event.target.hasAttribute('title') && popUpIsActive === 0) {
      popUpIsActive = 1;
      showPopUp(event.target);
    }
    if (event.target.hasAttribute('href')) {
      ga('send', 'event', 'Home', 'click', event.target.name);
    }
  }, false);


  // Open the config nav
  openConfigNav = () => {
    configNav.style.width = '250px';
    configNav.setAttribute('class', 'configNav show-config-nav');
    closeButtonMenu.setAttribute('class', 'bt-close show-config-nav');
    menuButton.style.width = '249px';
    menuButton.setAttribute('class', 'bt-menu show-menu-button');
  }
  // Close the config nav
  closeConfigNav = () => {
    configNav.style.width = '0';
    configNav.setAttribute('class', 'configNav hide-config-nav hide-config-elements');
    closeButtonMenu.setAttribute('class', 'bt-close hide-config-nav hide-config-elements');
    menuButton.style.width = '115px';
    menuButton.setAttribute('class', 'bt-menu hide-menu-button');
  }


  // If the user interface prefers Dark mode on his browser
  if (prefersDarkScheme.matches) {
    // Active the dark mode
    document.getElementById("myCheck").checked = true;
    body.classList.add('at-night');
    buttonThemeChecked = true;
  } else {
    // Add at-day or at-night class depending on the current hour
    if (date.hour >= 8 && date.hour < 21) {
      document.getElementById("myCheck").checked = false;
      body.classList.add('at-day');
      buttonThemeChecked = false;
    } else {
      document.getElementById("myCheck").checked = true;
      body.classList.add('at-night');
      buttonThemeChecked = true;
    }
  }

  /* Day and night button */
  onColorLayoutChangeButton = () => {
    if (buttonThemeChecked) {
      document.getElementById("myCheck").checked = false;
      body.setAttribute('class', 'at-day');
      buttonThemeChecked = false;
    } else {
      document.getElementById("myCheck").checked = true;
      body.setAttribute('class', 'at-night');
      buttonThemeChecked = true;
    }
  };

});

console.log('%cHELLO PARTNET', 'font-size: 15px; color: #395E31;');
console.log('%cFeel free to fork it on https://github.com/pablorgarcia/pablorgarcia.github.io', 'font-size: 13px; color: #1485CC; text-shadow: 1px 0 1px #08324D;');
console.log('👋😄');
