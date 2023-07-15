"use strict";

function carFactory(car) {
  const modelCar = {
    model: null,
    engine: { power: null, volume: null },
    carriage: { type: null, color: null },
    wheels: [],
  };
  modelCar.model = car.model;

  if (car.power <= 90) {
    modelCar.engine.power = 90;
    modelCar.engine.volume = 1800;
  } else if (car.power <= 120) {
    modelCar.engine.power = 120;
    modelCar.engine.volume = 2400;
  } else if (car.power <= 200) {
    modelCar.engine.power = 200;
    modelCar.engine.volume = 3500;
  }

  modelCar.carriage.type = car.carriage;
  modelCar.carriage.color = car.color;

  if (car.wheelsize % 2 === 0) {
    car.wheelsize--;
  }

  modelCar.wheels.push(
    car.wheelsize,
    car.wheelsize,
    car.wheelsize,
    car.wheelsize
  );
  console.log(modelCar);
}

carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
carFactory({
  model: "Ferrari GT",
  power: 200,
  color: "red",
  carriage: "coupe",
  wheelsize: 14,
});
