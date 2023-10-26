"use strict";

function chooseFighter() {
  const fightersArray = Array.from(document.querySelectorAll(".fighter"));
  const chosenFighters = document.querySelector(".chosenFighters");

  fightersArray.forEach((fighter) => {
    fighter.addEventListener("click", () => {
      if (chosenFighters.children.length > 1) {
        return;
      }
      chosenFighters.appendChild(fighter);
    });
  });
}

chooseFighter();
