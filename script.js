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

console.log("Computer choice: " + getComputerChoice());
console.log("Human choice: " + getHumanChoice())