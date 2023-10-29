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
      elements.categoriesArray.forEach((category) => {
        category.style.display = "block";
      });
      elements.arenaBattleImage.classList.add("inside-the-arena");
      elements.arenaImg.style.display = "none";
      elements.arenaText.textContent = "Good Luck";
      elements.arenaText.style.color = "red";
      elements.heading.textContent = "Choose the torture!";
      elements.heading.classList.add("choose-category");
      elements.categoriesArray.forEach((category) => {
        category.classList.remove("chosen-category");
      });
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

  function battle(elements, category) {
    elements.chosenCategorySpan.textContent = "The chosen Category is: ";
    elements.heading.style.display = "none";
    elements.startBtn.style.display = "block";

    switch (category.id) {
      case "pull-up-bar":
        elements.categoriesArray[1].style.display = "none";
        elements.categoriesArray[2].style.display = "none";
        elements.categoriesArray[0].classList.add("chosen-category");
        break;
      case "dips-bars":
        elements.categoriesArray[0].style.display = "none";
        elements.categoriesArray[2].style.display = "none";
        elements.categoriesArray[1].classList.add("chosen-category");

        break;
      case "push-ups-bars":
        elements.categoriesArray[0].style.display = "none";
        elements.categoriesArray[1].style.display = "none";
        elements.categoriesArray[2].classList.add("chosen-category");

        break;
      default:
    }
  }

  function resetBtnFunction(elements) {
    elements.arenaBattleImage.classList.remove("inside-the-arena");
    elements.chosenCategorySpan.style.display = "none";
    elements.arenaImg.style.display = "block";
    elements.fighters.style.display = "flex";
    elements.heading.textContent = "Choose the fighters";
    elements.arenaText.textContent = "To The Arena!!!";
    elements.arenaText.style.color = "black";
    elements.heading.style.display = "block";
    elements.startBtn.style.display = "none";
    elements.categoriesArray.forEach((category) => {
      category.style.display = "none";
    });
    elements.heading.classList.remove("choose-category");
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

    elements.categoriesArray.forEach((category) => {
      category.addEventListener("click", () => {
        battle(elements, category);
      });
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
    const arenaCategories = document.querySelector(".arena-categories");
    const chosenCategorySpan = document.querySelector(".chosen-category");
    const categoriesArray = Array.from(
      document.querySelectorAll(".arena-category")
    );
    const startBtn = document.getElementById("start-btn");

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
      categoriesArray,
      arenaCategories,
      chosenCategorySpan,
      startBtn,
    };
  }

  eventHandling(getElements());
})();
