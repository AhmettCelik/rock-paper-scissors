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

function playRound() {

    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    

    while(checkInput(playerChoice)) {

        console.log("invalid value! Enter again...");
        playerChoice = getPlayerChoice();

        checkInput(playerChoice);
    }

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
        console.log("Draw");
    }else if(computerWin) {
        console.log("You Lose");
    }else if(playerWin) {
        console.log("You Win!");
    }

}

playRound();
