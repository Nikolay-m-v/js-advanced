"use strict";

function collect() {
  const items = Array.from(document.querySelectorAll("li"));
  const result = items.map((el) => el.textContent).join("\n");
  document.getElementById("result").value = result;
}
