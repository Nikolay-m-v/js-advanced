"use strict";

function deleteByEmail() {
  let input = document.getElementsByTagName("input")[0];
  let rows = document.querySelectorAll("tbody tr");
  let result = document.getElementById("result");

  for (let row of rows) {
    if (input.value === row.children[1].textContent) {
      result.textContent = "Deleted.";
      row.parentElement.removeChild(row);
    } else {
      result.textContent = "Not found.";
    }
  }
  input.value = "";
}
