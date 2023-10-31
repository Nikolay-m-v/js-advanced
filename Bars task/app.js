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
    elements.chosenCategorySpan.style.display = "block";
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

  // function extractFighterNames(elements) {
  //   let fightersNamesArray = [];
  //   elements.chosenFightersArray.forEach((fighter) => {
  //     let name = fighter.children[1].className;
  //     console.log(name);
  //     fightersNamesArray.push(name);
  //   });

  //   console.log(fightersNamesArray);
  //   return fightersNamesArray;
  // }

  function battle(elements) {
    // const fighterOne = elements.chosenFightersArray[0];
    // const fighterOneName =
    //   elements.chosenFighters[0].children.children.className;
    // console.log(fighterOneName);
    // const fighterTwo = elements.chosenFightersArray[1];
    // const fighterTwoName = fighterTwo.children.className;
    // console.log(fighterTwoName);
    const fighterOneName =
      elements.chosenFighters.children[0].children[0].className;
    const fighterTwoName =
      elements.chosenFighters.children[1].children[0].className;
    // const fightersInArena = Array.from(elements.chosenFighters);
    // console.log(fightersInArena);
    const fighterOne = elements.chosenFighters.children[0];
    const fighterTwo = elements.chosenFighters.children[1];
    console.log(fighterOne);

    let winner = "";
    let loser = "";

    elements.startBtn.style.display = "none";
    let rounds = 25;
    let fighterOneReps = 0;
    let fighterTwoReps = 0;
    let fighterOneFails = 0;
    let fighterTwoFails = 0;

    for (let i = 0; i < rounds; i++) {
      let randomNum1 = Math.floor(Math.random() * 30) + 1;

      if (fighterOneFails >= 1) {
        continue;
      }
      if (randomNum1 < 4) {
        fighterOneFails++;
        console.log(
          `${fighterOneName} has failed to do the exercise, therefore ${fighterOneName} stops at ${fighterOneReps} reps `
        );
      } else {
        fighterOneReps++;
        console.log(`${fighterOneName} has successfully performed one rep!`);
      }

      let randomNum2 = Math.floor(Math.random() * 25) + 1;
      if (fighterTwoFails >= 1) {
        continue;
      }
      if (randomNum2 < 3) {
        fighterTwoFails++;
        console.log(
          `${fighterTwoName} has failed to do the exercise, therefore ${fighterTwoName} stops at ${fighterTwoReps} reps  `
        );
        continue;
      } else {
        fighterTwoReps++;
        console.log(`${fighterTwoName} has successfully performed one rep!`);
      }
    }
    console.log(
      `The reps our fighters were able to do are: \n${fighterOneName} did: ${fighterOneReps} \n ${fighterTwoName} did: ${fighterTwoReps}`
    );
    if (fighterOneReps > fighterTwoReps) {
      console.log(`The winner of this fight is ${fighterOneName}`);
      winner = fighterOne;
      loser = fighterTwo;
    } else if (fighterTwoReps > fighterOneReps) {
      console.log(`The winner of this fight is ${fighterTwoName}`);
      winner = fighterTwo;
      loser = fighterOne;
    } else if ((fighterOneReps = fighterTwoReps)) {
      console.log(
        `Both fighters failed on the same rep, therefore its a draw!!!`
      );
    }
    if ((winner.length = null)) {
      console.log("No winner!");
      return;
    }
    winner.classList.add("winner");
    loser.style.display = "none";
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
      child.style.display = "block";
      child.classList.remove("face-img-arena", "winner");
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
    const arenaWinner = document.getElementById("arenaWinner");

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
      arenaWinner,
    };
  }

  eventHandling(getElements());
})();
