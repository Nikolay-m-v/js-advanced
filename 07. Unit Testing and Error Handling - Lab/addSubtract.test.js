"use strict";

const { create } = require("domain");
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

test("add function should add numbers to the interal sum", () => {
  const calculator = createCalculator();
  calculator.add(10);
  calculator.add("6");
  expect(calculator.get()).toBe(16);
});

test("subtract function should subtract numbers from the interanl sum", () => {
  const calculator = createCalculator();
  calculator.add(11);
  calculator.subtract(8);
  expect(calculator.get()).toBe(3);
});

test("subtract and add functions should work with strings ", () => {
  const calculator = createCalculator();
  calculator.add("5");
  calculator.subtract("3");
  expect(calculator.get()).toBe(2);
});

test("internal sum should not be modified directly", () => {
  const calculator = createCalculator();
  calculator.value = 10;
  expect(calculator.get()).toBe(0);
});
