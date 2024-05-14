'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

import {
  displayMessage,
  setBackgroundColor,
  setNumber,
  setScore,
  setNumberStyleWidth,
  setHighscore,
  setGuessContent,
} from '/functions.js';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // when player wins.
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackgroundColor('#60b347');
    setNumberStyleWidth('30rem');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }

    // when guess is too high or too low.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low!📉');
      score--;
      setScore(score);
    } else {
      displayMessage('😭 You lost the game!');
      setScore(0);
    }
  }
});

// When click in the 'Again' button - Start the game again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  setScore(score);
  setNumber('?');
  displayMessage('Start guessing...');
  setGuessContent('');
  setBackgroundColor('#222');
  setNumberStyleWidth('15rem');
});
