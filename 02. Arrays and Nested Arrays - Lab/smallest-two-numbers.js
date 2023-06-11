"use strict";

function smallestTwoNumbers(array) {
  let sorted = array.sort((a, b) => a - b);
  let num1 = sorted.shift();
  let num2 = sorted.shift();
  console.log(`${num1} ${num2}`);
}

smallestTwoNumbers([30, 15, 50, 5]);
