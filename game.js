
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

function getWinner(userOutcome, npcOutcome) {

    let outcomesDict = {"Rock": {"Rock": "tie", "Paper": "npc", "Scissors":"user"},
                    "Paper": {"Rock": "user", "Paper":"tie", "Scissors":"npc"},
                    "Scissors": {"Rock":"npc", "Paper":"user", "Scissors":"tie"}
                };
    return outcomesDict[userOutcome][npcOutcome];
}


function playRound() {
    let npcOutcome = npcPlay();
    let userOutcome = userPlay();
    console.log(`USER: ${userOutcome} \t NPC: ${npcOutcome} `);
    let winner = getWinner(userOutcome, npcOutcome);
    return winner

}

function main() {
    let victoryCounts = {"user":0, "npc":0};
    let winner;
    while (victoryCounts["user"] < 2 && victoryCounts["npc"] < 2) {
        winner =  playRound();
        victoryCounts[winner]++
        console.log(`WINNER: ${winner}`);
        console.log(`SCORES: ${victoryCounts["user"]} ${victoryCounts["npc"]}`);
    
        console.log("\n##############")
    }
    alert(`${winner} WINS!!!!!`)
    
}

main()