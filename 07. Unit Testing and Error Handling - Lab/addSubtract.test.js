"use strict";

const createCalculator = require("./addSubtract");

test("should return an object with add, subtract and get functions", () => {
  const calculator = createCalculator();
  expect(calculator).toMatchObject({
    add: expect.any(Function),
    subtract: expect.any(Function),
    get: expect.any(Function),
  });
});

test("should keep an internal sum that can't be modified from the outside", () => {
  const calculator = createCalculator();
  calculator.add(5);
  calculator.subtract(3);
  expect(calculator.get()).toBe(2);
});
