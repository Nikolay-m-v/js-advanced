"use strict";

function stringLength(arg1, arg2, arg3) {
  let sum = arg1.length + arg2.length + arg3.length;
  let avg = sum / 3;
  console.log(`${sum}\n${Math.floor(avg)}`);
}

stringLength("chocolate", "ice cream", "cake");
