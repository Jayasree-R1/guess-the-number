'use strict';

// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.message`).textContent = `🎉 Correct number!`;
// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;

// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

//secret number

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let High = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

// Securing Highscore Functionality
document.querySelector(`.highscore`).textContent = score;

//Reset Game
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector(`.message`).textContent = `Start Guessing...`;
  displayMessage(`Start Guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
});

// Check the guess
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  if (!guess) {
    //document.querySelector(`.message`).textContent = `🛑 No number!`;
    displayMessage(`🛑 No number!`);
    // win situation
  } else if (guess === secret) {
    //document.querySelector(`.message`).textContent = `🎉 Correct number!`;
    displayMessage(`🎉 Correct number!`);
    document.querySelector(`.number`).textContent = secret;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > High) {
      High = score;
      document.querySelector(`.highscore`).textContent = High;
    }
    //document.querySelector(`.highscore`).textContent = score;

    // Guess is wrong
  } else if (guess !== secret) {
    if (score > 1) {
      //document.querySelector(`.message`).textContent =
      //guess > secret ? `📈Too High!` : `📉 Too Low!`;
      displayMessage(guess > secret ? `📈Too High!` : `📉 Too Low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      //document.querySelector(`.message`).textContent = `😩 You lost the game`;
      displayMessage(`😩 You lost the game`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
  // } else if (guess > secret) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `📈Too High!`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = `😩 You lost the game`;
  //     document.querySelector(`.score`).textContent = 0;
  //   }
  //   // Guess too low
  // } else if (guess < secret) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `📉 Too Low!`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = `😩 You lost the game`;
  //     document.querySelector(`.score`).textContent = 0;
  //   }
  // }
});
