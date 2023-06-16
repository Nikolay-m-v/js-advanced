"use strict";

function addAndRemoveElements(array) {
  let newArray = [];
  let initialNumber = 0;
  newArray;

  for (let i = 0; i < array.length; i++) {
    initialNumber++;
    if (array[i] === "add") {
      newArray.push(initialNumber);
    } else if (array[i] === "remove") {
      newArray.pop();
    }
  }
  if (newArray.leth < 1) {
    console.log("Empty");
  } else {
    console.log(newArray);
  }
}

addAndRemoveElements(["add", "add", "add", "add"]);
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
addAndRemoveElements(["remove", "remove", "remove"]);
