// computer choice

function computerChoice(){
    let choice = ["rock", "paper", "scissors"];
    return(choice[Math.floor(Math.random()*3)])
}

// one round of the game

let playRound = function(playerSelection, computerSelection){
    if(playerSelection === "paper" && computerSelection === "rock"){
        return [tue, "You win! Paper covers Rock"]
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return [true, "You win! Scissors cuts Paper"]
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return [true, "You win! Rock beats Scissors"]
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return [false, "You Lose! Scissors cuts Paper"]
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return [false, "You Lose! Paper covers Rock"]
    }
    if(playerSelection === "scissors" && computerSelection === "rock"){
        return [false, "You Lose! Rock beats Scissors"]
    }
    else{
        return [null, "Draw"]
    }
}


for (let i = 0; i<5; i++){
    let playerSelection = (prompt("what do you choose? Rock, Paper of Scissors")).toLocaleLowerCase();
    console.log(playRound(playerSelection, computerChoice()));
    
}