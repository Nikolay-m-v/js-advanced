"use strict";

function subSum(array, startIndex, endIndex) {
  let sum = 0;
  if (Array.isArray(array) === false) return NaN;

  if (startIndex < 0) startIndex = 0;

  if (endIndex > array.length - 1) endIndex = array.length - 1;

  for (let i = startIndex; i <= endIndex; i++) {
    sum += Number(array[i]);
  }

  console.log(sum);
}

subSum([10, 20, 30, 40, 50, 60], 3, 300);
