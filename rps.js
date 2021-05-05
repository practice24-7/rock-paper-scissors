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
//const playerSelection = "players input r/p/s";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));