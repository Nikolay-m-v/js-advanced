"use strict";

class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (spaceRequired > this.spaceAvailable) {
      throw new Error(`Not enough space in the garden.`);
    } else {
      let plant = { plantName, spaceRequired, ripe: false, quantity: 0 };
      this.plants.push(plant);
      this.spaceAvailable -= spaceRequired;
      return `The ${plantName} has been successfully planted in the garden.`;
    }
  }
}
