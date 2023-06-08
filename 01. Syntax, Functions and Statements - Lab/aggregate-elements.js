"use strict";

function aggregateElements(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);

  let sumInverse = 0;
  for (let i = 0; i < array.length; i++) {
    sumInverse += 1 / array[i];
  }
  console.log(sumInverse);

  let concatSum = "";
  for (let i = 0; i < array.length; i++) {
    concatSum += array[i];
  }
  console.log(concatSum);
}

aggregateElements([1, 2, 3]);
