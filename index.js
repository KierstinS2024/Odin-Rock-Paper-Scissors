// Rock, Paper, Scissors Game;


// FUNCTION getComputerChoice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// FUNCTION determineWinner
function determineWinner(buttonId, computerChoice) {
  if (buttonId === computerChoice) {
    return "Tie";
  } else if (
    (buttonId === "rock" && computerChoice === "scissors") ||
    (buttonId === "paper" && computerChoice === "rock") ||
    (buttonId === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const rock = document
    .getElementById("rock")
    .addEventListener("click", playGame);
  const paper = document
    .getElementById("paper")
    .addEventListener("click", playGame);
  const scissors = document
    .getElementById("scissors")
    .addEventListener("click", playGame);

  function playGame(event) {
    const computerChoice = getComputerChoice();
    const buttonId = event.target.id;
    const result = determineWinner(buttonId, computerChoice);
    document.getElementById(
      "results"
    ).innerText = `You chose: ${buttonId}\nComputer chose: ${computerChoice}\nResult: ${result}`;
  }
});
