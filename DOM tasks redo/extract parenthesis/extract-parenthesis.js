"use strict";

function extract() {
  const pattern = /\((.+?)\)/g;
  const text = document.getElementById("content");
  const matches = Array.from(text.textContent.matchAll(pattern));
  const extractedWords = matches.map((match) => match[1]);
  let result = extractedWords.join(";");
  console.log(result);
  return result;
}
