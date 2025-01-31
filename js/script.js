const playerDisplay = document.querySelector('.game__player');
const computerDisplay = document.querySelector('.game__computer');
const resultDisplay = document.querySelector('.game__result');

const choices = ["rock", "paper", "scissors"];
let result = "";

const playGame = (playerChoices) => {

    const computerChoice = choices[Math.floor(Math.random() * 3)];

};
