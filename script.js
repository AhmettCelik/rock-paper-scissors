let roundCount = prompt("Enter game round count");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    options = ["rock", "paper", "scissors"];
    let index = Math.round(Math.random() * 2);
    let result = options[index];
    return result;
}

function getPlayerChoice() {
    return prompt("Rock, Paper or Scissors?").toLowerCase();
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

function playRound() {

    do {

        var playerChoice = getPlayerChoice();
        var computerChoice = getComputerChoice();
        if(checkInput(playerChoice)) console.log("invalid value! Enter again...");

        findWinner(playerChoice, computerChoice);

    }while(checkInput(playerChoice));

}

function playGame(roundCount) {
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
}

playGame(roundCount);