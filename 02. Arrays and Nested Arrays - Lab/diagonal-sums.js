"use strict";

function diagonalSums(array) {
  let mainDiagonal = 0;
  let secondaryDiagonal = 0;
  let firstIndex = -1;
  let lastIndex = array[0].length;

  for (let i = 0; i < array.length; i++) {
    firstIndex++;
    lastIndex--;
    secondaryDiagonal += array[firstIndex][lastIndex];

    for (let j = 0; j < array[i].length; j++) {
      if (i === j) {
        mainDiagonal += array[i][j];
      }
    }
  }
  console.log(`${mainDiagonal} ${secondaryDiagonal}`);
}

diagonalSums([
  [20, 40],
  [10, 60],
]);
