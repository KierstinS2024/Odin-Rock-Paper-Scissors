// PseudoCode for Rock Paper Scissors
console.log("Rock Paper Scissors Game");

// FUNCTION getHumanChoice
//     PROMPT user to enter "rock", "paper", or "scissors"
//     CONVERT input to lowercase
//     RETURN user choice

function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt(
      "Invalid choice. Please enter rock, paper, or scissors:"
    ).toLowerCase();
  }
  return choice;
}

// FUNCTION getComputerChoice
//     GENERATE a random number between 0 and 2
//     IF number == 0, RETURN "rock"
//     ELSE IF number == 1, RETURN "paper"
//     ELSE RETURN "scissors"

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// FUNCTION determineWinner(humanChoice, computerChoice)
//     IF humanChoice == computerChoice
//         RETURN "Tie"
//     ELSE IF (humanChoice == "rock" AND computerChoice == "scissors") OR
//             (humanChoice == "paper" AND computerChoice == "rock") OR
//             (humanChoice == "scissors" AND computerChoice == "paper")
//         RETURN "You win!"
//     ELSE
//         RETURN "You lose!"

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
// MAIN FUNCTION playGame
//     CALL getHumanChoice and store in human
//     CALL getComputerChoice and store in computer
//     CALL determineWinner with human and computer
//     ALERT the result
//     ASK if user wants to play again
function playGame() {
  let playAgain = true;

  while (playAgain) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = determineWinner(humanChoice, computerChoice);

    alert(
      `You chose: ${humanChoice}\nComputer chose: ${computerChoice}\nResult: ${result}`
    );

    playAgain = confirm("Do you want to play again?");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn");
  button.addEventListener("click", playGame);
});
