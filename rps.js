//this is the javascript of a rock paper scissors game.
//step one is to create a function for the computer opponent.
//this function will randomly choose either rock paper or scissors.
//step two is to ask the user for their choice.
//step three is a function that will take the previous functions
//and decide who wins and keep score

let wins = 0;
let losses = 0;
let results = " ";

//function game - takes playRound and runs it 5 times in while loop.
//also adds up wins and losses.
//was originally a return statement but in order to tally results
//changed it to an alert
function game() {
    
    let i = 0;
    while(i < 5) {
        playRound(computerPlay(), playerPlay());
        if (results === "Computer wins!  Rock beats Scissors." || results === "Computer wins!  Paper covers Rock." || results === "Computer wins!  Scissors cut Paper.") {
            losses = losses + 1;
        }else if (results === "You win!  Rock beats Scissors." || results === "You win!  Paper covers Rock." || results === "You win!  Scissors cut Paper.") {
            wins = wins + 1;
        }
        i = i + 1;
    }
    alert("You won " + wins + " times and lost " + losses + " times.")
}

//function playRound - code that decides who wins using if and else if
//takes 2 arguments which are also functions described below
function playRound (computerSelection, playerSelection) {
    
    if (computerSelection === "Rock" && playerSelection === "Scissors") {
        losses = losses + 1;
        results = alert( "Computer wins!  Rock beats Scissors.");
    }else if (computerSelection === "Paper" && playerSelection === "Rock") {
        losses = losses + 1;
        results = alert("Computer wins!  Paper covers Rock.");
    }else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        losses = losses + 1;
        results = alert("Computer wins!  Scissors cut Paper.");
    }else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        wins = wins + 1;
        results = alert("You win!  Rock beats Scissors.");
    }else if (computerSelection === "Rock" && playerSelection === "Paper") {
        wins = wins + 1;
        results = alert("You win!  Paper covers Rock.");
    }else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        wins = wins + 1;
        results = alert("You win!  Scissors cut Paper.");
    }else if (computerSelection === "Rock" && playerSelection === "Rock") {
        results = alert("Nobody wins!  You both picked Rock.");
    }else if (computerSelection === "Paper" && playerSelection === "Paper") {
        results = alert("Nobody wins!  You both picked Paper.");
    }else if (computerSelection === "Scissors" && playerSelection === "Scissors") {
        results = alert("Nobody wins!  You both picked Scissors.");
        }    
    }

//randomizes computers turn (rock, paper, or scissors)
    function computerPlay() {
    let computer = Math.floor(Math.random()*3);
    
    if (computer === 0) {
        return "Rock"; 
    } else if (computer === 1) {
        return "Paper";
    } else  {
        return "Scissors";
    }
}

//function playerPlay prompts player for move and returns the choice.
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

game();
//const playerSelection = "players input r/p/s";
//const playerSelection = playerPlay();

//const computerSelection = computerPlay();
//const computerSelection = computerPlay();

