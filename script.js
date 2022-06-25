
const choices = ['rock', 'paper', 'scissors'];
let computerChoice;

var button = document.getElementById('myButton');
function promptMe(button) {
    computerChoice = choices[Math.floor(Math.random()*choices.length)];

    const playerChoice = prompt("Choose 'Rock', 'Paper', or 'Scissors'").toLowerCase();
    if (playerChoice === computerChoice) {
        bootbox.alert(`You chose ${playerChoice}, and the computer chose ${computerChoice}, so it's a draw!`);
    } if (playerChoice === 'rock' && computerChoice === choices[1]) {
        alert(`You chose ${playerChoice}, the computer chose ${computerChoice}, so you lose.`);
    } if (playerChoice === 'rock' && computerChoice === choices[2]) {
        alert(`You chose ${playerChoice}, the computer chose ${computerChoice}, so you win!`);
    } 
    if (playerChoice === 'paper' && computerChoice === choices[2]) {
        alert(`You chose ${playerChoice}, the computer chose ${computerChoice}, so you lose.`);
    } if (playerChoice === 'paper' && computerChoice === choices[0]) {
        alert(`You chose ${playerChoice}, the computer chose ${computerChoice}, so you win!`);
    } 
    if (playerChoice === 'scissors' && computerChoice === choices[0]) {
        alert(`You chose ${playerChoice}, the computer chose ${computerChoice}, so you lose.`);
    } if (playerChoice === 'scissors' && computerChoice === choices[1]) {
        alert(`You chose ${playerChoice}, the computer chose ${computerChoice}, so you win!`);
    } 
};