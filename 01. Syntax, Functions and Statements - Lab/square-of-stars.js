"use strict";

function squareOfStars(input) {
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
