// Main Script

const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');
const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorsDiv = document.getElementById('scissors');
const winnerBadge = document.getElementById('winner-badge');

function game(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);

    if (winner === 'user') {
        userScore++;
        updateScores();
        displayResult(`${userChoice} beats ${computerChoice}`);
        if (userScore === winningScore) showWinner('User');
    } else if (winner === 'computer') {
        computerScore++;
        updateScores();
        displayResult(`${computerChoice} beats ${userChoice}`);
        if (computerScore === winningScore) showWinner('Computer');
    } else {
        displayResult(`It's a draw! Both chose ${userChoice}`);
    }
}

rockDiv.addEventListener('click', () => game('rock'));
paperDiv.addEventListener('click', () => game('paper'));
scissorsDiv.addEventListener('click', () => game('scissors'));
