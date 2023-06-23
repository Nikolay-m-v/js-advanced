"use strict";

function fruit(fruit, amountToBuyInGrams, pricePerKG) {
  let gramsToKG = amountToBuyInGrams / 1000;
  let moneyNeeded = gramsToKG * pricePerKG;
  console.log(
    `I need ${moneyNeeded.toFixed(2)} to buy ${gramsToKG.toFixed(2)} ${fruit}.`
  );
}

fruit("orange", 2500, 1.8);
