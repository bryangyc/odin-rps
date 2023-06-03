console.log("Hello World");

let signs = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let com = Math.floor(Math.random() * signs.length);
    return signs[com];
}

// function that plays a single round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
    } else;
    // console.log(playerScore, computerScore);
}

// let playerSelection = "rock".toLowerCase()
let computerScore = 0;
let playerScore = 0;
// console.log(playerSelection, computerSelection)

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose a sign").toLocaleLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playerScore, computerScore);
    }
}


game()

if (playerScore < computerScore) {
    console.log('You Lose')
} else if (computerScore < playerScore) {
    console.log('You Win')
} else console.log('Tie')

// console.log(getComputerChoice())