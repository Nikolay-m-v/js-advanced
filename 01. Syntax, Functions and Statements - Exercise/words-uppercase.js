"use strict";

function wordsUppercase(string) {
  let pattern = /\w+/g;
  let match = string.match(pattern);
  console.log(match.map((word) => word.toLocaleUpperCase()).join(", "));
}

wordsUppercase("Hi, how are you?");
