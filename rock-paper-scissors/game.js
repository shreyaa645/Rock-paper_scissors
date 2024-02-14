const playerScoreElem = document.getElementById("score-player");
const compScoreElem = document.getElementById("score-computer");
const playerHandElem = document.getElementById("hand-player");
const compHandElem = document.getElementById("hand-computer");
const actionBtn = document.getElementById("btns");
const gameOverElem = document.getElementById("gameover");
const playAgainBtn = document.getElementById("play-again");
const gameOverTextElem = document.querySelector("#gameover h2");
const validOptions = ["rock", "paper", "scissors"];
const imgSrcOptions = [
  "./assets/rock-hand.png",
  "./assets/paper-hand.png",
  "./assets/scissors-hand.png",
];

let index;
let playerScore = 0;
let compScore = 0;

const generateRandomNum = () => Math.floor(Math.random() * 3);

function playGame() {
  index = generateRandomNum();
  compHandElem.src = imgSrcOptions[index];
}

function gameOver() {
  gameOverElem.style.visibility = "visible";
}

const outcomeTable = {
  rock: { beats: "scissors", losesTo: "paper" },
  paper: { beats: "rock", losesTo: "scissors" },
  scissors: { beats: "paper", losesTo: "rock" },
};

document.getElementById("p-player").style.display = "block";   

function validateGame(userSelection) {
  document.getElementById("p-player").style.display = "none";

  const compSelection = validOptions[index];
  playerHandElem.src = imgSrcOptions[validOptions.indexOf(userSelection)];

  if (outcomeTable[userSelection].beats === compSelection) {
    playerScore++;
    playerScoreElem.innerText = playerScore;
  } else if (outcomeTable[compSelection].beats === userSelection) {
    compScore++;
    compScoreElem.innerText = compScore;
  }
}

actionBtn.addEventListener("click", (e) => {
  if (validOptions.includes(e.target.id) && playerScore < 5 && compScore < 5) {
    playGame();
    validateGame(e.target.id);
  }

  if (playerScore >= 5 || compScore >= 5) {
    gameOver();
  }

  if (playerScore >= 5) gameOverTextElem.innerText = "You won the game";
  else if (compScore >= 5) gameOverTextElem.innerText = "You lose the game";
});

playAgainBtn.onclick = function () {
  window.location.href = "./index.html";
};
