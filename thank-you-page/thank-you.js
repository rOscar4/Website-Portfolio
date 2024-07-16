//clicking button returns to main website
const returnButton = document.getElementById('returnButton');

returnButton.addEventListener('click', () => {
  console.log('hit')
  window.location.href = '../index.html';
});