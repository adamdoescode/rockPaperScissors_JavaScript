
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
        writeToPage("not a valid number");
    }
}

function playRound() {
    // assumes player is left and computer is right
    const WIN_CONDITIONs = {};
    WIN_CONDITIONs["rockscissors"] = "player";
    WIN_CONDITIONs["scissorsrock"] = "computer";
    WIN_CONDITIONs["paperrock"] = "player";
    WIN_CONDITIONs["rockpaper"] = "computer";
    WIN_CONDITIONs["scissorspaper"] = "player";
    WIN_CONDITIONs["paperscissors"] = "computer";
    // takes player and computer input and returns winner
    computerChoice = translateChoice(getComputerChoice());
    // automate player choice while we debug
    playerChoice = translateChoice(getComputerChoice());
    let gameString = `${playerChoice}${computerChoice}`;
    if (WIN_CONDITIONs[gameString] == undefined) {
        writeToPage("draw");
        return null;
    } else {
        writeToPage(WIN_CONDITIONs[gameString]);
        return WIN_CONDITIONs[gameString];
    }
}

function checkForWinner(winsRecord) {
    if (winsRecord.filter(x => x=="player").length == 3) {
        console.log("player wins!");
        writeToPage("player wins!");
        return true;
    } else if (winsRecord.filter(x => x=="computer").length == 3) {
        console.log("computer wins!");
        writeToPage("computer wins!");
        return true;
    } else {
        console.log("No one has won yet! Play another round 🎲")
        writeToPage("No one has won yet! Play another round 🎲")
        return false;
    }
}

function init() {
    // clear all p tags inside div before playing a new game
    const gameDiv = document.getElementById("gamelog");
    while (gameDiv.hasChildNodes()) {
        gameDiv.removeChild(gameDiv.lastChild)
    }
    // run game
    let winCase = false;
    let wins = [];
    let computerChoice = null;
    let playerChoice = null;
    while (winCase == false) {
        // play round and add result to wins list
        wins.push(playRound());
        // check win case
        winCase = checkForWinner(wins);
    };
}

function writeToPage(textToWrite) {
    // writes messages to index.html page
    const newP = document.createElement("p");
    const newContent = document.createTextNode(textToWrite);
    newP.appendChild(newContent);
    // add to DOM
    const gameDiv = document.getElementById("gamelog");
    gameDiv.insertAdjacentElement("beforeend", newP);
}

// play on button click
// nevermind we can do this in the button itself 😅

// init();

