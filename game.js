// Rock, Paper, Scissors by Kurtsley 2024

let humanScore = 0;
let computerScore = 0;

// Has a 1/3 chance to return either rock, paper, or scissors
function getComputerChoice() {
    let result = Math.floor(Math.random() * 100);

    if (result < 33) {
        return "rock";
    }
    else if (result < 66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// Lets the player pick rock, paper, or scissors
function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors:");

    if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
        return choice;
    }
    else {
        alert("Incorrect input! Try again...");
    }
}

// Plays a single round of rock, paper, scissors
function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        console.log("Tie!");
        return;
    }
    if (humanChoice.toLowerCase() === "rock") {
        if (computerChoice.toLowerCase() === "paper") {
            console.log("You lose, paper beats rock!");
            computerScore++;
        }
        else {
            console.log("You win, rock beats scissors!");
            humanScore++;
        }
    }
    if (humanChoice.toLowerCase() === "paper") {
        if (computerChoice.toLowerCase() === "scissors") {
            console.log("You lose, scissors beats paper!");
            computerScore++;
        }
        else {
            console.log("You win, paper beats rock!");
            humanScore++;
        }
    }
    if (humanChoice.toLowerCase() === "scissors") {
        if (computerChoice.toLowerCase() === "rock") {
            console.log("You lose, rock beats scissors!");
            computerScore++;
        }
        else {
            console.log("You win, scissors beats paper!");
            humanScore++;
        }
    }
}

// Play 5 rounds
function playGame() {
    const WINNING_SCORE = 5;

    while (humanScore < WINNING_SCORE && computerScore < WINNING_SCORE) {
        playRound();
    }

    if (humanScore === WINNING_SCORE) {
        alert("Player wins!");
    }
    else {
        alert("Computer wins...");
    }
}

playGame();