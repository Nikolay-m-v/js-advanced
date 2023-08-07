"use strict";

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(pointOne, pointTwo) {
    const dx = pointOne.x - pointTwo.x;
    const dy = pointTwo.y - pointTwo.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }
}

const point1 = new Point(1, 1);
const point2 = new Point(4, 5);

console.log(point1, point2);
console.log(Point.distance(point1, point2));
