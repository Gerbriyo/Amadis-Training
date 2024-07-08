// Game Logic Functions

const winningScore = 5; //score to achieve

let userScore = 0;   //initialize the scores
let computerScore = 0;

//
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return 'draw';
    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')) {
        return 'user';
    }
    return 'computer';
}
