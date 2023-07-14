"use strict";

let person = { name: "Mosh", age: 45, gender: "male" };

for (let key in person) {
  console.log(key, person[key]);
}
