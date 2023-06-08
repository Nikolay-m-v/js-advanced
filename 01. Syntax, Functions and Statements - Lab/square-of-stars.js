"use strict";

function squareOfStars(input) {
  if (input < 1 || input > 100) {
    input = 5;
  }
  for (let col = 1; col <= input; col++) {
    let result = "";
    for (let row = 1; row <= input; row++) {
      result += "*" + " ";
    }
    console.log(result);
  }
}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);
squareOfStars(10005);
