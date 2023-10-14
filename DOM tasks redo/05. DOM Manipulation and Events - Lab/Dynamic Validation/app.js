"use strict";

function validate() {
  const emailInput = document.getElementById("email");

  const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

  emailInput.addEventListener("change", function () {
    const emailValue = this.value;

    if (emailRegex.test(emailValue)) {
      this.classList.remove("error");
    } else {
      this.classList.add("error");
    }
  });
}
