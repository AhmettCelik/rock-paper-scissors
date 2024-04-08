function getComputerChoice() {
    options = ["rock", "paper", "scissors"];
    let index = Math.round(Math.random() * 2);
    let result = options[index];
    return result;
}

function getPlayerChoice() {
    return prompt("Rock, Paper or Scissors?").toLowerCase();
}

function handleInput(playerChoice) {
    let continue_break = !(playerChoice == "rock") || (playerChoice == "paper") || (playerChoice == "scissors");
    return continue_break;
}

function playRound() {

    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    

    while(handleInput(playerChoice)) {

        console.log("invalid value! Enter again...");
        playerChoice = getPlayerChoice();

        handleInput(playerChoice);
    }


}
