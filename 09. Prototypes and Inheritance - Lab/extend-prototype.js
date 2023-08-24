"use strict";

function extendPrototype(classToExtend) {
  classToExtend.prototype.species = "Human";
  classToExtend.prototype.toSpeciesString = function () {
    return `I am a ${this.species}. ${this.toString()}`;
  };
}

class Person {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return this.name;
  }
}

extendPrototype(Person);
const person = new Person("Alice");

console.log(person.species);
console.log(person.toSpeciesString());
