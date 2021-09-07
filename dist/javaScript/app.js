const button = document.querySelector('.roll-button');
const dice = document.querySelector('.dice__number');

function rollDice() {
  dice.textContent = (Math.floor(Math.random() * 6)  + 1);
}