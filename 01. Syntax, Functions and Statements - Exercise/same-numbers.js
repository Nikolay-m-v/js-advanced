"use strict";

function sameNumbers(number) {
  let sum = 0;
  let isSame = true;
  number = String(number);
  let firstDigit = number[0];
  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }

  for (let i = 1; i < number.length; i++) {
    if (number[i] !== firstDigit) {
      sameOrNot = false;
    }
  }
  console.log(sum);
  console.log(isSame);
}

sameNumbers(2222222);
sameNumbers(1234);
