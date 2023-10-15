"use strict";
function attachGradientEvents() {
  // Array.from(document.querySelectorAll("input")).forEach((input) => {
  //   input.addEventListener("focus", onFocus);
  //   input.addEventListener("blur", onBlur);
  // });
  // function onFocus(event) {
  //   event.target.parentElement.classList.add("focused");
  // }
  // function onBlur(event) {
  //   event.target.parentElement.classList.remove("focused");
  // }

  Array.from(document.querySelectorAll("input")).forEach((input) => {
    input.addEventListener("focus", onFocus);
    input.addEventListener("blur", onBlur);
  });

  function onFocus(event) {
    event.target.parentElement.classList.add("focused");
  }

  function onBlur(event) {
    event.target.parentElement.classList.remove("focused");
  }
}
