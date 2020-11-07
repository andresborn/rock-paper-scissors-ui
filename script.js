const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const YOUWINMESSAGE = "You win!";
const YOULOSEMESSAGE = "You lose.";
let playerScore = 0;
let computerScore = 0;
let playerSelection;

const h1 = document.querySelector('h1');
let whoWon = document.createElement('h2');
let mainScore = document.createElement('h3');
const resetButton = document.createElement('button');
resetButton.textContent = "Play again!"

function computerPlay() {
    const RPSArray = ['rock', 'paper', 'scissors']
    // Selects a random value of the array
    const randomSelection = RPSArray[Math.floor(Math.random() * RPSArray.length)];
        return randomSelection;
    }

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerSelection;
    let result;
        if (playerScore < 5 && computerScore < 5) {
            if (playerSelection === computerSelection) {
                result = "It's a tie. Try again!";
            } else if ( (playerSelection === "paper" && computerSelection === "rock")
            ||
            (playerSelection === "rock" && computerSelection === "scissors")
            || 
            (playerSelection === "scissors" && computerSelection === "paper") ) {
                result = YOUWINMESSAGE + " " + playerSelection + " beats " + computerSelection;
                playerScore++;
            } else {
                result = YOULOSEMESSAGE + " " + computerSelection + " beats " + playerSelection;
                computerScore++;
            }
        whoWon.textContent = result;
        mainScore.textContent = `Your points: ${playerScore}, Computer points: ${computerScore}`;   
        return result;
    } if (playerScore === 5) {
        mainScore.textContent = `Your points: ${playerScore}, Computer points: ${computerScore}`;
        whoWon.textContent = "You are a WINNER baby!";
        h1.appendChild(resetButton);
    } if (computerScore === 5) {
        mainScore.textContent = `Your points: ${playerScore}, Computer points: ${computerScore}`;
        whoWon.textContent = "You are a LOSER. Try again!";
        h1.appendChild(resetButton);
    }
}

rockButton.addEventListener('click', (e) => {
    console.log(playRound(e.target.id, computerPlay));
})

paperButton.addEventListener('click', (e) => {
    console.log(playRound(e.target.id, computerPlay));
})

scissorsButton.addEventListener('click', (e) => {
    console.log(playRound(e.target.id, computerPlay));
})

resetButton.addEventListener('click', () => {
    resetGame();
})

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    mainScore.textContent = `Your points: ${playerScore}, Computer points: ${computerScore}`;
    h1.removeChild(resetButton);
}

h1.appendChild(whoWon);
whoWon.textContent = "Let's play!"
h1.appendChild(mainScore);
mainScore.textContent = `Your points: ${playerScore}, Computer points: ${computerScore}`;
