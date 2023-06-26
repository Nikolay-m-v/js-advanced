"use strict";

function add(num) {
  return (n) => num + n;
}

let add5 = add(5);
console.log(add5(2));
console.log(add5(3));
console.log(add5(10));
