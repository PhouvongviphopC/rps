function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const result = document.getElementById('result');
const resetButton = document.getElementById('reset');
resetButton.style.display = 'none'; // Hide reset button initially

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It's a tie! ${humanChoice} vs ${computerChoice}`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function endGame(message) {
    result.innerHTML = `${message}<br>Final Score: You ${humanScore} - ${computerScore} Computer<br>Thanks for playing!<br>Feel free to play again!`;
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    resetButton.style.display = 'inline-block'; // Show reset button
}

function handleRound(humanChoice) {
    if (humanScore >= 5 || computerScore >= 5) return; // Prevent further play after game ends
    const computerSelection = getComputerChoice();
    const roundResult = playRound(humanChoice, computerSelection);
    result.innerHTML = `${roundResult}<br>Score: You ${humanScore} - ${computerScore} Computer`;

    if (humanScore === 5) {
        endGame('You win!');
    } else if (computerScore === 5) {
        endGame('You lose!');
    }
}

rockButton.addEventListener('click', () => handleRound('rock'));
paperButton.addEventListener('click', () => handleRound('paper'));
scissorsButton.addEventListener('click', () => handleRound('scissors'));

resetButton.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    result.innerHTML = 'Game reset! Start playing again.';
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    resetButton.style.display = 'none'; // Hide reset button again
});