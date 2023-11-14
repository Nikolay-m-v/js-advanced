"use strict";
(function main() {
  let playerScore = 0;
  let computerScore = 0;

  let computerChoice = ""; // "rock", "paper", "scissors"
  let playerChoice = ""; // "rock", "paper", "scissors"

  let winner = ""; // "player" or "computer" or "draw"

  function renameTitle(elements) {
    elements.gameTitle.textContent = "Choose an option";
  }

  function hidePlayButton(elements) {
    elements.playButton.style.display = "none";
  }

  function updateChoiceImage(choiceElement, choice) {
    choiceElement.src = `assets/${choice}.png`;
  }

  function showChoices(elements) {
    const elementsToShow = [
      elements.computerChoiceImage,
      elements.playerChoiceImage,
      elements.rockButton,
      elements.paperButton,
      elements.scissorsButton,
    ];

    elementsToShow.forEach((element) => {
      element.classList.remove("hidden");
    });
  }

  function startGame(elements) {
    renameTitle(elements);
    hidePlayButton(elements);
    showChoices(elements);
  }

  function battleRockPaper(playerChoice, computerChoice) {
    if (playerChoice === "paper" && computerChoice === "rock") {
      return "player";
    }

    if (playerChoice === "rock" && computerChoice === "paper") {
      return "computer";
    }
  }

  function battleRockScissors(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors") {
      return "player";
    }

    if (playerChoice === "scissors" && computerChoice === "rock") {
      return "computer";
    }
  }

  function battleScissorsPaper(playerChoice, computerChoice) {
    if (playerChoice === "scissors" && computerChoice === "paper") {
      return "player";
    }

    if (playerChoice === "paper" && computerChoice === "scissors") {
      return "computer";
    }
  }

  function determineOutcome() {
    if (playerChoice === computerChoice) {
      winner = "draw";

      return;
    }

    if (
      (playerChoice === "rock" || playerChoice === "paper") &&
      (computerChoice === "rock" || computerChoice == "paper")
    ) {
      winner = battleRockPaper(playerChoice, computerChoice);
      return;
    }

    if (
      (playerChoice === "rock" || playerChoice === "scissors") &&
      (computerChoice === "rock" || computerChoice == "scissors")
    ) {
      winner = battleRockScissors(playerChoice, computerChoice);
      return;
    }

    if (
      (playerChoice === "paper" || playerChoice === "scissors") &&
      (computerChoice === "scissors" || computerChoice == "paper")
    ) {
      winner = battleScissorsPaper(playerChoice, computerChoice);
      return;
    }
  }

  function handleRockChoice(elements) {
    playerChoice = "rock";

    updateChoiceImage(elements.playerChoiceImage, "rock");
  }

  function handlePaperChoice(elements) {
    playerChoice = "paper";

    updateChoiceImage(elements.playerChoiceImage, "paper");
  }

  function handleScissorsChoice(elements) {
    playerChoice = "scissors";

    updateChoiceImage(elements.playerChoiceImage, "scissors");
  }

  function resetWinner(elements) {
    winner = "";
  }

  function upatePlayerScore(elements) {
    playerScore++;
    elements.pScore.textContent = playerScore;
  }

  function updateComputerScore(elements) {
    computerScore++;
    elements.cScore.textContent = computerScore;
  }

  function updateScore(elements) {
    if (winner === "player") {
      upatePlayerScore(elements);
    } else if (winner === "computer") {
      updateComputerScore(elements);
    }

    resetWinner(elements);
  }

  function showResults(elements) {
    if (winner === "draw") {
      elements.gameTitle.textContent = "Draw!";
    } else if (winner === "computer") {
      elements.gameTitle.textContent = "Computer Wins!";
    } else {
      elements.gameTitle.textContent = "Player Wins!";
    }
  }

  function play(elements) {
    generateComputerChoice(elements);
    determineOutcome();
    showResults(elements);
    updateScore(elements);
  }

  function generateComputerChoice(elements) {
    let numberDefiningChoice = Math.floor(Math.random() * 3) + 1;

    if (numberDefiningChoice === 1) {
      computerChoice = "rock";

      updateChoiceImage(elements.computerChoiceImage, "rock");
    } else if (numberDefiningChoice === 2) {
      computerChoice = "paper";

      updateChoiceImage(elements.computerChoiceImage, "paper");
    } else {
      computerChoice = "scissors";

      updateChoiceImage(elements.computerChoiceImage, "scissors");
    }
  }

  function eventHandling(elements) {
    elements.playButton.addEventListener("click", () => {
      startGame(elements);
    });

    elements.rockButton.addEventListener("click", () => {
      handleRockChoice(elements);
      play(elements);
    });

    elements.paperButton.addEventListener("click", () => {
      handlePaperChoice(elements);
      play(elements);
    });

    elements.scissorsButton.addEventListener("click", () => {
      handleScissorsChoice(elements);
      play(elements);
    });
  }

  function getElements() {
    const playButton = document.getElementById("play");
    const gameTitle = document.getElementById("gameTitle");
    const rockButton = document.getElementById("rockChoice");
    const paperButton = document.getElementById("paperChoice");
    const scissorsButton = document.getElementById("scissorsChoice");
    const pScore = document.getElementById("playerScore");
    const cScore = document.getElementById("computerScore");
    const computerChoiceImage = document.getElementById("computerChoiceImage");
    const playerChoiceImage = document.getElementById("playerChoiceImage");

    return {
      playButton,
      gameTitle,
      rockButton,
      paperButton,
      scissorsButton,
      pScore,
      cScore,
      playerChoiceImage,
      computerChoiceImage,
    };
  }

  eventHandling(getElements());
})();
