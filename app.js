"use strict";

// Score and HighScore
let score = 20;
let highScore = 0;

// Displaying Message Function
const message = (message) => {
  document.querySelector(".message").textContent = message;
};

const box = document.querySelector(".check");
const labelScore = document.querySelector(".score");
const bgColor = document.querySelector("body");
const number = document.querySelector(".number");
const again = document.querySelector(".again");
const highestScore = document.querySelector(".highscore");
const secretNumber = Math.trunc(Math.random() * 20);

box.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //   When there is no Input
  if (!guess) {
    message("🚫 NO NUMBER!");

    // When Player wins
  } else if (guess === secretNumber) {
    message("🎉 CONGRATULATIONS!");
    number.textContent = secretNumber;

    bgColor.style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      highestScore.textContent = highScore;
    }

    // When player is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message(guess > secretNumber ? "📉 LOWER!!!" : "📈 HIGHER!!!");
      score--;
      labelScore.textContent = score;
    } else {
      message("YOU LOST THE GAME 😒!!");
      score = 0;
    }
  }
});

again.addEventListener("click", () => {
  bgColor.style.backgroundColor = "#222";
  number.style.width = "15rem";
  document.querySelector(".guess").value = "";
  number.textContent = "?";
  score = 20;
  labelScore.textContent = score;
  message("Start guessing...");
  secretNumber = Math.trunc(Math.random() * 20);
});
