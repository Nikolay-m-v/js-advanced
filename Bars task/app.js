"use strict";

function chooseFighter() {
  fightersArray.forEach((fighter) => {
    fighter.addEventListener("click", () => {
      if (
        chosenFighters.children.length >= 2 &&
        !fighter.parentElement.classList.contains("chosenFighters")
      ) {
        return;
      }

      if (fighter.parentElement === chosenFighters) {
        fighters.appendChild(fighter);
      } else {
        chosenFighters.appendChild(fighter);
      }
    });
  });
}

function toTheArena(chosenFighters, arenaBattleImage, arenaImg) {
  arenaImg.addEventListener("click", () => {
    if (chosenFighters.children.length >= 2) {
      alert("Entering the arena!");
      arenaBattleImage.classList.add("inside-the-arena");
      arenaImg.style.display = "none";
      Array.from(chosenFighters.children).forEach((child) => {
        child.classList.add("face-img-arena");
      });
    }
  });
}

function resetBtnFunction(chosenFighters) {
  chosenFighters.innerHTML = "";
  arenaBattleImage.classList.remove("inside-the-arena");
  arenaImg.style.display = "block";
}

function eventHandling(elements) {
  elements.resetBtn.addEventListener("click", () => {
    resetBtnFunction(elements.chosenFighters);
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

chooseFighter();
toTheArena();
