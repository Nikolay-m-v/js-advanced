"use strict";

function addItem() {
  let input = document.getElementById("newItemText");
  let items = document.getElementById("items");

  items.appendChild(input);
}
