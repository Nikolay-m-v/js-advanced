const sum = require("./sum-of-numbers1");

test(`the sum should be equal to all numbers from the array combined`, () => {
  expect(sum([2, 3, 4])).toBe(9);
});

test(`works with number array as string`, () => {
  expect(sum(["1", "2", "3"])).toBe(6);
});
