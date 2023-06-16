"use strict";

function magicMetrics(matrix) {
  let isMagical = true;
  for (let row = 0; row < matrix.length - 1; row++) {
    let sumRowOne = matrix[row].reduce((a, b) => a + b, 0);
    let sumRowTwo = matrix[row + 1].reduce((a, b) => a + b, 0);
    let sumColOne = 0;
    let sumColTwo = 0;
    for (let col = 0; col < matrix[row].length; col++) {
      sumColOne += matrix[row][col];
      sumColTwo += matrix[row + 1][col];
    }

    if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
      isMagical = false;
    }
  }
  console.log(isMagical);
}

magicMetrics([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
