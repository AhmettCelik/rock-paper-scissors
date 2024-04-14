let playerScore = 0;
let computerScore = 0;
let options = ["rock", "paper", "scissors"];
let playerChoice = "rock";
const rockButton = document.querySelector('#rock_btn');
const paperButton = document.querySelector('#paper_btn');
const scissorsButton = document.querySelector('#scissors_btn');

// let roundCount = getRoundCount();

/*
function getRoundCount() {
    return prompt("Enter game round count");
}
*/

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

function checkInput(playerChoice) {
    let continue_break = !((playerChoice == "rock") || (playerChoice == "paper") || (playerChoice == "scissors"));
    return continue_break;
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
        console.log("player chose: " + playerChoice + " computer chose: " + computerChoice);
        console.log("Draw for this round");
        computerScore++;
        playerScore++;
        console.log("Your score: " + playerScore + " Computer score: " + computerScore);
    }else if(computerWin) {
        console.log("player chose: " + playerChoice + " computer chose: " + computerChoice);
        console.log("You lose this round");
        computerScore++;
        console.log("Your score: " + playerScore + " Computer score: " + computerScore);
    }else if(playerWin) {
        console.log("player chose: " + playerChoice + " computer chose: " + computerChoice);
        console.log("You win this round!");
        playerScore++;
        console.log("Your score: " + playerScore + " Computer score: " + computerScore);
    }
}

function playRound(playerChoice) {
    do {
        var computerChoice = getComputerChoice();
        if(checkInput(playerChoice)) console.log("invalid value! Enter again...");

        findWinner(playerChoice, computerChoice);

    }while(checkInput(playerChoice));
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
