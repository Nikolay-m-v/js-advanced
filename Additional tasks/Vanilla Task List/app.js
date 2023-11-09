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

    completeButton.addEventListener("click", () => {
      completeTask(elements, li);
    });
    deleteButton.addEventListener("click", () => {
      deleteTask(elements, li);
    });
  }

  function deleteTask(elements, li) {
    elements.deletedListItems.appendChild(li);
  }

  function completeTask(elements, li) {
    elements.completedListItems.appendChild(li);
    li.style.textDecoration = "line-through";
    li.style.opacity = "0.6";
  }

  function changeOption(elements) {
    const selectedOption = elements.filterToDo.value;
    console.log(selectedOption);

    switch (selectedOption) {
      case "completed":
        elements.allListItems.style.display = "none";
        elements.completedListItems.style.display = "block";
        elements.deletedListItems.style.display = "none";
        break;
      case "uncompleted":
        elements.allListItems.style.display = "none";
        elements.completedListItems.style.display = "none";
        elements.deletedListItems.style.display = "block";
        break;
      default: // "all"
        elements.allListItems.style.display = "block";
        elements.completedListItems.style.display = "none";
        elements.deletedListItems.style.display = "none";
    }
  }

  function eventHandling(elements) {
    elements.submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      addTask(elements);
    });

    elements.filterToDo.addEventListener("change", () => {
      changeOption(elements);
    });
  }

  function getElements() {
    const inputText = document.getElementById("inputText");
    const submitButton = document.getElementById("submitButton");
    const allListItems = document.getElementById("allListItems");
    const completedListItems = document.getElementById("completed");
    const deletedListItems = document.getElementById("deletedListItems");
    const filterToDo = document.getElementById("filter-todo");

    return {
      inputText,
      submitButton,
      allListItems,
      completedListItems,
      deletedListItems,
      filterToDo,
    };
  }

  eventHandling(getElements());
})();
