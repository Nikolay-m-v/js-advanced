"use strict";

function smallestTwoNumbers(array) {
  let sorted = array.sort((a, b) => a - b);
  let num1 = array.shift();
  let num2 = array.shift();
  console.log(`${num1} ${num2}`);
}

smallestTwoNumbers([30, 15, 50, 5]);
