# Rock Paper Scissors (Console Game)

## Introduction

For this project, you will create the game **Rock Paper Scissors**. This game will be played entirely in the console.

Some of the student solutions below contain buttons, text, and other elements. These elements are part of what is called a graphical user interface (GUI). You will create the GUI in a later lesson. In the meantime, remember to commit your code to GitHub.

## Problem Solving Approach

Since this is the first JavaScript project being built from scratch, remember the wise words from the **Problem Solving** lesson. For each step in this project, make sure to:

- Plan or pseudocode your solution
- Write the code
- Test your code to make sure it works

## Assignment

Remember to **commit early and often**. To refresh your memory, check out the commit messages lesson.

### Step 1: Setup the Project Structure

- Create a new Git repository for your project
- Create a blank HTML document with a `<script>` tag
- Test if JavaScript is linked correctly:
  - Write `console.log("Hello World")` in your JavaScript file
  - Check if “Hello World” is logged in the browser console

> Best practice: Link to an external JavaScript file inside your `<script>` tag. This keeps your HTML file clean and organized.

You do not need to write additional code in the HTML file. This game is played entirely via the console.

### Step 2: Write the Logic to Get the Computer Choice

- Create a new function named `getComputerChoice`
- Write the code so that `getComputerChoice` randomly returns one of the following string values: `"rock"`, `"paper"`, or `"scissors"`

Hint: Use `Math.random()` to return a value based on a random number

Note: Arrays are not necessary for this solution, although they can help. They will be covered later in the curriculum.

Test your function using `console.log` before moving on.

### Step 3: Write the Logic to Get the Human Choice

- Create a new function named `getHumanChoice`
- Use the `prompt()` method to get the user's input
- Return the choice

You do not need to handle invalid input. Assume the user enters a valid value.

Test the return value with `console.log`.

### Step 4: Declare the Players' Score Variables

- Create two variables: `humanScore` and `computerScore`
- Initialize them to `0`
- Declare them in the global scope

### Step 5: Write the Logic to Play a Single Round

- Create a function named `playRound(humanChoice, computerChoice)`
- Make the `humanChoice` case-insensitive
- Determine the winner and print the result:
  - Example: `"You lose! Paper beats Rock"`
- Increment `humanScore` or `computerScore` based on the round outcome

```javascript
function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
```

### Step 6: Write the Logic to Play the Entire Game

- Create a function named `playGame`
- Move your `playRound` function and score variables into this function
- Call `playRound()` five times
- Keep track of scores and declare the final winner

Hint: Each call to `getHumanChoice()` or `getComputerChoice()` should return a new value

If needed, rework your functions or write helper functions to make your logic cleaner

If you know how to use loops, you may use one here (loops will be covered in a future lesson)

## Note on Extra Features

When making interactive projects, you may feel tempted to:

- Add extra features
- Improve interactivity
- Add styling and UI/UX elements

We recommend holding off on those improvements until you work on **portfolio projects** later.

For more information, read Part 5 and Part 7 of *Becoming a TOP Success Story*.
--------------
PseudoCode for Rock Paper Scissors

FUNCTION getHumanChoice
    PROMPT user to enter "rock", "paper", or "scissors"
    CONVERT input to lowercase
    RETURN user choice

FUNCTION getComputerChoice
    GENERATE a random number between 0 and 2
    IF number == 0, RETURN "rock"
    ELSE IF number == 1, RETURN "paper"
    ELSE RETURN "scissors"

FUNCTION determineWinner(humanChoice, computerChoice)
    IF humanChoice == computerChoice
        RETURN "Tie"
    ELSE IF (humanChoice == "rock" AND computerChoice == "scissors") OR
            (humanChoice == "paper" AND computerChoice == "rock") OR
            (humanChoice == "scissors" AND computerChoice == "paper")
        RETURN "You win!"
    ELSE
        RETURN "You lose!"

MAIN FUNCTION playGame
    CALL getHumanChoice and store in human
    CALL getComputerChoice and store in computer
    CALL determineWinner with human and computer
    ALERT the result
    ASK if user wants to play again
