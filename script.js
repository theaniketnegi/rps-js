function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  let computerChoiceStr;

  if (computerChoice === 0) computerChoiceStr = "rock";
  else if (computerChoice === 1) computerChoiceStr = "paper";
  else computerChoiceStr = "scissors";

  return computerChoiceStr;
}

let playerScore = 0;
let cpuScore = 0;
let gameOver = false;
function playRound(computerChoice, playerChoice) {
  if (playerChoice == computerChoice) return "draw";
  else if (playerChoice == "rock" && computerChoice == "paper") {
    cpuScore++;
    return "you lose! paper beats rock.";
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    cpuScore++;
    return "you lose! scissors beats paper.";
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    cpuScore++;
    return "you lose! rock beats scissors.";
  } else if (computerChoice == "rock" && playerChoice == "paper") {
    playerScore++;
    return "you win! paper beats rock.";
  } else if (computerChoice == "paper" && playerChoice == "scissors") {
    playerScore++;
    return "you win! scissors beats paper.";
  } else if (computerChoice == "scissors" && playerChoice == "rock") {
    playerScore++;
    return "you win! rock beats scissors.";
  }
}

const playerBtns = document.querySelectorAll(".choice");
const cpuSelection = document.getElementById("cpu-selection");

const comments = document.getElementById("comments");
const initCommentText = comments.textContent;

const playerScoreText = document.getElementById("player-score");
const cpuScoreText = document.getElementById("cpu-score");

const resetBtn = document.getElementById('reset');

playerBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!gameOver) {
      const playerChoice = e.target.dataset.choice;
      const compChoice = getComputerChoice();
      cpuSelection.textContent = compChoice;
      comments.textContent = playRound(compChoice, playerChoice);
      cpuScoreText.textContent = cpuScore;
      playerScoreText.textContent = playerScore;

      if (playerScore >= 5) {
        comments.textContent = "player won!";
        gameOver = true;
      } else if (cpuScore >= 5) {
        comments.textContent = "cpu won!";
        gameOver = true;
      }
    }
    else{
      comments.textContent="reset to play again!";
    }
  });
});
resetBtn.addEventListener('click',()=>{
  playerScore = 0;
  cpuScore = 0;
  playerScoreText.textContent=playerScore;
  cpuScoreText.textContent=cpuScore;
  comments.textContent=initCommentText;
  gameOver=false;
})