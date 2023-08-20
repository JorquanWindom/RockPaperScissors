function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function inputValidation(playerSelection){
    playerSelection = playerSelection.replace(/\s/g, '');
    let valid = false;
    if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
        valid = true;
    }
    if(!valid){
        playerSelection = prompt("Invalid Input!\nPlease enter Rock, Paper, or Scissors to play:").toLowerCase();
        inputValidation(playerSelection);
    }
    return playerSelection;
}

function playGame(playerSelection, computerSelection){
    switch(computerSelection){
        case "rock":
            if(playerSelection == "paper"){
                console.log("You Win! Paper beats Rock");
            } else if(playerSelection == "scissors"){
                console.log("You Lose! Rock beats Scissors");
            } else{
                console.log("You Tied!");
            }
            break;
        
        case "paper":
            if(playerSelection == "rock"){
                console.log("You Lose! Paper beats Rock");
            } else if(playerSelection == "scissors"){
                console.log("You Win! Scissors beats Paper");
            } else{
                console.log("You Tied!");
            }
            break;

        case "scissors":
            if(playerSelection == "paper"){
                console.log("You Lose! Scissors beats Paper");
            } else if(playerSelection == "rock"){
                console.log("You Win! Rock beats Scissors");
            } else{
                console.log("You Tied!");
            }
            break;
    }
}

let computerSelection = getComputerChoice();
let playerSelection = prompt("Please enter Rock, Paper, or Scissors to play:").toLowerCase();
playerSelection = inputValidation(playerSelection);
playGame(playerSelection, computerSelection);
