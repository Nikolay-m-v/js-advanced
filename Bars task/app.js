"use strict";
(function main() {
  function chooseFighter(elements, fighter) {
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
    }
  }

  function toTheArena(elements) {
    if (elements.chosenFighters.children.length >= 2) {
      alert("Entering the arena!");
      elements.arenaBattleImage.classList.add("inside-the-arena");
      elements.arenaImg.style.display = "none";
      Array.from(elements.chosenFighters.children).forEach((child) => {
        child.classList.add("face-img-arena");
      });
      elements.fighters.style.display = "none";
    } else {
      alert("You must select 2 fighters!");
    }
  }

  function resetBtnFunction(elements) {
    elements.arenaBattleImage.classList.remove("inside-the-arena");
    elements.arenaImg.style.display = "block";
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

  function elementGathering() {
    const fightersArray = Array.from(document.querySelectorAll(".fighter"));
    const chosenFighters = document.querySelector(".chosenFighters");
    const fighters = document.querySelector(".fighters");
    const arenaImg = document.querySelector(".arena-img");
    const arenaBattleImage = document.querySelector(".arena-battle-img");
    const resetBtn = document.getElementById("resetBtn");

    return {
      fightersArray,
      chosenFighters,
      fighters,
      arenaImg,
      arenaBattleImage,
      resetBtn,
    };
  }
  eventHandling(elementGathering());
})();
