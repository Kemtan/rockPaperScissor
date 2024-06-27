/* Declaration */
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const displayResult = document.getElementById("displayResult");
const humanText = document.getElementById("humanText");
const computerText = document.getElementById("computerText");
const displayHumanScore = document.getElementById("humanScore");
const displayComputerScore = document.getElementById("ComputerScore");

let humanScore = 0;
let computerScore = 0;

/* Get Computer Choice */
let getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);
    
    switch(random){
        case 0:
            //console.log(`computer: rock`);
            computerText.textContent = "Computer: Rock";
            return 'rock';
            break;
        case 1:
            //console.log(`computer: paper`);
            computerText.textContent = "Computer: Paper";
            return 'paper';
            break;
        case 2:
            //console.log(`computer: scissors`);
            computerText.textContent = "Computer: Scissors";
            return 'scissors';
            break;
        default:
            console.error(`ERROR: Random Switch`)
    }
}

/* Game */
let playGame = (computerChoice, humanChoice) => {

    switch(true){
        case computerChoice === humanChoice:
            //console.log(`draw`);
            displayResult.textContent = "Draw!";
            humanScore++;
            computerScore++;
            displayScore();
            break;
        case computerChoice === "rock" && humanChoice === "paper":
            //console.log(`computer win!`);
            displayResult.textContent = "Computer Win!";
            computerScore++;
            displayScore();
            break;
        case computerChoice === "rock" && humanChoice === "scissors":
            //console.log(`human win!`);
            displayResult.textContent = "Human win!";
            humanScore++;
            displayScore();
            break;
        case computerChoice === "paper" && humanChoice === "rock":
            //console.log(`computer win!`);
            displayResult.textContent = "Computer win!";
            computerScore++;
            displayScore();
            break;
        case computerChoice === "paper" && humanChoice === "scissors":
            //console.log(`human win!`);
            displayResult.textContent = "Human win!";
            humanScore++;
            displayScore();
            break;
        case computerChoice === "scissors" && humanChoice === "rock":
            //console.log(`human win!`);
            displayResult.textContent = "Human Win!";
            humanScore++;
            displayScore();
            break;
        case computerChoice === "scissors" && humanChoice === "paper":
            //console.log(`computer win!`);
            displayResult.textContent = "Computer Win!";
            computerScore++;
            displayScore();
            break;
        default:
            console.error(`ERROR: playRound Switch`)
    }

    // Win or Lose
    if (humanScore >= 5 || computerScore >= 5){
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
    }
}

/* Get Human Choice */
rockBtn.onclick = () => {
    rockBtn.value = 'rock';
    //console.log(`human: ${rockBtn.value}`);
    humanText.textContent = "Human: Rock";
    playGame(getComputerChoice(), rockBtn.value);
}
paperBtn.onclick = () => {
    paperBtn.value = 'paper';
    //console.log(`human: ${paperBtn.value}`);
    humanText.textContent = "Human: Paper";
    playGame(getComputerChoice(), paperBtn.value);
}
scissorsBtn.onclick = () => {
    scissorsBtn.value = 'scissors';
    //console.log(`human: ${scissorsBtn.value}`);
    humanText.textContent = "Human: Scissors";
    playGame(getComputerChoice(), scissorsBtn.value);
}

/* Display Score */
let displayScore = () => {
    displayHumanScore.textContent = `${humanScore}`;
    displayComputerScore.textContent = `${computerScore}`;
}