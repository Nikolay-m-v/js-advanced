"use strict";

function pieceOfPie(pieFlavors, start, end) {
  let startIndex = pieFlavors.indexOf(start);
  let endIndex = pieFlavors.indexOf(end);
  let newArray = pieFlavors.slice(startIndex, endIndex + 1);
  console.log(newArray.join("\n"));
}

pieceOfPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
