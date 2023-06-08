"use strict";

function daysInMonth(month, year) {
  let date = new Date(year, month, 0);
  return date.getDate();
}

daysInMonth(1, 2012);

console.log(daysInMonth(1, 2012));
