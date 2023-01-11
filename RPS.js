
// rock paper scissors

// assumes player is left and computer is right
const WIN_CONDITIONs = {};
WIN_CONDITIONs["rockscissors"] = "player";
WIN_CONDITIONs["scissorsrock"] = "computer";
WIN_CONDITIONs["paperrock"] = "player";
WIN_CONDITIONs["rockpaper"] = "computer";
WIN_CONDITIONs["scissorspaper"] = "player";
WIN_CONDITIONs["paperscissors"] = "computer";

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

function playRound() {
    // takes player and computer input and returns winner
    computerChoice = translateChoice(computerChoice());
    // automate player choice while we debug
    playerChoice = translateChoice(computerChoice());
    let gameString = `${playerChoice}${computerChoice}`;
    return WIN_CONDITIONs[gameString];
    // switch (true) {
    //     case (playerChoice==computerChoice):
    //         return "draw";
    //     case (gameString==""):
    //         return "computerWins";
    //     default:
    //         return "playerWins";
    // }
}

function init() {
    // run game
    let winCase = false;
    let wins = [];
    let computerChoice = null;
    let playerChoice = null;
    while (winCase == false) {
        // play round and add result to wins list
        wins.push(playRound());
    };
        // check win case
        if (wins.filter(x => x=="player")) {
            winCase = true;
            console.log("player wins!");
        } else if (wins.filter(x => x=="computer")) {
            winCase = true;
            console.log("computer wins!");
        } else {
            console.log("No one has won yet! Play another round 🎲")
        }
}

// play
init();
