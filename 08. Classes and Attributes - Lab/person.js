"use strict";

class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}), email: ${this.email}`;
  }
}

const petar = new Person("Petar", "Ivaylov", "29", "petarIv@abv.bg");
const ivan = new Person("Ivan", "Ivanov", "41", "ivanovPetar@abv.bg");

console.log(petar.toString());
console.log(ivan.toString());

console.log(petar instanceof Person);
console.log(ivan instanceof Person);
