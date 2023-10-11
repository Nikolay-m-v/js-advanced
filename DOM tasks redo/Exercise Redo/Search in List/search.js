"use strict";

function search() {
  const search = document.getElementById("searchText").value;
  const towns = document.querySelectorAll("ul#towns li");

  for (const town of towns) {
    town.style.fontWeight = "normal";
    town.style.textDecoration = "";
  }

  let matches = 0;

  for (const town of towns) {
    if (town.textContent.includes(search) && search.length !== 0) {
      matches++;
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
    }
  }

  document.getElementById("result").textContent = `${matches} matches found.`;
}
