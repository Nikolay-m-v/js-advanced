"use strict";

class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsePower, price, mileage) {
    if (model === "" || horsePower < 0 || price < 0 || mileage < 0) {
      throw new Error("Invalid input!");
    }
    let car = { model, horsePower, price, mileage };
    this.availableCars.push(car);
    return `New car added: ${model} - ${horsePower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$ `;
  }

  sellCar(model, desiredMileage) {
    let car = this.availableCars.find((auto) => auto.model === model);
    let carIndex = this.availableCars.findIndex((auto) => auto.model === model);
    if (car === undefined) {
      throw new Error(`${model} was not found!`);
    }

    if (car.mileage <= desiredMileage) {
      car.price = car.price;
    } else if (car.mileage - desiredMileage <= 40000) {
      car.price *= 0.95;
    } else if (car.mileage - desiredMileage > 40000) {
      car.price *= 0.9;
    }

    this.availableCars.slice(carIndex, 1);
    this.soldCars.push({
      model,
      horsePower: car.horsePower,
      soldPrice: car.price,
    });
    this.totalIncome += car.price;
    return `${model} was sold for ${car.price.toFixed(2)}$`;
  }
}
