"use strict";
(function main() {
  let playerScore = 0;
  let computerScore = 0;
  let computerGeneratedChoice = "";

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
    generateComputerChoice(elements);
    let playerChoice = "rock";
    if (playerChoice === computerGeneratedChoice) {
      elements.titleAnnouncer[0].textContent = "Draw!";
    } else if (computerGeneratedChoice === "paper") {
      elements.titleAnnouncer[0].textContent = "Computer Wins!";
    } else {
      elements.titleAnnouncer[0].textContent = "Player Wins!";
    }
  }

  function generateComputerChoice(elements) {
    let numberDefiningChoice = Math.floor(Math.random() * 30) + 1;
    if (numberDefiningChoice <= 10) {
      computerGeneratedChoice = "rock";
    } else if (numberDefiningChoice > 10 && numberDefiningChoice <= 20) {
      computerGeneratedChoice = "paper";
    } else {
      computerGeneratedChoice = "scissors";
    }
    return computerGeneratedChoice;
  }

  function eventHandling(elements) {
    elements.playButton.addEventListener("click", () => {
      playButtonFunction(elements);
    });

    elements.rockButton[0].addEventListener("click", () => {
      rockButtonFunction(elements);
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
    const pScore = document.getElementsByClassName("player-points");
    const cScore = document.getElementsByClassName("computer-points");
    const computerStartingImage = document.getElementsByClassName(
      "computer-starting-image"
    );

    return {
      playButton,
      titleAnnouncer,
      rockButton,
      paperButton,
      scissorsButton,
      imagesArray,
      images,
      pScore,
      cScore,
      computerStartingImage,
    };
  }

  eventHandling(getElements());
})();
