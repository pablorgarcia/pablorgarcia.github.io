
document.addEventListener('DOMContentLoaded', () => {

  // Get the current hour when page start
  const hour = new Date();
  const currentHour = hour.getHours();
  const body = document.getElementsByTagName('body')[0];

  // add at-day or at-night class depending on the current hour
  if (currentHour >= 7 && currentHour < 21) {
    body.classList.add('at-day');
  } else {
    body.classList.add('at-night');
  }

});
