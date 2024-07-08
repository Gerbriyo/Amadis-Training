// UI Functions

function updateScores() {
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}

function displayResult(result) {
    resultText.textContent = result;
}

function disableButtons() {
    rockDiv.style.pointerEvents = 'none';
    paperDiv.style.pointerEvents = 'none';
    scissorsDiv.style.pointerEvents = 'none';
}

function enableButtons() {
    rockDiv.style.pointerEvents = 'auto';
    paperDiv.style.pointerEvents = 'auto';
    scissorsDiv.style.pointerEvents = 'auto';
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    updateScores();
    displayResult('Make your move!');
    winnerBadge.classList.add('hidden');
    enableButtons();
}

function showWinner(winner) {
    displayResult(`${winner} wins! 🏆`);
    winnerBadge.textContent = `${winner} wins!`;
    winnerBadge.classList.remove('hidden');
    disableButtons();
    setTimeout(resetGame, 5000);
}
