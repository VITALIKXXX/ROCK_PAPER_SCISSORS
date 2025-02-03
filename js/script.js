const playerDisplay = document.querySelector('.game__player');
const computerDisplay = document.querySelector('.game__computer');
const resultDisplay = document.querySelector('.game__result');
const playerScoreDisplay = document.querySelector('.playerScoreDisplay');
const computerScoreDisplay = document.querySelector('.computerScoreDisplay');
const winSound = new Audio("sound/win.mp3");
const loseSound = new Audio("sound/lose.mp3");

const choices = ["rock🪨", "paper🧻", "scissors✂️"];
let result = "";
let playerScore = 0;
let computerScore = 0;

const playGame = (playerChoices) => {

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoices === computerChoice) {
        result = "IT'S A TIE!";
    }
    else {
        switch (playerChoices) {
            case "rock🪨":
                result = (computerChoice === "scissors✂️") ? "YOU WIN!😉" : "YOU LOSE😔";
                break;
            case "paper🧻":
                result = (computerChoice === "rock🪨") ? "YOU WIN!😉" : "YOU LOSE😔";
                break;
            case "scissors✂️":
                result = (computerChoice === "paper🧻") ? "YOU WIN!😉" : "YOU LOSE😔";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoices}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    const changeColorResult = (result) => {
        resultDisplay.classList.remove("greenText", "redText");
        if (result === "YOU WIN!😉") {
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
        } else if (result === "YOU LOSE😔") {
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }
    };

    changeColorResult(result);


};

