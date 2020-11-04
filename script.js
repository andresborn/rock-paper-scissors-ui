const ROCK = "rock";
const PAPER =  "paper";
const SCISSORS = "scissors";
let playerScore = 0;
let computerScore = 0;
let youWinMessage = "You win!";
let youLoseMessage = "You lose.";

function computerPlay() {
const RPSArray = [ROCK, PAPER, SCISSORS]
// Selects a random value of the array
const randomSelection = RPSArray[Math.floor(Math.random() * RPSArray.length)];
    return randomSelection;
}

function playerPlay() {
    let option = prompt("Choose: Rock, Paper or Scissors").toLowerCase();
    while (option !== "rock" && option !== "paper" && option !== "scissors") {
        alert("You can only choose either Rock, Paper or Scissors!");
        option = prompt("Choose: Rock, Paper or Scissors").toLowerCase();
    } return option;
}


//Play a round against the computer
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    let result;
    

        if (playerSelection === computerSelection) {
            result = "It's a tie. Try again!";
        } else if ( (playerSelection === "paper" && computerSelection === "rock")
        ||
        (playerSelection === "rock" && computerSelection === "scissors")
        || 
        (playerSelection === "scissors" && computerSelection === "paper") ) {
            result = youWinMessage + " " + playerSelection + " beats " + computerSelection;
            playerScore++;
        } else {
            result = youLoseMessage + " " + computerSelection + " beats " + playerSelection;
            computerScore++;
        }
    return result;
    }


// Play 5 rounds and display outcome
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {return `${youWinMessage} You won ${playerScore} times. The computer won only ${computerScore} times.`}
    else {return `${youLoseMessage} You lost ${playerScore} times. The computer won only ${computerScore} times.`}
}

// Initial alert to play