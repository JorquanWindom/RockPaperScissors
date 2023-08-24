function getComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playGame(playerSelection, computerSelection) {
    const playerScore = document.querySelector('.player-score');
    const computerScore = document.querySelector('.computer-score');
    const roundResult = document.querySelector('.round-result');
    if(playerScore.textContent == '5' || computerScore.textContent == '5'){
        reset();
    }
    switch (computerSelection) {
        case "rock":
            if (playerSelection == "paper") {
                roundResult.textContent = "You Win! Paper beats Rock";
                playerScore.textContent = `${parseInt(playerScore.textContent) + 1}`;
            } else if (playerSelection == "scissors") {
                roundResult.textContent = "You Lose! Rock beats Scissors";
                computerScore.textContent = `${parseInt(computerScore.textContent) + 1}`;
            } else {
                roundResult.textContent = "You Tied!";
            }
            break;

        case "paper":
            if (playerSelection == "rock") {
                roundResult.textContent = "You Lose! Paper beats Rock";
                computerScore.textContent = `${parseInt(computerScore.textContent) + 1}`;
            } else if (playerSelection == "scissors") {
                roundResult.textContent = "You Win! Scissors beats Paper";
                playerScore.textContent = `${parseInt(playerScore.textContent) + 1}`;
            } else {
                roundResult.textContent = "You Tied!";
            }
            break;

        case "scissors":
            if (playerSelection == "paper") {
                roundResult.textContent = "You Lose! Scissors beats Paper";
                computerScore.textContent = `${parseInt(computerScore.textContent) + 1}`;
            } else if (playerSelection == "rock") {
                roundResult.textContent = "You Win! Rock beats Scissors";
                playerScore.textContent = `${parseInt(playerScore.textContent) + 1}`;
            } else {
                roundResult.textContent = "You Tied!";
            }
            break;
    }
}


const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let playerSelection = btn.textContent.toLowerCase();
        playGame(playerSelection, getComputerSelection());
        gameOver();
    });
});

function gameOver() {
    const playerScore = document.querySelector('.player-score');
    const computerScore = document.querySelector('.computer-score');
    const container = document.querySelector('#main-container');
    const gameOverMessage = document.createElement('p');
    const playAgain = document.createElement('p');
    playAgain.classList.add('play-again');
    gameOverMessage.classList.add('game-over-message');
    playAgain.textContent = "Select an option to play again.";
    gameOverMessage.textContent = "Game Over! You ";
    container.appendChild(gameOverMessage);
    container.appendChild(playAgain);

    if (playerScore.textContent == '5') {
        gameOverMessage.textContent += 'Win!'
        return true;
    }
    if (computerScore.textContent == '5') {
        gameOverMessage.textContent += 'Lose!'
        return true;
    }
    container.removeChild(playAgain);
    container.removeChild(gameOverMessage);
    return false;
}

function reset() {
    const playerScore = document.querySelector('.player-score');
    const computerScore = document.querySelector('.computer-score');
    playerScore.textContent = '0';
    computerScore.textContent = '0';
    const container = document.querySelector('#main-container');
    const playAgain = document.querySelector('.play-again');
    const gameOverMessage = document.querySelector('.game-over-message');
    container.removeChild(playAgain);
    container.removeChild(gameOverMessage);
}