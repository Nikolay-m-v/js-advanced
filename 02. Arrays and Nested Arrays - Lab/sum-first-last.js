"use strict";

function sumFirstLast(array) {
  let first = Number(array.shift());
  let last = Number(array.pop());
  let sum = first + last;
  console.log(sum);
}

sumFirstLast(["20", "30", "40"]);
