"use strict";

const isSymmetric = require("./check-for-symmetry");

test(`Works with symmetric  numeric array`, () => {
  expect(isSymmetric([1, 2, 3])).toBe(false);
});

test("empty array is symmetric", () => {
  expect(isSymmetric([])).toBe(true);
});

test("single-element array is symmetric", () => {
  expect(isSymmetric([1])).toBe(true);
});

test("numeric and strings array is symmetric", () => {
  expect(isSymmetric(["a", 2])).toEqual(true);
});
