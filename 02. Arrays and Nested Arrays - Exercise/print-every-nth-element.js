"use strict";

function printEveryNthElement(array, number) {
  let newArray = [];
  for (let i = 0; i < array.length; i += number) {
    newArray.push(array[i]);
  }

  console.log(newArray);
}

printEveryNthElement(["5", "20", "31", "4", "20"], 2);
