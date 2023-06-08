"use strict";

function largestNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is the largest number`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is the largest number`);
  } else if (num3 > num1 && num3 > num2) {
    console.log(`${num3} is the largest number`);
  }
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
