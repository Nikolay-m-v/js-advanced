"use strict";

function rotateArray(array, number) {
  for (let i = 0; i < number; i++) {
    let popped = array.pop();
    array.unshift(popped);
  }
  console.log(array);
}

rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
