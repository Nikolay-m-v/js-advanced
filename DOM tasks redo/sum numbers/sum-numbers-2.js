"use strict";

function sumNumbers() {
  const numberOne = Number(document.getElementById("num1").value);
  const numberTwo = Number(document.getElementById("num2").value);

  document.getElementById("sum").value = numberOne + numberTwo;
}
