"use strict";
(function main() {
  let playerScore = 0;
  let computerScore = 0;
  let computerGeneratedChoice = "";
  let playerWin = false;
  let computerWin = false;
  let isDraw = false;

  function startGame(elements) {
    Array.from(document.getElementsByClassName("hidden-img")).forEach((img) => {
      img.classList.remove("hidden-img");
    });
    elements.rockButton.style.display = "block";
    elements.paperButton.style.display = "block";
    elements.scissorsButton.style.display = "block";
    elements.playButton.style.display = "none";
    elements.gameTitle.textContent = "Choose an option";
    elements.computerImage.classList.remove("computer-image");
    elements.computerImage.style.display = "block";
  }

  function rockButtonFunction(elements) {
    elements.playerImage.src = "assets/rock.png";
    generateComputerChoice(elements);
    let playerChoice = "rock";
    if (playerChoice === computerGeneratedChoice) {
      elements.gameTitle.textContent = "Draw!";
      isDraw = true;
    } else if (computerGeneratedChoice === "paper") {
      elements.gameTitle.textContent = "Computer Wins!";
      computerWin = true;
    } else {
      elements.gameTitle.textContent = "Player Wins!";
      playerWin = true;
    }
  }

  function paperButtonFunction(elements) {
    generateComputerChoice(elements);
    elements.playerImage.src = "assets/paper.png";
    let playerChoice = "paper";
    if (playerChoice === computerGeneratedChoice) {
      elements.gameTitle.textContent = "Draw!";
      isDraw = true;
    } else if (computerGeneratedChoice === "rock") {
      elements.gameTitle.textContent = "Player Wins!";
      playerWin = true;
    } else {
      elements.gameTitle.textContent = "Computer Wins!";
      computerWin = true;
    }
  }

  function scissorsButtonFunction(elements) {
    elements.playerImage.src = "assets/scissors.png";
    generateComputerChoice(elements);
    let playerChoice = "scissors";
    if (playerChoice === computerGeneratedChoice) {
      elements.gameTitle.textContent = "Draw!";
      isDraw = true;
    } else if (computerGeneratedChoice === "rock") {
      elements.gameTitle.textContent = "Computer Wins!";
      computerWin = true;
    } else {
      elements.gameTitle.textContent = "Player Wins!";
      playerWin = true;
    }
  }

  function scoreUpdate(elements) {
    if (playerWin) {
      playerScore++;
      elements.pScore.textContent = playerScore;
    } else if (computerWin) {
      computerScore++;
      elements.cScore.textContent = computerScore;
    }
    playerWin = false;
    computerWin = false;
    isDraw = false;
  }

  function generateComputerChoice(elements) {
    let numberDefiningChoice = Math.floor(Math.random() * 3) + 1;
    if (numberDefiningChoice === 1) {
      computerGeneratedChoice = "rock";
      elements.computerImage.src = "assets/rock.png";
    } else if (numberDefiningChoice === 2) {
      computerGeneratedChoice = "paper";
      elements.computerImage.src = "assets/paper.png";
    } else {
      computerGeneratedChoice = "scissors";
      elements.computerImage.src = "assets/scissors.png";
    }
    return computerGeneratedChoice;
  }

  function eventHandling(elements) {
    elements.playButton.addEventListener("click", () => {
      startGame(elements);
    });

    elements.rockButton.addEventListener("click", () => {
      rockButtonFunction(elements);
      scoreUpdate(elements);
    });

    elements.paperButton.addEventListener("click", () => {
      paperButtonFunction(elements);
      scoreUpdate(elements);
    });

    elements.scissorsButton.addEventListener("click", () => {
      scissorsButtonFunction(elements);
      scoreUpdate(elements);
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
    const computerImage = document.getElementById("computerImage");
    const playerImage = document.getElementById("playerImage");

    return {
      playButton,
      gameTitle,
      rockButton,
      paperButton,
      scissorsButton,
      pScore,
      cScore,
      playerImage,
      computerImage,
    };
  }

  eventHandling(getElements());
})();
