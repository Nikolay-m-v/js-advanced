"use strict";

function lastKNumbersSequence(n, k) {
  let result = [1];

  for (let i = 1; i < n; i++) {
    let lastK = result.slice(-k);
    let sum = 0;

    for (const num of lastK) {
      sum += Number(num);
    }

    result.push(sum);
  }

  console.log(result);
}

lastKNumbersSequence(6, 3);
