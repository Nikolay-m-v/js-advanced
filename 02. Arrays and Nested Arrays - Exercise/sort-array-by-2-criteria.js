"use strict";

function sortArrayBy2Criteria(array) {
  array
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .forEach((element) => console.log(element));
}

sortArrayBy2Criteria(["alpha", "beta", "gamma"]);
