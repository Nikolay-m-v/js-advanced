"use strict";

function sortArray(array, ascOrDesc) {
  array.sort((a, b) => (ascOrDesc === "asc" ? a - b : b - a));
  console.log(array);
}

sortArray([14, 7, 17, 6, 8], "asc");
