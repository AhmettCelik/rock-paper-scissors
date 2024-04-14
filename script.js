// let roundCount = getRoundCount();

/*
function getRoundCount() {
    return prompt("Enter game round count");
}
*/

let playerScore = 0;
let computerScore = 0;
let options = ["rock", "paper", "scissors"];
let playerChoice = "rock";
const rockButton = document.querySelector('#rock_btn');
const paperButton = document.querySelector('#paper_btn');
const scissorsButton = document.querySelector('#scissors_btn');
const playAgainBtn = document.createElement("button");
let buttonsDiv = document.getElementById("buttons");
let selectedOptionsParagraph = document.createElement("p");
let resultParagraph = document.createElement("p");
let scoreParagraph = document.createElement("p");
let winnerParagraph = document.createElement("p");
let resultDiv = document.getElementById("result");


rockButton.addEventListener("click", () => {
    playerChoice = options[0];
    playRound(playerChoice);
});

paperButton.addEventListener("click", () => {
    playerChoice = options[1];
    playRound(playerChoice);
});

scissorsButton.addEventListener("click", () => {
    playerChoice = options[2];
    playRound(playerChoice);
});

function getComputerChoice() {
    let index = Math.round(Math.random() * 2);
    let result = options[index];
    return result;
}

function findWinner(playerChoice, computerChoice) {
    let draw = (playerChoice == "rock" && computerChoice == "rock") || 
               (playerChoice == "paper" && computerChoice == "paper") || 
               (playerChoice == "scissors" && computerChoice == "scissors");
               
    let computerWin = (computerChoice == "rock" && playerChoice == "scissors") ||
                      (computerChoice == "paper" && playerChoice == "rock") ||
                      (computerChoice == "scissors" && playerChoice == "paper");

    let playerWin = (playerChoice == "rock" && computerChoice == "scissors") ||
                    (playerChoice == "paper" && computerChoice == "rock") ||
                    (playerChoice == "scissors" && computerChoice == "paper");

    
    if(draw) {
        selectedOptionsParagraph.textContent = "player chose: " + playerChoice + " computer chose: " + computerChoice;
        resultParagraph.textContent = "Draw for this round";
        computerScore++;
        playerScore++;
        scoreParagraph.textContent = "Your score: " + playerScore + " Computer score: " + computerScore;
    }else if(computerWin) {
        selectedOptionsParagraph.textContent = "player chose: " + playerChoice + " computer chose: " + computerChoice;
        resultParagraph.textContent = "You lose this round";
        computerScore++;
        scoreParagraph.textContent = "Your score: " + playerScore + " Computer score: " + computerScore;
    }else if(playerWin) {
        selectedOptionsParagraph.textContent = "player chose: " + playerChoice + " computer chose: " + computerChoice;
        resultParagraph.textContent = "You win this round";
        playerScore++;
        scoreParagraph.textContent = "Your score: " + playerScore + " Computer score: " + computerScore;
    }

    
    resultDiv.innerHTML = "";
    resultDiv.appendChild(selectedOptionsParagraph);
    resultDiv.appendChild(resultParagraph);
    resultDiv.appendChild(scoreParagraph);

    if((playerScore == 5) || (computerScore == 5)) {
        resultDiv.innerHTML = "";
        (playerScore == 5) ? winnerParagraph.textContent = "Game Over! You Win!" : winnerParagraph.textContent = "Game Over! You Lose";
        resultDiv.appendChild(scoreParagraph);
        resultDiv.appendChild(winnerParagraph);
        computerScore = 0;
        playerScore = 0;
        playAgain();
    }

}

function playAgain() {
    buttonsDiv.innerHTML = "";
    playAgainBtn.textContent = "Play Again!"
    resultDiv.appendChild(playAgainBtn);
    playAgainBtn.addEventListener('click', () => {
        resultDiv.innerHTML = "";
        buttonsDiv.innerHTML = "";
        buttonsDiv.appendChild(rockButton);
        buttonsDiv.appendChild(paperButton);
        buttonsDiv.appendChild(scissorsButton);
    })
}

function playRound(playerChoice) {
        var computerChoice = getComputerChoice();
        findWinner(playerChoice, computerChoice);
}

/*
function playGame(roundCount) {

    let again = false;

    do {
        again = false;
        
        for(let i = 0; i < roundCount; i++) {
            playRound();
            if((i == roundCount - 1) && (computerScore == playerScore)) {
                console.log("Extra round!!");
                roundCount++;
            }
        }
        if(computerScore > playerScore) {
            console.log("You Lose!")
        }else if(playerScore > computerScore) {
            console.log("You Win!");
        }

        let inputForAgain = prompt("wanna again? yes or no");
        inputForAgain == "yes" ? again = true : console.log("GAME OVER");
        if(again) {
            computerScore = 0;
            playerScore = 0;
            askAgain = getRoundCount();
            roundCount = askAgain;
        }
    }while(again)
}
*/
