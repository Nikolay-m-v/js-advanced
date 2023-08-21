"use strict";

function juiceFlavors(input) {
  let bottles = {};
  let juices = {};

  for (let line of input) {
    let [flavor, amount] = line.split(" => ");
    if (!juices.hasOwnProperty(flavor)) {
      juices[flavor] = 0;
    }
    juices[flavor] += Number(amount);

    if (juices[flavor] >= 1000) {
      let numberOfBottles = Math.floor(juices[flavor] / 1000);
      if (!bottles.hasOwnProperty(flavor)) {
        bottles[flavor] = 0;
      }
      bottles[flavor] += numberOfBottles;
      juices[flavor] -= numberOfBottles * 1000;
    }
  }

  Object.entries(bottles).forEach((bottles) =>
    console.log(`${bottles[0]} => ${bottles[1]}`)
  );
}

juiceFlavors([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
