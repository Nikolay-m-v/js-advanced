"use strict";
(function main() {
  function playButtonFunction(elements) {
    elements.imagesArray.forEach((img) => {
      img.classList.remove("hidden-img");
    });
    elements.rockButton[0].style.display = "block";
    elements.paperButton[0].style.display = "block";
    elements.scissorsButton[0].style.display = "block";
    elements.playButton.style.display = "none";
    elements.titleAnnouncer[0].textContent = "Choose an option";
  }

  function eventHandling(elements) {
    elements.playButton.addEventListener("click", () => {
      playButtonFunction(elements);
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

    return {
      playButton,
      titleAnnouncer,
      rockButton,
      paperButton,
      scissorsButton,
      imagesArray,
      images,
    };
  }

  eventHandling(getElements());
})();
