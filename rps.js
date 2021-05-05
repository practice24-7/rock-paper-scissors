//this is the javascript of a rock paper scissors game.
//step one is to create a function for the computer opponent.
//this function will randomly choose either rock paper or scissors.
//step two is to ask the user for their choice.
//step three is a function that will take the previous functions
//and decide who wins

//function score - tallies if you win or the computer (ignores ties)

function score() {

    return "You won " + wins + " times and the computer won " + losses + " times and there were " + ties + " ties."
}

wins = 0;
losses = 0;
ties = 0;

//function game - takes playRound and runs it 5 times.
function game() {

    let i = 0;
    while(i < 5) {
        playRound(computerPlay(), playerPlay());
        i = i + 1;
    }
    return "You won " + wins + " times and the computer won " + machine + " times and there were " + ties + " ties."
}

//function playRound - code that decides who wins
function playRound (computerSelection, playerSelection) {
    
    if (computerSelection === "Rock" && playerSelection === "Scissors") {
        losses = losses +1;
        return "Computer wins!  Rock beats Scissors.";
    }else if (computerSelection === "Paper" && playerSelection === "Rock") {
        losses = losses + 1;
        return "Computer wins!  Paper covers Rock.";
    }else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        losses = losses + 1;
        return "Computer wins!  Scissors cut Paper.";
    }else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        wins = wins + 1;
        return "You win!  Rock beats Scissors.";
    }else if (computerSelection === "Rock" && playerSelection === "Paper") {
        wins = wins + 1;
        return "You win!  Paper covers Rock.";
    }else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        wins = wins + 1;
        return "You win!  Scissors cut Paper.";
    }else if (computerSelection === "Rock" && playerSelection === "Rock") {
        ties = ties + 1;
        return "Nobody wins!  You both picked Rock.";
    }else if (computerSelection === "Paper" && playerSelection === "Paper") {
        ties = ties + 1;
        return "Nobody wins!  You both picked Paper.";
    }else if (computerSelection === "Paper" && playerSelection === "Paper"){
        ties = ties+ 1;
        return "Nobody wins!  You both picked Scissors.";
        }    
    }

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
    } else if (player === "scissors" || player === "Scissors" || player === "SCISSORS") {
        return "Scissors";
    } else {
        return alert("Please try again and be sure to type rock, paper, or scissors.")
    }
}


//const playerSelection = "players input r/p/s";
//const playerSelection = playerPlay();

//const computerSelection = computerPlay();
//const computerSelection = computerPlay();

