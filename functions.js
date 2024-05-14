'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setBackgroundColor = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setNumberStyleWidth = function (style) {
  document.querySelector('.number').style.width = style;
};

const setHighscore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

const setGuessContent = function (guess) {
  document.querySelector('.guess').value = guess;
};

export {
  displayMessage,
  setBackgroundColor,
  setNumber,
  setScore,
  setNumberStyleWidth,
  setHighscore,
  setGuessContent,
};
