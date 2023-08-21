"use strict";

function register(input) {
  let carRegsiter = {};

  for (let line of input) {
    let [carBrand, carModel, producedCars] = line.split(" | ");

    if (!carRegsiter.hasOwnProperty(carBrand)) {
      carRegsiter[carBrand] = {};
    }
    if (!carRegsiter[carBrand].hasOwnProperty(carModel)) {
      carRegsiter[carBrand][carModel] = 0;
    }
    carRegsiter[carBrand][carModel] += Number(producedCars);
  }

  for (let [carBrand, carModel] of Object.entries(carRegsiter)) {
    console.log(`${carBrand}`);
    for (let [model, producedCars] of Object.entries(carModel)) {
      console.log(`###${model} -> ${producedCars}`);
    }
  }
}

register([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
