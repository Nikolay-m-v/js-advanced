"use strict";
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.defaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    this.computeOptimumLocation(0.1);
    console.log("Draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
  });
}

const circle = new Circle(10);
circle.draw();
