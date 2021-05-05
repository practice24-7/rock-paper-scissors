//this is the javascript of a rock paper scissors game.
//step one is to create a function for the computer opponent.
//this function will randomly choose either rock paper or scissors.
//step two is to ask the user for their choice.
//step three is a function that will take the previous functions
//and decide who wins

//function playRound(playerSelection, computerSelection) {
    //code decides who wins
//}
function computerPlay() {
    //randomizes computers turn (rock, paper, or scissors)
    let computer = Math.floor(Math.random()*3);
    
    if (computer === 0) {
        return "Rock"; 
    } else if (computer === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

//function playerPlay prompts player for move.
//saves move in variable

function playerPlay() {
    let player = prompt("Let's play Rock, Paper, Scissors!  Enter your choice: ")
    if (player === "rock" || player === "Rock" || player === "ROCK") {
        return "Rock";
    } else if (player === "paper" || player === "Paper" || player === "PAPER") {
        return "Paper";
    } else if (player === "paper" || player === "Paper" || player === "PAPER") {
        return "Scissors";
    } else {
        return alert("Please try again and be sure to type rock, paper, or scissors.")
    }
}


//const playerSelection = "players input r/p/s";
playerSelection = playerPlay();
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));