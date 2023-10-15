"use strict";

function attachGradientEvents() {
  const gradient = document.getElementById("gradient");
  gradient.addEventListener("mousemove", onMouseOver);
  const result = document.getElementById("result");

  function onMouseOver() {
    result.textContent =
      Math.floor((event.offsetX / gradient.clientWidth) * 100) + "%";
  }
}
