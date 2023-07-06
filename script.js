function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  return computerChoice;
}

function playRound(computerChoice, playerChoice) {
  let playerChoiceStr = playerChoice.toLowerCase();
  let computerChoiceStr;

  if (computerChoice == 0) computerChoiceStr = "rock";
  else if (computerChoice == 1) computerChoiceStr = "scissor";
  else computerChoiceStr = "paper";

  if (playerChoiceStr == computerChoiceStr) return "Draw";
  else if (playerChoiceStr == "rock" && computerChoiceStr == "paper")
    return "You lose! Paper beats rock.";
  else if (playerChoiceStr == "paper" && computerChoiceStr == "scissor")
    return "You lose! Scissor beats paper.";
  else if (playerChoiceStr == "scissor" && computerChoiceStr == "rock")
    return "You lose! Rock beats scissor.";
  else if (computerChoiceStr == "rock" && playerChoiceStr == "paper")
    return "You win! Paper beats rock.";
  else if (computerChoiceStr == "paper" && playerChoiceStr == "scissor")
    return "You win! Scissor beats paper.";
  else if (computerChoiceStr == "scissor" && playerChoiceStr == "rock")
    return "You win! Rock beats scissor.";

  return "Invalid user input";
}

function play(rounds) {
  for (let i = 0; i < rounds; i++) {
    let playerChoice = prompt("Rock/paper/scissor?");
    let computerChoice = getComputerChoice();
    alert(playRound(computerChoice, playerChoice));
  }
}