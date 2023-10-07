"use strict";

function extract(content) {
  const text = document.getElementById(content).textContent;
  let result = "";

  const pattern = /\((?<word>\w+(\s*\w+)*)\)/g;
  let match = pattern.exec(text);

  while (match !== null) {
    result += match.groups.word + "; ";
    match = pattern.exec(text);
  }

  return result.trim();
}
