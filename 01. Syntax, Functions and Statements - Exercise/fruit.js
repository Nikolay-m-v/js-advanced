"use strict";

function fruit(fruit, weight, pricePerKg) {
  let gramsToKg = weight / 1000;
  let moneyRequired = gramsToKg * pricePerKg;

  console.log(
    `I need $${moneyRequired.toFixed(2)} to buy ${gramsToKg.toFixed(
      2
    )} kilograms orange`
  );
}

fruit("orange", 2500, 1.8);
fruit("apple", 1563, 2.35);
