function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice() {
  const input = prompt("Choose Rock, Paper, or Scissors");
  if (!input) return null; // Return null if canceled or empty
  
  const choice = input.toLowerCase().trim();
  if (choice === "scissors") {
    return "scissor";
  }
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let ties = 0;

  function playRound(computerChoice, humanChoice) {
    if (!humanChoice) {
      console.log("Round skipped (no valid input).");
      return;
    }

    if (computerChoice === humanChoice) {
      ties++;
      console.log(`It's a tie! Both chose ${humanChoice} (:`);
    } else if (
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissor" && computerChoice === "paper") ||
      (humanChoice === "rock" && computerChoice === "scissor")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}. He's too good!`);
    }
  }

  for (let i = 0; i < 5; i++) {
    const currentComputer = getComputerChoice();
    const currentHuman = getHumanChoice();
    
    // Stop the game loop if user cancels completely
    if (currentHuman === null) {
      console.log("Game canceled by user.");
      break;
    }
    
    playRound(currentComputer, currentHuman);
  }

  console.log(`Final Scores -> You: ${humanScore} | Computer: ${computerScore} | Ties: ${ties}`);
}

playGame();
