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

  ripenPlant(plantName, quantity) {
    let plant = this.plants.find((p) => p.plantName === plantName);
    if (this.plants.includes(plant) === false) {
      throw new Error(`There is no ${plantName} in the garden.`);
    } else if (quantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    } else if (plant.ripe === true) {
      throw new Error(`The ${plantName} is already ripe.`);
    }
    plant.ripe = true;
    plant.quantity += quantity;
    if (quantity === 1) {
      return `${quantity} ${plantName} has been successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have been succesffully ripened.`;
    }
  }

  harvestPlant(plantName) {
    const plant = this.plants.find((p) => (p.plantName = plantName));
    if (this.plants.includes(plant) === false) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (!plant.ripe) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }
    let indexOfPlant = this.plants.indexOf(plant);
    this.plants.splice(indexOfPlant, 1);
    let harvestedPlant = {
      plantName,
      quantity: plant.quantity,
    };
    this.storage.push(harvestedPlant);
    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    let output = [`The garden has ${this.spaceAvailable} free space left.`];

    let plantsInTheGarden = this.plants.map((plant) => plant.plantName);
    plantsInTheGarden.sort((a, b) => a.localeCompare(b));
    let secondRow = `Plants in the garden: ${plantsInTheGarden.join("\n")}`;
    output.push(secondRow);
    let thirdRow = `Plants in the storage: The storage is empty.`;
    if (this.storage.length !== 0) {
      let plantsInStorage = this.storage.map(
        (p) => `${p.plantName} (${p.quantity})`
      );
      thirdRow = `Plants in storage: ${plantsInStorage.join(", ")}`;
    }
    output.push(thirdRow);
    return output.join("\n");
  }
}
