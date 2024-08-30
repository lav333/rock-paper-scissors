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

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "Tie!\nhuman: " + humanScore + " computer: " + computerScore
    }
    else if (winner(humanChoice, computerChoice) == "a") {
        humanScore += 1;
        return "Human wins!\nhuman: " + humanScore + " computer: " + computerScore
    }
    else if (winner(humanChoice, computerChoice) == "b") {
        computerScore += 1
        return "Computer wins!\nhuman: " + humanScore + " computer: " + computerScore
    }
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

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for(let i = 0; i<5; i++) {
        const human = getHumanChoice();
        const computer = getComputerChoice();
        console.log(playRound(human, computer));
        console.log(human);
        console.log(computer);
    }

    if (humanScore == computerScore) {
        return "Game over! It's a tie!";
    }
    else if (humanScore > computerScore) {
        return "Game over! Human wins!";
    }
    else {
        return "Game over! Computer wins!";
    }
}

console.log(playGame());

let count = 1;
while (count == 1) {
    let newGame = prompt("Another game? Yes/No");
    if (newGame == "Yes") {
        console.log(playGame());
    }
    else {
        count = 0
    }
}
