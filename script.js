// console.log("Hello World");

let signs = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;
let noOfGames = 0;
let playerSelection;
let computerSelection;

function getComputerChoice() {
    let com = Math.floor(Math.random() * signs.length);
    return signs[com];
}

// function that plays a single round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie"
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
        computerScore++;
        return "Computer Wins"
    }
    if (
        (computerSelection === 'rock' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'rock')
    ) {
        playerScore++;
        return "Player Wins"
    }
    // console.log(playerScore, computerScore);
}

// let playerSelection = "rock".toLowerCase()
// console.log(playerSelection, computerSelection)

// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Choose a sign").toLocaleLowerCase();
//         let computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//         console.log(playerScore, computerScore);
//     }
// }

// game()


// function game() {
//     const buttons = document.querySelectorAll('button');
//     buttons.forEach(button => button.addEventListener('click', function (e) {
// console.log(e.target.innerHTML);
//         playerSelection = e.target.textContent;
// console.log(playerSelection);
//         computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//         console.log(playerScore, computerScore, playerSelection, computerSelection, noOfGames);
//     }))
// }
// game()

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function (e) {
    // console.log(e.target.innerHTML);
    playerSelection = e.target.textContent;
    // console.log(playerSelection);
    computerSelection = getComputerChoice();
    
    // playRound(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
        console.log("Tie")
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
        ) {
            computerScore++;
        }
        if (
            (computerSelection === 'rock' && playerSelection === 'paper') ||
            (computerSelection === 'paper' && playerSelection === 'scissors') ||
            (computerSelection === 'scissors' && playerSelection === 'rock')
            ) {
                playerScore++;
            }
            // console.log(playerSelection, computerSelection);
        console.log(playerScore, computerScore, playerSelection, computerSelection);
}))

// playRound('rock','scissors');
// Why isn't the variable reading outside of the function? 
// playRound(playerSelection, computerSelection);
// console.log(playerScore, computerScore, playerSelection, computerSelection, noOfGames);

if (playerScore === 5) {
    console.log("Player Wins");
} else if (computerScore === 5) {
    console.log("Computer Wins");
} else;
    // console.log(computerSelection);
    // console.log(playerSelection);



// console.log(getComputerChoice())