"use strict";
(function main() {
  let playerScore = 0;
  let computerScore = 0;
  let computerGeneratedChoice = "";
  let playerWin = false;
  let computerWin = false;
  let isDraw = false;

  const pScore = document.getElementsByClassName("player-points");
  const cScore = document.getElementsByClassName("computer-points");

  function playButtonFunction(elements) {
    elements.imagesArray.forEach((img) => {
      img.classList.remove("hidden-img");
    });
    elements.rockButton[0].style.display = "block";
    elements.paperButton[0].style.display = "block";
    elements.scissorsButton[0].style.display = "block";
    elements.playButton.style.display = "none";
    elements.titleAnnouncer[0].textContent = "Choose an option";
    elements.computerStartingImage[0].style.display = "block";
  }

  function rockButtonFunction(elements) {
    elements.chosenPlayerImage[0].src = "assets/rock.png";
    generateComputerChoice(elements);
    let playerChoice = "rock";
    if (playerChoice === computerGeneratedChoice) {
      elements.titleAnnouncer[0].textContent = "Draw!";
      isDraw = true;
    } else if (computerGeneratedChoice === "paper") {
      elements.titleAnnouncer[0].textContent = "Computer Wins!";
      computerWin = true;
    } else {
      elements.titleAnnouncer[0].textContent = "Player Wins!";
      playerWin = true;
    }
  }

  function paperButtonFunction(elements) {
    generateComputerChoice(elements);
    elements.chosenPlayerImage[0].src = "assets/paper.png";
    let playerChoice = "paper";
    if (playerChoice === computerGeneratedChoice) {
      elements.titleAnnouncer[0].textContent = "Draw!";
      isDraw = true;
    } else if (computerGeneratedChoice === "rock") {
      elements.titleAnnouncer[0].textContent = "Player Wins!";
      playerWin = true;
    } else {
      elements.titleAnnouncer[0].textContent = "Computer Wins!";
      computerWin = true;
    }
  }

  function scissorsButtonFunction(elements) {
    elements.chosenPlayerImage[0].src = "assets/scissors.png";
    generateComputerChoice(elements);
    let playerChoice = "scissors";
    if (playerChoice === computerGeneratedChoice) {
      elements.titleAnnouncer[0].textContent = "Draw!";
      isDraw = true;
    } else if (computerGeneratedChoice === "rock") {
      elements.titleAnnouncer[0].textContent = "Computer Wins!";
      computerWin = true;
    } else {
      elements.titleAnnouncer[0].textContent = "Player Wins!";
      playerWin = true;
    }
  }

  function scoreUpdate() {
    if (playerWin) {
      playerScore++;
      pScore[0].textContent = playerScore;
    } else if (computerWin) {
      computerScore++;
      cScore[0].textContent = computerScore;
    } else if (isDraw) {
      return;
    }
    playerWin = false;
    computerWin = false;
    isDraw = false;
  }

  function generateComputerChoice(elements) {
    let numberDefiningChoice = Math.floor(Math.random() * 3) + 1;
    if (numberDefiningChoice === 1) {
      computerGeneratedChoice = "rock";
      elements.computerImage[0].src = "assets/rock.png";
    } else if (numberDefiningChoice === 2) {
      computerGeneratedChoice = "paper";
      elements.computerImage[0].src = "assets/paper.png";
    } else {
      computerGeneratedChoice = "scissors";
      elements.computerImage[0].src = "assets/scissors.png";
    }
    return computerGeneratedChoice;
  }

  function eventHandling(elements) {
    elements.playButton.addEventListener("click", () => {
      playButtonFunction(elements);
    });

    elements.rockButton[0].addEventListener("click", () => {
      rockButtonFunction(elements);
      scoreUpdate(playerWin);
    });

    elements.paperButton[0].addEventListener("click", () => {
      paperButtonFunction(elements);
      scoreUpdate(playerWin);
    });

    elements.scissorsButton[0].addEventListener("click", () => {
      scissorsButtonFunction(elements);
      scoreUpdate(playerWin);
    });
  }

  function getElements() {
    const playButton = document.getElementById("play");
    const titleAnnouncer = document.getElementsByClassName("announcer");
    const rockButton = document.getElementsByClassName("rockChoice");
    const paperButton = document.getElementsByClassName("paperChoice");
    const scissorsButton = document.getElementsByClassName("scissorsChoice");
    const imagesArray = Array.from(document.querySelectorAll(".hidden-img"));
    const images = document.getElementsByClassName("images");
    // const pScore = document.getElementsByClassName("player-points");
    // const cScore = document.getElementsByClassName("computer-points");
    const computerStartingImage = document.getElementsByClassName(
      "computer-starting-image"
    );
    const chosenPlayerImage = document.getElementsByClassName("chosenByPlayer");
    const computerImage = document.getElementsByClassName(
      "computerChosenImage"
    );

    return {
      playButton,
      titleAnnouncer,
      rockButton,
      paperButton,
      scissorsButton,
      imagesArray,
      images,
      // pScore,
      // cScore,
      computerStartingImage,
      chosenPlayerImage,
      computerImage,
    };
  }

  eventHandling(getElements());
})();
