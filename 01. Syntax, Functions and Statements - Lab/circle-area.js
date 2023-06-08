"use strict";

function circleArea(input) {
  if (typeof input == "number") {
    let result = input * Math.PI * input;
    console.log(result.toFixed(2));
  } else {
    console.log(
      "We can not calculate the circle area, because we receive a string."
    );
  }
}

circleArea(5);
circleArea("name");
