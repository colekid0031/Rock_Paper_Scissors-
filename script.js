// Getting computer answer as Number 1 2 or 3
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  let Choice = "";

  if (randomNum === 1) {
    Choice = "Rock";
  } else if (randomNum === 2) {
    Choice = "Paper";
  } else if (randomNum === 3) {
    Choice = "Scissor";
  }
  return Choice.toLowerCase();
}

function getHumanChoice() {
  let input = prompt("Choose Rock, Paper, or Scissors");
  
  // Guard clause in case user clicks 'Cancel'
  if (!input) return ""; 
  
  let Choice = input.toLowerCase();

  // Fix typo and directly return the string value
  if (Choice === "scissors") {
    return "scissor";
  }
  return Choice;
}

function playGame() {
  let HumanScore = 0;
  let ComputerScore = 0;
  let tie = 0;

  // Evaluate who Wins and log points
  function playRound(ComputerChoice, HumanChoice) {
    if (ComputerChoice === "rock" && HumanChoice === "paper") {
      HumanScore++;
      console.log(`you win ${HumanChoice} beats ${ComputerChoice}`);
    } else if (ComputerChoice === "paper" && HumanChoice === "scissor") {
      HumanScore++;
      console.log(`you win ${HumanChoice} beats ${ComputerChoice}`);
    } else if (ComputerChoice === "scissor" && HumanChoice === "rock") {
      HumanScore++;
      console.log(`you win ${HumanChoice} beats ${ComputerChoice}`);
    } else if (ComputerChoice === "paper" && HumanChoice === "rock") {
      ComputerScore++;
      console.log(`you lose ${ComputerChoice} beats ${HumanChoice} He's too Good`);
    } else if (ComputerChoice === "rock" && HumanChoice === "scissor") {
      ComputerScore++;
      console.log(`you lose ${ComputerChoice} beats ${HumanChoice} He's too Good`);
    } else if (ComputerChoice === "scissor" && HumanChoice === "paper") {
      ComputerScore++;
      console.log(`you lose ${ComputerChoice} beats ${HumanChoice} He's too Good`);
    } else {
      tie++;
      console.log(`you tie ${ComputerChoice} ${HumanChoice} (:`);
    }
  }

  // Play 5 distinct rounds by getting new choices each time
  for (let i = 0; i < 5; i++) {
    let currentComputer = getComputerChoice();
    let currentHuman = getHumanChoice();
    playRound(currentComputer, currentHuman);
  }
  
  // Log the final scores at the end of the game
  console.log(`Final Scores -> You: ${HumanScore} | Computer: ${ComputerScore} | Ties: ${tie}`);
}

playGame();
