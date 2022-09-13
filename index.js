// computer choice

function computerChoice(){
    let choice = ["rock", "paper", "scissors"];
    return(choice[Math.floor(Math.random()*3)])
}

// one round of the game

function playRound(playerSelection, computerSelection){
    if(playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper covers Rock"
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors cuts Paper"
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats Scissors"
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You Lose! Scissors cuts Paper"
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper covers Rock"
    }
    if(playerSelection === "scissors" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissors"
    }
    else{
        return "Draw"
    }
}
