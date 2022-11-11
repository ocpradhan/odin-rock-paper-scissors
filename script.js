// For Randomnly returning Rock, Paper and Scissor.
const getComputerChoice = function () {
  const choices = ["Rock", "Paper", "Scissor"];

  return choices[Math.floor(Math.random() * choices.length)].toLowerCase();
};

// For comparing the The selection of the player vs. computer Selection
function playRound(playerSelection, computerSelection) {
  const lowerPlayerSelection = playerSelection.toLowerCase();
  const slicedChoicePlayer = lowerPlayerSelection.slice(1);
  const slicedChoiceComputer = computerSelection.slice(1);
  const choiceCapitalizePlayer =
    lowerPlayerSelection[0].toUpperCase() + slicedChoicePlayer;
  const choiceCapitalizeComputer =
    computerSelection[0].toUpperCase() + slicedChoiceComputer;

  if (lowerPlayerSelection === computerSelection) {
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
  if (lowerPlayerSelection === "paper" && computerSelection === "scissor") {
    return `You Lose! ${choiceCapitalizeComputer} beats ${choiceCapitalizePlayer}`;
  } else if (lowerPlayerSelection === "paper" && computerSelection === "rock") {
    return `You Win! ${choiceCapitalizePlayer} beats ${choiceCapitalizeComputer}`;
  }

  // For Rock
  else if (lowerPlayerSelection === "rock" && computerSelection === "scissor") {
    return `You Win! ${choiceCapitalizePlayer} beats ${choiceCapitalizeComputer}`;
  } else if (lowerPlayerSelection === "rock" && computerSelection === "paper") {
    return `You Lose! ${choiceCapitalizeComputer} beats ${choiceCapitalizePlayer}`;
  }

  // For Scissor
  else if (
    lowerPlayerSelection === "scissor" &&
    computerSelection === "paper"
  ) {
    return `You Win! ${choiceCapitalizePlayer} beats ${choiceCapitalizeComputer}`;
  } else if (
    lowerPlayerSelection === "scissor" &&
    computerSelection === "rock"
  ) {
    return `You Lose! ${choiceCapitalizeComputer} beats ${choiceCapitalizePlayer}`;
  }

  // if (lowerPlayerSelection !== computerSelection) {
  //   if (computerSelection === "paper") {
  //     return `You Lose! ${computerSelection} beats ${lowerPlayerSelection}`;
  //   } else if (computerSelection === "scissor") {
  //     return `You Win! ${lowerPlayerSelection} beats ${computerSelection}`;
  //   }
  // }
}

const playerSelection = "scissor";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

/* TO DO*/
// For 5 round game
const game = function () {
  let playerPrompt;
  let playerChoice;
  let computerChoice;
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);

    playerPrompt = Number(prompt(`Choose: \n 1.Rock \n 2.Paper \n 3.Scissor`));
    if (playerPrompt === 1) {
      playerChoice = "rock";
    } else if (playerPrompt === 2) {
      playerChoice = "paper";
    } else if (playerPrompt === 3) {
      playerChoice = "scissor";
    }

    console.log(`You Chose: ${playerChoice}`);

    computerChoice = getComputerChoice();

    console.log(`The Computer Chose: ${computerChoice}`);

    console.log(`The Winner for Round 1`);
  }

  playRound(playerChoice, computerChoice);
};
