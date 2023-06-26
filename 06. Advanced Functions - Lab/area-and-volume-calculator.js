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

function area() {}

function vol() {}

function solve() {}
