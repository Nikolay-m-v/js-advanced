"use strict";

let personOne = {
  name: "William",
  age: 28,
  amountOfPullUps: 0,

  pullUp(setOfPullUps) {
    for (let i = 0; i < setOfPullUps.length; i++) {
      if (setOfPullUps[i] === "chin above bar") {
        this.amountOfPullUps++;
        return `William has done a successfull pull up`;
      } else {
        return `William has failed to pull up his chin above the bar \nTotal amount of pull ups William did is: ${this.amountOfPullUps}`;
        break;
      }
    }
  },
};

personOne.pullUp([
  "chin above bar",
  "chin above bar",
  "chin above bar",
  "chin above bar",
  "chin above bar",
  "chin above bar",
  "chin under bar",
]);
