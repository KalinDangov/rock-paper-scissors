const compChoices = ["Rock", "Paper", "Scissors"];
let compScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  return compChoices[random].toUpperCase();
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice().toUpperCase();
  playerSelection = prompt(
    `Let's play a game of Rock, Paper, Scissors`
  ).toUpperCase();

  if (playerSelection === computerSelection) {
    return `Draw, ${playerSelection} vs ${computerSelection}, Score is: ${playerScore} points for you vs ${compScore} points for the computer`;
  } else if (playerSelection === "ROCK") {
    if (computerSelection === "PAPER") {
      compScore++;
      return `You lose! Paper beats Rock, Score is: ${playerScore} points for you vs ${compScore} points for the computer`;
    } else {
      playerScore++;
      return `You win! Rock beats Scissors, Score is: ${playerScore} points for you vs ${compScore} points for the computer`;
    }
  } else if (playerSelection === "PAPER") {
    if (computerSelection === "SCISSORS") {
      compScore++;
      return `You lose! Scissors beats Paper, Score is: ${playerScore} points for you vs ${compScore} points for the computer`;
    } else {
      playerScore++;
      return `You win! Paper beats Rock, Score is: ${playerScore} points for you vs ${compScore} points for the computer`;
    }
  } else if (playerSelection === "SCISSORS") {
    if (computerSelection === "ROCK") {
      compScore++;
      return `You lose! Rock beats Scissors, Score is: ${playerScore} points for you vs ${compScore} points for the computer`;
    } else {
      playerScore++;
      return `You win! Scissors beats Paper, Score is: ${playerScore} points for you vs ${compScore} points for the computer`;
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
    if (i == 4) {
      if (playerScore == compScore) {
        console.log(`${playerScore} vs ${compScore}, draw.`);
      } else if (playerScore > compScore) {
        console.log(`Congrats, you win! ${playerScore} vs ${compScore}`);
      } else {
        console.log(`You lost. ${playerScore} vs ${compScore}`);
      }
    }
  }
}

game();
