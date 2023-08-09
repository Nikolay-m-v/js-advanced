"use strict";

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(pointOne, pointTwo) {
    const dx = pointOne.x - pointTwo.x;
    const dy = pointOne.y - pointTwo.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }
}

const point1 = new Point(1, 1);
const point2 = new Point(4, 5);

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));

console.log(point1, point2);
console.log(Point.distance(point1, point2));

let pOne = new Point(9, 9);
let pTwo = new Point(8, 7);
console.log(pOne, pTwo);
console.log(Point.distance(pOne, pTwo));
