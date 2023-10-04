"use strict";
function attachGradientEvents() {
  const inputFields = document.querySelectorAll("input");

  inputFields.forEach((input) => {
    input.addEventListener("focus", highlightSection);
    input.addEventListener("blur", removeHighlight);
  });

  function highlightSection(event) {
    const parentDiv = event.target.parentElement;
    parentDiv.classList.add("focused");
  }

  function removeHighlight(event) {
    const parentDiv = event.target.parentElement;
    parentDiv.classList.remove("focused");
  }
}
