// computer choice

function computerChoice(){
    let choice = ["rock", "paper", "scissors"];
    return(choice[Math.floor(Math.random()*3)])
}

// one round of the game

let playRound = function(playerSelection, computerSelection){
    if(playerSelection === "paper" && computerSelection === "rock"){
        return [true, "You win! Paper covers Rock"] //return an array so that i can use boolean value for 
    }                                               // determine the winner
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

function game(){
    let user = 0;
    let comp = 0;

    for (let i = 0; i<5; i++){
        let playerSelection = (prompt("what do you choose? Rock, Paper of Scissors")).toLocaleLowerCase();
        let result = playRound(playerSelection, computerChoice()) // the result of the function is stored in the varialble
        console.log(result[1]);                                  // so that it can be used to display the result and also 
        if(result[0]){                                            // in the if statement
            user+=1;
        }
        else if(result[0] === false){
            comp+=1;
        }
        
    }
    return `Game over, you won ${user} times and computer won ${comp} time(s)`
}

console.log(game())
