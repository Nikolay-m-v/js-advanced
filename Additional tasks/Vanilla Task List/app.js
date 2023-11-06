"use strict";
(function main() {
  function addTask(elements, event) {
    const li = document.createElement("li");
    li.textContent = inputText.value;
    elements.allListItems.appendChild(li);
  }

  function eventHandling(elements, event) {
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
    const notCompletedListItems = document.getElementById(
      "allLinotCompletedstItems"
    );

    return {
      inputText,
      submitButton,
      allListItems,
      completedListItems,
      notCompletedListItems,
    };
  }

  eventHandling(getElements());
})();
