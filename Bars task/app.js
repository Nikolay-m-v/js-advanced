"use strict";
(function main() {
  let inArena = false;

  function chooseFighter(elements, fighter) {
    if (inArena) {
      return;
    }

    if (
      elements.chosenFighters.children.length >= 2 &&
      !fighter.parentElement.classList.contains("chosenFighters")
    ) {
      return;
    }

    if (fighter.parentElement === elements.chosenFighters) {
      elements.fighters.appendChild(fighter);
    } else {
      elements.chosenFighters.appendChild(fighter);
      elements.bodies.forEach((body) => {
        body.style.display = "none";
      });
    }
  }

  function toTheArena(elements) {
    if (elements.chosenFighters.children.length >= 2) {
      alert("Entering the arena!");
      elements.arenaBattleImage.classList.add("inside-the-arena");
      elements.arenaImg.style.display = "none";
      elements.arenaText.textContent = "Good Luck";
      elements.arenaText.style.color = "red";
      elements.heading.style.display = "none";
      elements.bodies.forEach((body) => {
        body.style.display = "none";
      });
      Array.from(elements.chosenFighters.children).forEach((child) => {
        child.classList.add("face-img-arena");
      });
      elements.fighters.style.display = "none";
      inArena = true;
    } else {
      alert("You must select atleast 2 fighters!");
    }
  }

  function resetBtnFunction(elements) {
    elements.arenaBattleImage.classList.remove("inside-the-arena");
    elements.arenaImg.style.display = "block";
    elements.fighters.style.display = "flex";
    elements.arenaText.textContent = "To The Arena!!!";
    elements.arenaText.style.color = "black";
    elements.heading.style.display = "block";
    inArena = false;
    elements.bodies.forEach((body) => {
      body.style.display = "block";
    });
    elements.fightersArray.forEach((fighter) => {
      elements.fighters.appendChild(fighter);
    });
    Array.from(elements.fighters.children).forEach((child) => {
      child.classList.remove("face-img-arena");
    });
  }

  function eventHandling(elements) {
    elements.resetBtn.addEventListener("click", () => {
      resetBtnFunction(elements);
    });

    elements.fightersArray.forEach((fighter) => {
      fighter.addEventListener("click", () => {
        chooseFighter(elements, fighter);
      });
    });

    elements.arenaImg.addEventListener("click", () => {
      toTheArena(elements);
    });
  }

  function getElements() {
    const fightersArray = Array.from(document.querySelectorAll(".fighter"));
    const chosenFighters = document.querySelector(".chosenFighters");
    const chosenFightersArray = Array.from(
      document.querySelectorAll(".face-img-arena")
    );
    const fighters = document.querySelector(".fighters");
    const arenaImg = document.querySelector(".arena-img");
    const arenaBattleImage = document.querySelector(".arena-battle-img");
    const resetBtn = document.getElementById("resetBtn");
    const arenaText = document.querySelector(".arena-text");
    const heading = document.querySelector(".heading");
    const bodies = document.querySelectorAll(".body");

    return {
      fightersArray,
      chosenFighters,
      fighters,
      arenaImg,
      arenaBattleImage,
      resetBtn,
      arenaText,
      heading,
      bodies,
      chosenFightersArray,
    };
  }

  eventHandling(getElements());
})();
