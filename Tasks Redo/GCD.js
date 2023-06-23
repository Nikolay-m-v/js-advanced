"use strict";

function greatestCommonDivisor(num1, num2) {
  let greatestDivisor = 0;

  for (let i = 1; i <= num1; i++) {
    if (num2 % i === 0 && num1 % i === 0) {
      greatestDivisor = i;
    }
  }

  console.log(greatestDivisor);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
