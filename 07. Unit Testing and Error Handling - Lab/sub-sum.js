"use strict";

function subSum(arr, startIndex, endIndex) {
  let sum = 0;
  if (Array.isArray(arr) === false) return NaN;
  if (startIndex < 0) startIndex = 0;
  if (endIndex > arr.length - 1) endIndex = arr.length - 1;

  for (let i = startIndex; i <= endIndex; i++) {
    sum += Number(arr[i]);
  }
  console.log(sum);
}

subSum([10, 20, 30, 40, 50, 60], 3, 300);
