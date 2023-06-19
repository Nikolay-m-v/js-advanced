"use strict";

function EvenPosElement(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 2) {
    newArray.push(array[i]);
  }
  console.log(newArray);
}

EvenPosElement([20, 30, 40, 50, 60]);
EvenPosElement([5, 10]);
