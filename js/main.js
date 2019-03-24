
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

  /* Show a popup div with the title atributte text */
  const popUp = {
    tagElement: 'div',
    tagClass: 'pop-up',
  }

  const createPopUp = (eventTarget) => {
    const popUpElement = document.createElement(popUp.tagElement);
    popUpElement.setAttribute('class', popUp.tagClass);
    const popUpText = document.createTextNode(eventTarget.title);
    popUpElement.appendChild(popUpText);
// https://developer.mozilla.org/es/docs/Web/API/Node/insertarAntes
//    document.body.insertBefore(popUpElement, eventTarget); 
    console.log('new popup element', popUpElement);
  }

  // Listen to title attribute clicks
  document.addEventListener('click', (event) => {
    let clickCounter = 0;

    if (event.target.hasAttribute('title')) {
      if (clickCounter != 0) {
        console.log('ya hay un popup creado, hay que borrarlo', clickCounter);
        clickCounter = 0;
      }
      clickCounter = 1;
      createPopUp(event.target);
    } else {
      console.log('has clickado fuera, hay que borrar el popup', clickCounter);
      clickCounter = 0;
    };

  }, false);


});

console.log("👋 HELLO PARTNET. Feel free to fork it on https://github.com/pablorgarcia/pablorgarcia.github.io :)");
