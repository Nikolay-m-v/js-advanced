"use strict";

function argumentInfo(...params) {
  let object = {};

  for (let param of params) {
    const type = typeof param;
    console.log(`${type}: ${param}`);
    if (!object.hasOwnProperty(type)) {
      object[type] = 0;
    }
    object[type]++;
  }

  const sorted = Object.entries(object).sort((a, b) => b[1] - a[1]);

  for (let [key, value] of sorted) {
    console.log(`${key} = ${value}`);
  }
}

argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
