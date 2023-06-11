"use strict";

function evenPositionElement(array) {
  let string = "";
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      string += array[i] + " ";
    }
  }
  console.log(string);
}

evenPositionElement(["20", "30", "40", "50", "60"]);
