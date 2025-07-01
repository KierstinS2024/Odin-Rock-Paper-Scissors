// Rock, Paper, Scissors Game;

// FUNCTION getHumanChoice
function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:");
  if (choice === null) {
    alert("Game cancelled.");
    return null; // Stop and return immediately if user clicks Cancel
  }

  choice = choice.toLowerCase();

  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt("Invalid choice. Please enter rock, paper, or scissors:");
    if (choice === null) {
      alert("Game cancelled.");
      return null;
    }
    choice = choice.toLowerCase();
  }

  return choice;
}

// FUNCTION getComputerChoice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// FUNCTION determineWinner
function determineWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

// FUNCTION playGame
function playGame() {
  let playAgain = true;

  while (playAgain) {
    const humanChoice = getHumanChoice();
    if (humanChoice === null) return; // Exit if game was cancelled

    const computerChoice = getComputerChoice();
    const result = determineWinner(humanChoice, computerChoice);

    alert(
      `You chose: ${humanChoice}\nComputer chose: ${computerChoice}\nResult: ${result}`
    );

    playAgain = confirm("Do you want to play again?");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  //create event listeners and change to switch case for buttons
  const button = document
    .querySelector(".btn")
    .addEventListener("click", playGame);
  const rock = document
    .getElementById("rock")
    .addEventListener("click", handleClick);
  const paper = document
    .getElementById("paper")
    .addEventListener("click", handleClick);
  const scissors = document
    .getElementById("scissors")
    .addEventListener("click", handleClick);

  function handleClick(event) {
    const buttonId = event.target.id;

    switch (buttonId) {
      case "rock":
        console.log("you clicked rock!");
        break;
      case "paper":
        console.log("you clicked paper!");
        break;
      case "scissors":
        console.log("you clicked scissors!");
        break;
      default:
        console.log("something went wrooooong!");
    }
  }
});
