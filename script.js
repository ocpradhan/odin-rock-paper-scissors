// Targeting an element
const btn = document.querySelectorAll(".btn");
const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissor = document.querySelector(".btn-scissor");
const theRound = document.querySelector(".the-round");
const yourChoice = document.querySelector(".your-choice");
const compChoice = document.querySelector(".comp-choice");
const yourCurrScore = document.querySelector(".your-curr-score");
const CompCurrScore = document.querySelector(".comp-curr-score");
const theWinner = document.querySelector(".the-winner");

// Reference Variables
let count = 0;
let scorePlayer = 0;
let scoreComp = 0;

// For Randomnly returning Rock, Paper and Scissor.
const getComputerChoice = function () {
  const choices = ["Rock", "Paper", "Scissor"];

  const aChoice =
    choices[Math.floor(Math.random() * choices.length)].toLowerCase();
  const slicedAChoice = aChoice.slice(1);
  return aChoice[0].toUpperCase() + slicedAChoice;
};

// Winner Checker
const winnerChecker = function (yourScore, compScore) {
  if (yourScore === 5) {
    theWinner.textContent = "You";
  } else if (compScore === 5) {
    theWinner.textContent = "Computer";
  }
};

const updateUI = function () {
  yourCurrScore.textContent = scorePlayer;
  CompCurrScore.textContent = scoreComp;

  if (scorePlayer === 5 || scoreComp === 5) {
    winnerChecker(scorePlayer, scoreComp);
    theRound.textContent = count;
    yourCurrScore.textContent = "";
    CompCurrScore.textContent = "";
    yourChoice.textContent = "";
    compChoice.textContent = "";
  }
};

// For comparing the The selection of the player vs. computer Selection
function playRound(playerSelection, computerSelection) {
  const lowerPlayerSelection = playerSelection.toLowerCase();
  const lowerComputerSelection = computerSelection.toLowerCase();

  if (lowerPlayerSelection === lowerComputerSelection) {
    yourChoice.textContent = lowerPlayerSelection;
    compChoice.textContent = lowerComputerSelection;
    updateUI();

    return `It's a Tie!`;
  }

  // For paper
  if (
    lowerPlayerSelection === "paper" &&
    lowerComputerSelection === "scissor"
  ) {
    yourChoice.textContent = lowerPlayerSelection;
    compChoice.textContent = lowerComputerSelection;
    scoreComp++;
    updateUI();
    return `Computer`;
  } else if (
    lowerPlayerSelection === "paper" &&
    lowerComputerSelection === "rock"
  ) {
    yourChoice.textContent = lowerPlayerSelection;
    compChoice.textContent = lowerComputerSelection;
    scorePlayer++;
    updateUI();
    return `You`;
  }

  // For Rock
  else if (
    lowerPlayerSelection === "rock" &&
    lowerComputerSelection === "scissor"
  ) {
    yourChoice.textContent = lowerPlayerSelection;
    compChoice.textContent = lowerComputerSelection;
    scorePlayer++;
    updateUI();
    return `You`;
  } else if (
    lowerPlayerSelection === "rock" &&
    lowerComputerSelection === "paper"
  ) {
    yourChoice.textContent = lowerPlayerSelection;
    compChoice.textContent = lowerComputerSelection;
    scoreComp++;
    updateUI();
    return `Computer`;
  }

  // For Scissor
  else if (
    lowerPlayerSelection === "scissor" &&
    lowerComputerSelection === "paper"
  ) {
    yourChoice.textContent = lowerPlayerSelection;
    compChoice.textContent = lowerComputerSelection;
    scorePlayer++;
    updateUI();
    return `You`;
  } else if (
    lowerPlayerSelection === "scissor" &&
    lowerComputerSelection === "rock"
  ) {
    yourChoice.textContent = lowerPlayerSelection;
    compChoice.textContent = lowerComputerSelection;
    scoreComp++;
    updateUI();
    return `Computer`;
  }
}

btnRock.addEventListener("click", function (e) {
  e.preventDefault();
  let compChose = getComputerChoice();
  playRound("rock", compChose);
  yourChoice.textContent = "Rock";
  compChoice.textContent = compChose;
});
btnPaper.addEventListener("click", function (e) {
  e.preventDefault();
  let compChose = getComputerChoice();
  playRound("paper", compChose);
  yourChoice.textContent = "Paper";
  compChoice.textContent = compChose;
});
btnScissor.addEventListener("click", function (e) {
  e.preventDefault();
  let compChose = getComputerChoice();
  playRound("scissor", compChose);
  yourChoice.textContent = "Scissor";
  compChoice.textContent = compChose;
});

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (e) {
    e.preventDefault();
    count++;
    theRound.textContent = count;
  });
}

/* TO DO*/
// For 5 round game
const game = function () {
  // For keeping count, who won how many times
  let winCountPlayer = 0;
  let winCountComputer = 0;

  // Checking the winner of the game
  if (winCountComputer > winCountPlayer) {
    console.log(`Total Computer Wins: ${winCountComputer}`);
    console.log(`Total Your Wins: ${winCountPlayer}`);
    return `You Lost!`;
  } else if (winCountComputer < winCountPlayer) {
    console.log(`Total Computer Wins: ${winCountComputer}`);
    console.log(`Total Your Wins: ${winCountPlayer}`);
    return `You Win!`;
  } else {
    return `The game is a TIE!`;
  }
};

// console.log(game());
