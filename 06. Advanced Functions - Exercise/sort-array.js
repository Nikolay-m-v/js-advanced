"use strict";

function sortArray(array, ascOrDesc) {
  if (ascOrDesc === "asc") {
    array.sort((a, b) => a - b);
  } else {
    array.sort((a, b) => b - a);
  }
  console.log(array);
}

sortArray([14, 7, 17, 6, 8], "asc");
sortArray([14, 7, 17, 6, 8], "desc");
