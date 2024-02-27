"use strict";

const rgbToHexColor = require("./rgb-to-hex");

test("Works with numeric values between 0 and 255", () => {
  expect(rgbToHexColor(255, 0, 0)).toBe("#FF0000");
});

test("returns undefined for invalid RGB values", () => {
  expect(rgbToHexColor(-1, 0, 0)).toBeUndefined(); // Negative red value
  expect(rgbToHexColor(256, 0, 0)).toBeUndefined(); // Red value exceeds 255
  expect(rgbToHexColor(0, -1, 0)).toBeUndefined(); // Negative green value
  expect(rgbToHexColor(0, 256, 0)).toBeUndefined(); // Green value exceeds 255
  expect(rgbToHexColor(0, 0, -1)).toBeUndefined(); // Negative blue value
  expect(rgbToHexColor(0, 0, 256)).toBeUndefined(); // Blue value exceeds 255
  expect(rgbToHexColor("invalid", 0, 0)).toBeUndefined(); // Invalid red value
  expect(rgbToHexColor(0, "invalid", 0)).toBeUndefined(); // Invalid green value
  expect(rgbToHexColor(0, 0, "invalid")).toBeUndefined(); // Invalid blue value
  expect(rgbToHexColor()).toBeUndefined(); // No arguments
  expect(rgbToHexColor(255)).toBeUndefined(); // Missing green and blue values
  expect(rgbToHexColor(255, 255)).toBeUndefined(); // Missing blue value
  expect(rgbToHexColor(255, 255, 255, 255)).toBeUndefined(); // Extra argument
});
