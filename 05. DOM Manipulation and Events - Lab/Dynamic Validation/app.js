"use strict";

function validate() {
  const emailInput = document.getElementById("email");

  const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

  emailInput.addEventListener("change", onChange);
  function onChange(event) {
    const emailValue = emailInput.value;
    if (emailRegex.test(emailValue)) {
      emailInput.classList.remove("error");
    } else {
      emailInput.classList.add("error");
    }
  }
}
