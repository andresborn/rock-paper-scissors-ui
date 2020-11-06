const buttons = document.querySelectorAll('.button');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const h1 = document.querySelector('h1');
const YOUWINMESSAGE = "You win!";
const YOULOSEMESSAGE = "You lose.";
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let whoWon = document.createElement('h2');
let mainScore = document.createElement('h3');

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

h1.appendChild(whoWon);
h1.appendChild(mainScore);
