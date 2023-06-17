"use strict";

function calorieObject(array) {
  let foods = {};

  for (let i = 0; i < array.length; i += 2) {
    const [product, calories] = [array[i], array[i + 1]];
    foods[product] = Number(calories);
  }
  console.log(foods);
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
