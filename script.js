function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x == 0) {
        return "rock";
    }
    else if (x == 1) {
        return "paper";
    }
    else if (x == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let y = prompt("Rock, paper or scissors?");
    if (y.toLowerCase() == "rock") {
        return "rock";
    }
    else if (y.toLowerCase() == "paper") {
        return "paper";
    }
    else if (y.toLowerCase() == "scissors") {
        return "scissors";
    }
    else {
        return "Typo!"
    }
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    divChoices.textContent = "";
    if (humanChoice == computerChoice) {
    }
    else if (winner(humanChoice, computerChoice) == "a") {
        humanScore += 1;
        divHuman.textContent = "Human: " + humanScore;
        divComputer.textContent = "Computer: " + computerScore;

    }
    else if (winner(humanChoice, computerChoice) == "b") {
        computerScore += 1
        divHuman.textContent = "Human: " + humanScore;
        divComputer.textContent = "Computer: " + computerScore;
    }

    divChoices.textContent = "You chose " + humanChoice + " and the computer chose " + computerChoice;

    if (humanScore == 5) {
        humanScore = 0;
        computerScore = 0;
        return alert("Game over! You win!")
    }
    else if (computerScore == 5) {
        humanScore = 0;
        computerScore = 0;
        return alert("Game over! Computer wins!")
    }
    else {return}
}

function winner(a, b) {
    if (a != b) {
        if ((a == "rock" && b == "scissors") || (a == "paper" && b == "rock") || (a == "scissors" && b == "paper")) {
            return "a";
        }
        else {
            return "b";
        }
    }
}


const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

const divHuman = document.querySelector(".humanScore");
const divComputer = document.querySelector(".computerScore");
const divChoices = document.querySelector(".choices");

buttonRock.addEventListener("click", () => playRound("rock", getComputerChoice()));
buttonPaper.addEventListener("click", () => playRound("paper", getComputerChoice()));
buttonScissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
