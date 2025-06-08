function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function getHumanChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = prompt('Enter rock, paper, or scissors:');
    if (choices.includes(choice)) {
        return choice;
    } else {
        alert('Invalid choice. Please try again.');
        return getHumanChoice();
    }
}


let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It\'s a tie! ${humanChoice} vs ${computerChoice}`;
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

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
    }

    if (humanScore > computerScore) {
        console.log('Congratulations! You win the game!');
    } else if (humanScore < computerScore) {
        console.log('Sorry! You lose the game.');
    } else {
        console.log('The game is a tie!');
    }
    console.log('Thanks for playing!');
    console.log(`Final Score: You ${humanScore} - ${computerScore} Computer`);
    console.log('Goodbye!');
    console.log('Feel free to play again!');
}

console.log('Welcome to Rock, Paper, Scissors!');
playGame();
