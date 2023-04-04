"use strict";
const scoreP1 = document.querySelector("#score-1");
const scoreP2 = document.getElementById("score-2");
const currentP1 = document.getElementById("current-1");
const currentP2 = document.getElementById("current-2");
const diceElImg = document.querySelector("#dice");
const diceEl = document.querySelector(".rolled-dice");
const newGameBtn = document.querySelector(".new-game");
const rollDiceBtn = document.querySelector(".roll-dice");
const holdBtn = document.querySelector(".hold");
let currentScore = 0;
let totalScore = [0, 0];
let playing = true;
//rolling  the dice
rollDiceBtn.addEventListener("click", function () {
  if (playing) {
    const active1 = document
      .querySelector(".player1")
      .classList.contains("active-player");
    const active2 = document
      .querySelector(".player2")
      .classList.contains("active-player");
    const player1 = document.querySelector(".player1");
    const player2 = document.querySelector(".player2");
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    console.log(diceRoll);
    diceEl.classList.remove("hidden");
    diceElImg.src = `images/dice${diceRoll}.png`;
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      if (active1) {
        currentP1.textContent = currentScore;
      } else if (active2) {
        currentP2.textContent = currentScore;
      }
    } else {
      if (active1) {
        player1.classList.remove("active-player");
        player1.classList.add("inActive-player");
        player2.classList.remove("inActive-player");
        player2.classList.add("active-player");
        currentScore = 0;
        currentP1.textContent = currentScore;
      } else if (active2) {
        player2.classList.remove("active-player");
        player2.classList.add("inActive-player");
        player1.classList.remove("inActive-player");
        player1.classList.add("active-player");
        currentScore = 0;
        currentP2.textContent = currentScore;
      }
    }
  }
});
//holding the score
holdBtn.addEventListener("click", function () {
  if (playing) {
    const active1 = document
      .querySelector(".player1")
      .classList.contains("active-player");
    const active2 = document
      .querySelector(".player2")
      .classList.contains("active-player");
    const player1 = document.querySelector(".player1");
    const player2 = document.querySelector(".player2");
    // totalScore += currentScore;
    if (active1) {
      totalScore[0] += currentScore;
      scoreP1.textContent = totalScore[0];
      currentScore = 0;
      if (totalScore[0] < 100) {
        currentP1.textContent = currentScore;
        player1.classList.remove("active-player");
        player1.classList.add("inActive-player");
        player2.classList.remove("inActive-player");
        player2.classList.add("active-player");
      } else {
        playing = false;
        player1.classList.remove("active-player");
        player1.classList.remove("inActive-player");
        player1.classList.add("finish");
        diceEl.classList.add("hidden");
        currentP1.textContent = currentScore;
      }
    } else if (active2) {
      totalScore[1] += currentScore;
      console.log(totalScore);
      scoreP2.textContent = totalScore[1];
      currentScore = 0;
      if (totalScore[1] < 100) {
        currentP2.textContent = currentScore;
        player2.classList.remove("active-player");
        player2.classList.add("inActive-player");
        player1.classList.remove("inActive-player");
        player1.classList.add("active-player");
      } else {
        playing = false;
        player2.classList.remove("inActive-player");
        player2.classList.add("finish");
        player2.classList.remove("active-player");
        diceEl.classList.add("hidden");
        currentP2.textContent = currentScore;
      }
    }
  }
});
//starting new game
newGameBtn.addEventListener("click", function () {
  const player1 = document.querySelector(".player1");
  const player2 = document.querySelector(".player2");
  playing = true;
  diceEl.classList.add("hidden");
  currentScore = 0;
  currentP1.textContent = currentScore;
  currentP2.textContent = currentScore;
  totalScore = [0, 0];
  scoreP1.textContent = totalScore[0];
  scoreP2.textContent = totalScore[1];
  player1.classList.remove("finish");
  player1.classList.remove("inActive-player");
  player1.classList.add("active-player");
  player2.classList.remove("finish");
  player2.classList.remove("active-player");
  player2.classList.add("inActive-player");
});
