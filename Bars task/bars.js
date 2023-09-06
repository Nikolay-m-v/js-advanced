"use strict";

let personOne = {
  name: "William",
  age: 28,
  amountOfPullUps: 0,
  amountOfDips: 0,
};

let personTwo = {
  name: "Nick",
  age: 29,
  amountOfPullUps: 0,
  amountOfDips: 0,
};

function pullUp(person, setOfPullUps) {
  for (let i = 0; i < setOfPullUps.length; i++) {
    let currentPullUp = setOfPullUps[i];
    if (currentPullUp === "chin above bar") {
      person.amountOfPullUps++;
      console.log(`${person.name} has done a successfull pull up`);
    } else {
      console.log(
        `${person.name} has failed to pull up his chin above the bar \nTotal amount of pull ups ${person.name} did is: ${person.amountOfPullUps}`
      );
      break;
    }
  }
}

function dips(person, setOfDips) {
  for (let i = 0; i < setOfDips.length; i++) {
    let currentDip = setOfDips[i];
    if (currentDip === "90 degrees to almost extension") {
      person.amountOfDips++;
      console.log(`${person.name} has done a successfull dip`);
    } else {
      console.log(
        `${person.name} has failed to a dip with full range of motion, therefore he fails. \nThe total amount of dips ${person.name} did is: ${person.amountOfDips} `
      );
    }
  }
}

pullUp(personOne, [
  "chin above bar",
  "chin above bar",
  "chin above bar",
  "chin above bar",
  "chin above bar",
  "chin above bar",
  "chin under bar",
]);

dips(personTwo, [
  "90 degrees to almost extension",
  "90 degrees to almost extension",
  "90 degrees to almost extension",
  "90 degrees to almost extension",
  "90 degrees to almost extension",
  "90 degrees to almost extension",
  "90 degrees to almost extension",
  "90 degrees to almost extension",
  "90 degrees to almost extension",
  "90 degrees to almost extension",
  "90 degrees to almost extension",
  "90 degrees to almost extension",
  "90 degrees to almost extension",
  "90 degrees to almost extension",
  "unable to go full range of motion.",
]);
