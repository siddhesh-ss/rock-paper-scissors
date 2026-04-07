let humanScore = 0;
let computerScore = 0;

const userName = prompt("Enter your user-Name : ");

function getHumanChoice() {
    let playerChoice = prompt("Enter your choice : ");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function getComputerChoice() {
    let rand = 100*Math.random();
    if(rand < 33) return "rock";
    else if(rand < 67) return "paper";
    return "scissor";
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if(humanChoice == computerChoice) {
        humanScore++;
        computerScore++;
        return "It's Tie!";
    }
    else if((humanChoice == "rock" && computerChoice == "scissor") || (humanChoice == "scissor" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")) {
        humanScore++;
        return `You Won! ${humanChoice} beats ${computerChoice}`;
    }
    else {
        computerScore++;
        return `You Lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function playGame() {
    for(let i = 0 ; i < 5 ; i++) {
        let result = playRound();
        console.log(result,"\n","Your score : ", humanScore, "Computer score : ", computerScore);
    }
    if(humanScore > computerScore) return `${userName} is the WINNER!`;
    else if(computerScore > humanScore) return "Computer is the WINNER!";
    else return "Wohh! It's Tie";
}

const winner = playGame();
console.log(winner.toUpperCase(),"\n", `${userName}'s score : `, humanScore, "Computer's score : ", computerScore);