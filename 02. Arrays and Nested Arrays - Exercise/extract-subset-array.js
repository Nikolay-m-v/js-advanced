"use strict";

function extractSubsetFromArray(array) {
  let newArray = [];
  let highestNum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > highestNum) {
      highestNum = array[i];
      newArray.push(highestNum);
    }
  }
  console.log(newArray);
}

extractSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
