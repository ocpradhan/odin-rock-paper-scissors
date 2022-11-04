// For Randomnly returning Rock, Paper and Scissor.
const getComputerChoice = function () {
  const choices = ["Rock", "Paper", "Scissor"];

  return choices[Math.floor(Math.random() * choices.length)].toLowerCase();
};

// For comparing the The selection of the player vs. computer Selection
function playRound(playerSelection, computerSelection) {
  const lowerPlayerSelection = playerSelection.toLowerCase();

  if (lowerPlayerSelection === computerSelection) {
    return `It's a Tie!`;
  }

  if (lowerPlayerSelection !== computerSelection) {
    if (computerSelection === "paper") {
      return `You Lose! Paper beats Rock`;
    } else if (computerSelection === "scissor") {
      return `You Win! Rock beats scissor`;
    }
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
