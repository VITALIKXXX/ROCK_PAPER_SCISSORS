const playerDisplay = document.querySelector('.game__player');
const computerDisplay = document.querySelector('.game__computer');
const results = document.querySelector('.game__result');

const choices = ["rock", "paper", "scissors"];

const playGame = (playerChoices) => {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
};
