// For Randomnly returning Rock, Paper and Scissor.
const getComputerChoice = function () {
  const choices = ["Rock", "Paper", "Scissor"];

  const aChoice =
    choices[Math.floor(Math.random() * choices.length)].toLowerCase();
  const slicedAChoice = aChoice.slice(1);
  return aChoice[0].toUpperCase() + slicedAChoice;
};

// For comparing the The selection of the player vs. computer Selection
function playRound(playerSelection, computerSelection) {
  const lowerPlayerSelection = playerSelection.toLowerCase();
  const lowerComputerSelection = computerSelection.toLowerCase();

  if (lowerPlayerSelection === lowerComputerSelection) {
    return `It's a Tie!`;
  }

  // Combinations
  // 1. Paper - Scissor -> Lose
  // 2. Paper - Rock -> Win
  // 3. Paper - Paper -> Tie

  // 1. Rock - Scissor -> Win
  // 2. Rock - Paper -> Lose
  // 3. Rock - Rock -> Tie

  // 1. Scissor - Rock -> Lose
  // 2. Scissor - Paper -> Win
  // 3. Scissor - Scissor -> Tie

  // For paper
  if (
    lowerPlayerSelection === "paper" &&
    lowerComputerSelection === "scissor"
  ) {
    return `Computer`;
  } else if (
    lowerPlayerSelection === "paper" &&
    lowerComputerSelection === "rock"
  ) {
    return `You`;
  }

  // For Rock
  else if (
    lowerPlayerSelection === "rock" &&
    lowerComputerSelection === "scissor"
  ) {
    return `You`;
  } else if (
    lowerPlayerSelection === "rock" &&
    lowerComputerSelection === "paper"
  ) {
    return `Computer`;
  }

  // For Scissor
  else if (
    lowerPlayerSelection === "scissor" &&
    lowerComputerSelection === "paper"
  ) {
    return `You`;
  } else if (
    lowerPlayerSelection === "scissor" &&
    lowerComputerSelection === "rock"
  ) {
    return `Computer`;
  }

  // if (lowerPlayerSelection !== computerSelection) {
  //   if (computerSelection === "paper") {
  //     return `You Lose! ${computerSelection} beats ${lowerPlayerSelection}`;
  //   } else if (computerSelection === "scissor") {
  //     return `You Win! ${lowerPlayerSelection} beats ${computerSelection}`;
  //   }
  // }
}

// const playerSelection = "scissor";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

/* TO DO*/
// For 5 round game
const game = function () {
  let playerPrompt;
  let playerChoice;
  let computerChoice;
  let roundWinner;

  // For keeping count, who won how many times
  let winCountPlayer = 0;
  let winCountComputer = 0;

  // For playing for 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);

    playerPrompt = Number(
      prompt(`Choose: \n 1. Rock \n 2. Paper \n 3. Scissor`)
    );
    if (playerPrompt === 1) {
      playerChoice = "Rock";
    } else if (playerPrompt === 2) {
      playerChoice = "Paper";
    } else if (playerPrompt === 3) {
      playerChoice = "Scissor";
    }

    console.log(`You Chose: ${playerChoice}`);

    computerChoice = getComputerChoice();

    console.log(`The Computer Chose: ${computerChoice}`);

    roundWinner = playRound(playerChoice, computerChoice);

    // Checking winner of the round
    if (roundWinner === "You") {
      console.log(`The Round ${i} Winner is : ${roundWinner}`);
      winCountPlayer++;
    } else if (roundWinner === "Computer") {
      console.log(`The Round ${i} Winner is : ${roundWinner}`);
      winCountComputer++;
    } else if (roundWinner === "It's a Tie!") {
      console.log(`Tie! Give it a next chance!`);
    }
  }

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
