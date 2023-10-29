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
      fighter.classList.add("chosen");
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

  function battlePrep(elements, category) {
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

  function extractFighterNames(elements) {
    let fightersNamesArray = [];
    elements.chosenFightersArray.forEach((fighter) => {
      let name = fighter.childNodes[1].className;
      fightersNamesArray.push(name);
    });

    console.log(fightersNamesArray);
    return fightersNamesArray;
  }

  function battle(elements) {
    const fightersNamesArray = extractFighterNames(elements);
    elements.startBtn.style.display = "none";
    let rounds = 10;

    for (let i = 0; i < rounds; i++) {
      let randomNum1 = Math.floor(Math.random() * 30) + 1;
      let fighterOneReps = 0;
      if (randomNum1 < 3) {
        console.log(
          `${fightersNamesArray} has failed to do the exercise, therefore ${fightersNamesArray[1]} Wins the match`
        );
        return;
      } else {
        fighterOneReps++;
        console.log(
          `${fightersNamesArray} has successfully performed one rep!`
        );
      }

      let randomNum2 = Math.floor(Math.random() * 25) + 1;
      let fighterTwoReps = 0;
      if (randomNum2 < 2) {
        console.log(
          `${fightersNamesArray[1]} has failed to do the exercise, therefore ${fightersNamesArray[0]} Wins the match`
        );
      } else {
        fighterTwoReps++;
        console.log(
          `${fightersNamesArray[1]} has successfully performed one rep!`
        );
      }
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
        battlePrep(elements, category);
      });
    });

    elements.startBtn.addEventListener("click", () => {
      battle(elements);
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
