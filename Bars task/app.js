"use strict";
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("fighters div").addEventListener("click", onClick);
  const fighters = document.querySelectorAll(".fighters div");

  fighters.forEach((fighter) => {
    fighter.addEventListener("click", function () {
      const chosenFighter = this.cloneNode(true);
      chosenFighter.classList.add("chosen");
      document.querySelector(".chosenFighters").appendChild(chosenFighter);
      this.remove();
    });
  });
});
