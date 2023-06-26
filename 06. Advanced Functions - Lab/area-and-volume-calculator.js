"use strict";

function areaAndVolumeCalc(area, vol, input) {
  const inputArr = JSON.parse(input);

  const result = [];

  for (let cube of inputArr) {
    const current = {
      area: area.call(cube),
      volume: vol.call(cube),
    };

    result.push(current);
  }
  return result;
}

areaAndVolumeCalc(
  area,
  vol,
  `[
  {"x":"1","y":"2","z":"10"},
  {"x":"7","y":"7","z":"10"},
  {"x":"5","y":"2","z":"10"}
  ]`
);

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function solve() {}
