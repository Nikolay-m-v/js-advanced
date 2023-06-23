"use strict";

function sameNumbers(number) {
  let sameOrNot = true;
  let sum = 0;
  number = String(number);

  for (let i = 0; i < number.length; i++) {
    let firstDigit = number[0];
    sum += Number(number[i]);
    if (number[i] !== firstDigit) {
      sameOrNot = false;
    }
  }
  console.log(sameOrNot);
  console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
