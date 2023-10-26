"use strict";

function chooseFighter() {
  const fighterOne = document.querySelector(".fighter-one");
  const fighterTwo = document.querySelector(".fighter-two");
  const fighterThree = document.querySelector(".fighter-three");
  const chosenFighterOne = document.querySelector(".chosenFighterOne");

  fighterOne.addEventListener("click", () => {
    chosenFighterOne.appendChild(fighterOne);
  });
}

chooseFighter();
