"use strict";

function addItem() {
  const input = document.getElementById("newItemText").value;
  const li = document.createElement("li");
  li.textContent = input;
  if (li.textContent.length !== 0) {
    document.getElementById("items").appendChild(li);
    document.getElementById("newItemText").value = "";
  }

  const deleteButton = document.createElement("a");
  deleteButton.textContent = `[Delete]`;
  deleteButton.href = "#";
  li.appendChild(deleteButton);
  deleteButton.addEventListener("click", onDelete);

  function onDelete(event) {
    event.target.parentElement.remove();
  }
}
