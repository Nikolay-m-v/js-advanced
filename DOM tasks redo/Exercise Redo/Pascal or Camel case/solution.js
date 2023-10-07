"use strict";

function solve() {
  let text = document
    .getElementById("text")
    .value.toLocaleLowerCase()
    .split(" ");

  let namingConvention = document.getElementById("naming-convention").value;

  let output = "";

  if (namingConvention === "Camel Case") {
    output += text[0];

    for (let i = 1; i < text.length; i++) {
      output += text[i].charAt(0).toLocaleUpperCase() + text[i].substring(1);
    }
  } else if (namingConvention === "Pascal Case") {
    for (let i = 0; i < text.length; i++) {
      output += text[i].charAt(0).toLocaleUpperCase() + text[i].substring(1);
    }
  } else {
    output + "Error!";
  }

  document.getElementById("result").textContent = output;
}
