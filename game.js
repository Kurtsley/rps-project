// Rock, Paper, Scissors by Kurtsley 2024

const WINNING_SCORE = 5;
let humanScore = 0;
let computerScore = 0;

const resetBtn = document.querySelector("#reset");
const winnerText = document.querySelector("#winner");
const resultText = document.querySelector(".resultText");
const humanScoreText = document.querySelector("#playerscorenum");
const computerScoreText = document.querySelector("#computerscorenum");

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

// Plays a single round of rock, paper, scissors
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        resultText.textContent = "Tie!";
        return;
    }
    if (humanChoice.toLowerCase() === "rock") {
        if (computerChoice.toLowerCase() === "paper") {
            resultText.textContent = "You lose, paper beats rock!";
            computerScore++;
        }
        else {
            resultText.textContent = "You win, rock beats scissors!";
            humanScore++;
        }
    }
    if (humanChoice.toLowerCase() === "paper") {
        if (computerChoice.toLowerCase() === "scissors") {
            resultText.textContent = "You lose, scissors beats paper!";
            computerScore++;
        }
        else {
            resultText.textContent = "You win, paper beats rock!";
            humanScore++;
        }
    }
    if (humanChoice.toLowerCase() === "scissors") {
        if (computerChoice.toLowerCase() === "rock") {
            resultText.textContent = "You lose, rock beats scissors!";
            computerScore++;
        }
        else {
            resultText.textContent = "You win, scissors beats paper!";
            humanScore++;
        }
    }
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
    checkWinner();
}

function checkWinner() {
    if (humanScore === WINNING_SCORE) {
        winnerText.textContent = "You Win!";
        resetBtn.style.display = "inline-block";
        buttons.forEach(button => {
            button.disabled = true;
        });
    }
    else if (computerScore === WINNING_SCORE) {
        winnerText.textContent = "You Lose!";
        resetBtn.style.display = "inline-block";
        buttons.forEach(button => {
            button.disabled = true;
        });
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreText.textContent = 0;
    computerScoreText.textContent = 0;
    winnerText.textContent = "";
    resultText.textContent = "Choose a button";
    buttons.forEach(button => {button.disabled = false;})
    resetBtn.style.display = "none";

}

const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        switch (button.id) {
            case "rock":
                playRound("rock");
                break;
            case "paper":
                playRound("paper");
                break;
            case "scissors":
                playRound("scissors");
                break;
        }
    });
});

resetBtn.addEventListener("click", function() {
    resetGame();
});