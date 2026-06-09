let humanScore = 0;
let computerScore = 0;
let gameCount = 0;

// for UI changes
let dialogue = document.getElementById("dialogue");
let youScore = document.getElementById("youScore");
let compScore = document.getElementById("compScore");
let youChoice = document.getElementById("youChoice");
let compChoice = document.getElementById("compChoice");

const btn = document.querySelectorAll(".btn");
let playAgain = document.getElementById("playAgain");
playAgain.style.display = "none";

dialogue.classList.add("dialogue");
// const userName = prompt("Enter your user-Name : ");

// function getHumanChoice() {
//     let playerChoice = prompt("Enter your choice : ");
//     playerChoice = playerChoice.toLowerCase();
//     return playerChoice;
// }

function getComputerChoice() {
    let rand = 100*Math.random();
    if(rand < 33) return "rock";
    else if(rand < 67) return "paper";
    return "scissor";
}

function playRound(humanChoice, computerChoice) {
    // humanChoice = getHumanChoice();
    // computerChoice = getComputerChoice();
    gameCount++;

    if(humanChoice == computerChoice) {
        dialogue.textContent = "It's a Tie!";
    }
    else if((humanChoice == "rock" && computerChoice == "scissor") || (humanChoice == "scissor" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")) {
        humanScore++;
        dialogue.textContent = `You Won! ${humanChoice} beats ${computerChoice}`;
    }
    else {
        computerScore++;
        dialogue.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
    }
    updateUI(humanChoice, computerChoice);
    if(gameCount == 6) {
        endGame();
    }

}

function updateUI(humanChoice, computerChoice) {
    youChoice.innerHTML = `<img height="100px" src="images/${humanChoice}.png" alt="${humanChoice}">`;
    compChoice.innerHTML = `<img height="100px" src="images/${computerChoice}Comp.png" alt="${computerChoice}">`
    //update score
    youScore.textContent = `score : ${humanScore}`;
    compScore.textContent = `score : ${computerScore}`;
}

function endGame() {
    if(humanScore > computerScore) dialogue.textContent = "you are the WINNER!";
    else if(computerScore > humanScore) dialogue.textContent = "computer is the WINNER!";
    else dialogue.textContent = "Wohh! It's Tie";
    btn.forEach(button => {
        button.disabled = true;
    });

    playAgain.style.display = "block";
}

// function playGame() {
//     for(let i = 0 ; i < 5 ; i++) {
//         let result = playRound();
//         console.log(result,"\n","Your score : ", humanScore, "Computer score : ", computerScore);
//     }
// }

function reset() {
    humanScore = 0;
    computerScore = 0;
    gameCount = 0;
    youScore.textContent = "score : 0";
    compScore.textContent = "score : 0";
    dialogue.textContent = "";
    youChoice.innerHTML = "";
    compChoice.innerHTML = "";
    btn.forEach(button => {
        button.disabled = false;
    });
    playAgain.style.display = "none";
}

btn.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});

playAgain.addEventListener("click", reset);
        // const playAgainDiv = document.createElement("div");
        // const playAgainBtn = document.createElement("button");
        // playAgainBtn.textContent = "PLAY AGAIN";
        // playAgainBtn.style.fontSize = "18px";
        // playAgainBtn.style.textAlign = "center";
        // playAgainDiv.style.display = "flex";
        // playAgainDiv.style.justifyContent = "center";
        // playAgainDiv.appendChild(playAgainBtn);
        // document.body.appendChild(playAgainDiv);
    
        // playAgainBtn.addEventListener("click", () => {
        //     gameCount = 0;
        // });
// const winner = playGame();
// console.log(winner.toUpperCase(),"\n", `${userName}'s score : `, humanScore, "Computer's score : ", computerScore);