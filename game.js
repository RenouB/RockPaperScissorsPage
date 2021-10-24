


function randomChoice(ary) {
    return ary[Math.floor(Math.random() * ary.length)];
}

function npcPlay() {
    return randomChoice(["Rock", "Paper", "Scissors"]);
}

function getUserInput() {
    return prompt("Choose: \t 1. Rock \t 2. Paper \t 3. Scissors");
}

function checkInput(input) {
    if ((input >= 1) && (input <=3)) {
        
        return true;
    } 
    else {
        alert("Invalid input! Try again");
        return false;
    }
}

function userPlay() {
    choices = ["Rock", "Paper", "Scissors"];
    let validInput = false;
    let input;
    while (!validInput) {
        input = getUserInput();
        validInput = checkInput(input);
    }
    return choices[input-1];
}

function getWinner(userSelection, npcSelection) {

    let outcomesDict = {"Rock": {"Rock": "tie", "Paper": "npc", "Scissors":"user"},
                    "Paper": {"Rock": "user", "Paper":"tie", "Scissors":"npc"},
                    "Scissors": {"Rock":"npc", "Paper":"user", "Scissors":"tie"}
                };
    return outcomesDict[userSelection][npcSelection];
}

function updatePics(userSelection, npcSelection) {
    let userPic = document.querySelector(".pic.user");
    let npcPic = document.querySelector(".pic.npc");

    userPic.src = `images/user_${userSelection.toLowerCase()}.png`
    npcPic.src = `images/npc_${npcSelection.toLowerCase()}.png`

}

function updateScores(victoryCounts) {
    let userScore = document.getElementById("user-score");
    let npcScore = document.getElementById("npc-score");
    console.log(victoryCounts)
    userScore.textContent = victoryCounts["user"].toString();
    npcScore.textContent = victoryCounts["npc"].toString();
    return
}

function updateText(winner) {
    let text = document.querySelector(".winner-text")
    if (winner == "user") {text.textContent = "User wins! :)"; text.style.color=USERCOLOR;}
    else if (winner == "npc"){text.textContent = "NPC wins :("; text.style.color=NPCCOLOR;}
    else {text.textContent = "TIE! :/"; text.style.color="black";}
    return
}
function playRound(userSelection, victoryCounts) {
    console.log("##", victoryCounts)
    let npcSelection = npcPlay();
    let winner = getWinner(userSelection, npcSelection);
    victoryCounts[winner]++;
    updatePics(userSelection, npcSelection)
    updateText(winner);
    updateScores(victoryCounts);


    return winner, victoryCounts

}

function main() {
    const MAXWINS = 2;

    let victoryCounts = {"user":0, "npc":0};
    let winner;
    let userSelection;
    let rockButton = document.getElementById("rock-button");
    let paperButton = document.getElementById("paper-button");
    let scissorsButton = document.getElementById("scissors-button");


    rockButton.addEventListener('click', () => {
        playRound("Rock", victoryCounts);});
    paperButton.addEventListener('click', () => {
        playRound("Paper", victoryCounts);});
    scissorsButton.addEventListener('click', () => {
        playRound("Scissors", victoryCounts);});
            
        
    return
}

const NPCCOLOR="#d40000";
const USERCOLOR="#008000";
main()