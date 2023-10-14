"use strict";

function addItem() {
  const input = document.getElementById("newItemText").value;
  const li = document.createElement("li");
  li.textContent = input;
  document.getElementById("items").appendChild(li);
  document.getElementById("newItemText").value = "";
}
