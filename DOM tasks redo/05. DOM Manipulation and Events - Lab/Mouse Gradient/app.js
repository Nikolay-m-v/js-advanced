"use strict";

// function attachGradientEvents() {
//   const gradient = document.getElementById("gradient");
//   gradient.addEventListener("mousemove", onMouseOver);
//   const result = document.getElementById("result");

//   function onMouseOver(event) {
//     result.textContent =
//       Math.floor((event.offsetX / gradient.clientWidth) * 100) * "%";
//   }
// }

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
