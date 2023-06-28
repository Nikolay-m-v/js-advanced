"use strict";

function calorieObject(input) {
  let foods = {};

  for (let i = 0; i < input.length; i += 2) {
    const [product, calories] = [input[i], input[i + 1]];
    foods[product] = Number(calories);
  }

  console.log(foods);
}

calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
