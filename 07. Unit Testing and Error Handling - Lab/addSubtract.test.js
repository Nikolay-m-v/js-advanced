"use strict";

const createCalculator = require("./addSubtract");
const addSubtract = require("./addSubtract");

test("should return an object with add, subtract and get functions", () => {
  const calculator = createCalculator();
  expect(calculator).toMatchObject({
    add: expect.any(Function),
    subtract: expect.any(Function),
    get: expect.any(Function),
  });
});
