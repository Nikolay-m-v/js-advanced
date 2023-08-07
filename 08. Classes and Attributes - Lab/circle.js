"use strict";

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(value) {
    this.radius = value / 2;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

let circ = new Circle(2);
console.log(`Radius: ${circ.radius}`);
console.log(`Diameter: ${circ.diameter}`);
console.log(`Area: ${circ.area}`);
circ.diameter = 1.6;
console.log(`Radius: ${circ.radius}`);
console.log(`Diameter: ${circ.diameter}`);
console.log(`Area: ${circ.area}`);
