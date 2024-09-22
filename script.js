const getComputerChoice = () =>
  ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

const getHumanChoice = () => {
  let choice;
  do {
    choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (!["rock", "paper", "scissors"].includes(choice)) {
      alert("Invalid input. Please enter rock, paper, or scissors.");
    }
  } while (!["rock", "paper", "scissors"].includes(choice));
  return choice;
};

const updateScoreDisplay = (scores) => {
  document.getElementById("humanScore").textContent = scores.humanScore;
  document.getElementById("computerScore").textContent = scores.computerScore;
  document.getElementById("tieScore").textContent = scores.tieScore;
};

const displayFinalMessage = (scores) => {
  const message = `Final Score - You: ${scores.humanScore}, Computer: ${scores.computerScore}, Ties: ${scores.tieScore}`;
  document.getElementById("finalMessage").textContent = message;
};

const playRound = (humanChoice, computerChoice, scores) => {
  if (humanChoice === computerChoice) {
    scores.tieScore++;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    scores.humanScore++;
  } else {
    scores.computerScore++;
  }

  updateScoreDisplay(scores);
};

const playGame = () => {
  let scores = { humanScore: 0, computerScore: 0, tieScore: 0 };

  Array.from({ length: 5 }).forEach(() => {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice, scores);
  });

  displayFinalMessage(scores);

  // Reset scores and update display for the next game
  scores = { humanScore: 0, computerScore: 0, tieScore: 0 };
};

document.getElementById("yesButton").addEventListener("click", playGame);
document.getElementById("noButton").addEventListener("click", () => {
  alert("Thanks for visiting! Goodbye!");
});
