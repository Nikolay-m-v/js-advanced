"use strict";

class Engine {
  type;
  power;
  volume;

  constructor(type, power, volume) {
    this.type = type;
    this.power = power;
    this.volume = volume;
  }
}

class Carriage {
  type;
  color;

  constructor(type, color) {
    this.color = color;

    if (type === "hatchback" || type === "coupe") {
      this.type = type;
    } else {
      throw new Error("we only have hatcback and coupe carriages");
    }
  }
}

class Tires {
  size;
  wheels;

  constructor(size) {
    if (size % 2 === 0) {
      this.size = size - 1;
    } else {
      this.size = size;
    }

    this.wheels = [this.size, this.size, this.size, this.size];
  }
}

function chooseWheels(wheelsize) {
  return new Tires(wheelsize);
}

function chooseEngine(power) {
  const smallEngine = new Engine("small", 90, 1800);
  const normalEngine = new Engine("normal", 120, 2400);
  const monsterEngine = new Engine("monster", 200, 3500);

  const enginesInStorage = [smallEngine, normalEngine, monsterEngine];

  const engineToChoose = enginesInStorage.find(
    (engine) => engine.power >= power
  );

  if (!engineToChoose) {
    throw new Error(`No engine found matching the criteria ${power}`);
  }

  return engineToChoose;
}

function assembleCar(requirements) {
  const model = requirements.model;
  const engine = chooseEngine(requirements.power);
  const carriage = new Carriage(requirements.carriage, requirements.color);
  const tires = new Tires(requirements.wheelsize);

  return {
    model: model,
    engine: {
      power: engine.power,
      volume: engine.volume,
    },
    carriage: {
      type: carriage.type,
      color: carriage.color,
    },
    wheels: tires.wheels,
  };
}

const sampleRequirements = {
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
};

console.log(assembleCar(sampleRequirements));
