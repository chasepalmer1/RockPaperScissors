let playerScore = 0;
let computerScore = 0;
let numToWin = 5;
let playerSelection;
let computerSelection;
let gameResults;

function getComputerChoice() {
    let choiceNum = Math.ceil(Math.random() * 3);
    switch (choiceNum) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
            break;
    }

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock") {
        if (computerSelection === "paper"){
            computerScore++;
            gameResults = "You Lose! Paper beats Rock";
        }
        if (computerSelection === "scissors"){
            playerScore++;
            gameResults = "You Win! Rock beats Scissors";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock"){
            playerScore++;
            gameResults = "You Win! Paper beats Rock";
        }
        if (computerSelection === "scissors"){
            computerScore++;
            gameResults = "You Lose! Scissors beats Paper";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock"){
            computerScore++;
            gameResults = "You Lose! Rock beats Scissors";
        }
        if (computerSelection === "paper"){
            playerScore++;
            gameResults = "You Win! Scissors beats Paper";
        }
    }
    if (playerSelection === computerSelection) {
       gameResults = "Its a tie!";
    }
}

function checkWin(choice) {
    if (playerScore < numToWin && computerScore < numToWin) {
        playRound(choice, computerSelection);
        updateText();
    } 
    if (playerScore >= numToWin) {
        gameResults = "You won the game! Congrats!";
        updateText();
    } else if (computerScore >= numToWin) {
        gameResults = "Computer won the game... You lost.";
        updateText();
    }
}

function newGame() {
    gameResults = "";
    playerScore = 0;
    computerScore = 0;
    updateText();
}

function updateText() {
    roundText.textContent = gameResults;
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
}

const score = document.querySelector('#scoreKeep');
const player = document.createElement('p');
const computer = document.createElement('p');

const roundText = document.querySelector('#winner');

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    getComputerChoice();
    checkWin("rock");
})
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    getComputerChoice();
    checkWin("paper");
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    getComputerChoice();
    checkWin("scissors");
});
const reset = document.querySelector('#newGame');
reset.addEventListener('click', () => {
    newGame();
});

score.appendChild(player);
score.appendChild(computer);