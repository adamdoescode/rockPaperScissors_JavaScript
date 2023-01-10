
// rock paper scissors

function getComputerChoice() {
    // taken from mdn web docs
    // int from 0 to 2
    // we use floor to turn the float from Math.random into an int
    let min = 0;
    let max = 2;
    const num = Math.floor(Math.random() * (max-min+1) + min);
    return num;
}

function translateChoice(num) {
    // a function that translate the int to a string for easier comprehension
    // hashtable {0: rock, 1: paper, 2: scissors}
    let rpsOptions = {};
    rpsOptions[0] = 'rock';
    rpsOptions[1] = 'paper';
    rpsOptions[2] = 'scissors';
    // return value
    if (num in [0,1,2]) {
        return rpsOptions[num];
    } else {
        console.log("not a valid number");
    }
}

// function playRound() {
//     // play one round
// }

function init() {
    // run game
    let winCase = false;
    let computerChoice = null;
    let playerChoice = null;
    while (winCase == false) {
        computerChoice = translateChoice(computerChoice());
        // automate player choice while we debug
        playerChoice = translateChoice(computerChoice())
        winCase = true;
    }
}

console.log(
    translateChoice(
        getComputerChoice()
    )
);
