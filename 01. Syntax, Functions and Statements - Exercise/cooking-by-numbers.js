"use strict";

function cookingByNumbers(
  number,
  operation1,
  operation2,
  operation3,
  operation4,
  operation5
) {
  number = Number(number);
  let operations = [operation1, operation2, operation3, operation4, operation5];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "chop") {
      number /= 2;
    } else if (operations[i] === "dice") {
      number = Math.sqrt(number);
    } else if (operations[i] === "spice") {
      number += 1;
    } else if (operations[i] === "bake") {
      number *= 3;
    } else if (operations[i] === "fillet") {
      number = number * 0.8;
    }
    console.log(number.toFixed(2));
  }
}

cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
