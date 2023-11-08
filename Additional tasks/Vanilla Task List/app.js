"use strict";
(function main() {
  function addTask(elements) {
    if (!inputText.value) {
      return;
    }
    const li = document.createElement("li");
    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const buttonsHolder = document.createElement("div");

    completeButton.classList.add("complete-btn");
    completeButton.id = "completeBtn";
    completeButton.innerHTML = `<i class="fas fa-check"></i>`;
    deleteButton.classList.add("delete-btn");
    deleteButton.id = "deleteBtn";
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    li.textContent = inputText.value;
    li.classList.add("all-list-styling");

    elements.allListItems.appendChild(li);
    li.appendChild(buttonsHolder);
    buttonsHolder.appendChild(completeButton);
    buttonsHolder.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      elements.deletedListItems.appendChild(li);
    });
    completeButton.addEventListener("click", () => {});
  }

  function deleteTask(elements) {}

  function eventHandling(elements) {
    elements.submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      addTask(elements);
    });
  }

  function getElements() {
    const inputText = document.getElementById("inputText");
    const submitButton = document.getElementById("submitButton");
    const allListItems = document.getElementById("allListItems");
    const completedListItems = document.getElementById("completed");
    const deletedListItems = document.getElementById("deletedListItems");

    return {
      inputText,
      submitButton,
      allListItems,
      completedListItems,
      deletedListItems,
    };
  }

  eventHandling(getElements());
  eventHandling(getElements());
})();
