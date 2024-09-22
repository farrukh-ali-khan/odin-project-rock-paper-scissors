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

const playRound = (humanChoice, computerChoice, scores) => {
  const outcomes = {
    tie: "It's a tie!",
    win: `You win! ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    } beats ${computerChoice}.`,
    lose: `You lose! ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice}.`,
  };

  const result =
    humanChoice === computerChoice
      ? (scores.tieScore++, outcomes.tie)
      : (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
      ? (scores.humanScore++, outcomes.win)
      : (scores.computerScore++, outcomes.lose);

  alert(result);
};

const playGame = () => {
  let scores = { humanScore: 0, computerScore: 0, tieScore: 0 };

  Array.from({ length: 5 }).forEach(() =>
    playRound(getHumanChoice(), getComputerChoice(), scores)
  );

  alert(
    `Final Score - You: ${scores.humanScore}, Computer: ${scores.computerScore}, Ties: ${scores.tieScore}`
  );

  if (confirm("Do you want to play again?")) {
    playGame();
  }
};

playGame();
