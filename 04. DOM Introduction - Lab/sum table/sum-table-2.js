"use strict";

function sumTable() {
  let sum = 0;
  const rows = Array.from(document.querySelectorAll("table tr"));

  for (let i = 1; i < rows.length - 1; i++) {
    sum += Number(rows[i].lastElementChild.textContent);
  }
  document.getElementById("sum").textContent = sum;
}
