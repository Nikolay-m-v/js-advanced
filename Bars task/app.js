"use strict";

function chooseFighter() {
  const fightersArray = Array.from(document.querySelectorAll(".fighter"));
  const chosenFighters = document.querySelector(".chosenFighters");
  const fighters = document.querySelector(".fighters");

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

chooseFighter();
