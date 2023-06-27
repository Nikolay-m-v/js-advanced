"use strict";

function listProcessor(input) {
  let arr = [];

  let result = {
    add: (string) => arr.push(string),
    remove: (string) => (arr = arr.filter((el) => el !== string)),
    print: () => console.log(arr.join(",")),
  };

  input.forEach((line) => {
    const [command, value] = line.split(" ");
    result[command](value);
  });
}

listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
