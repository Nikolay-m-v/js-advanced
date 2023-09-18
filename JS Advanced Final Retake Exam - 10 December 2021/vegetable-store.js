"use strict";

class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    let uniqueTypes = [];

    for (let line of vegetables) {
      let [type, quantity, price] = line.split(" ");
      quantity = Number(quantity);
      price = Number(price);

      let product = this.availableProducts.find(
        (vegetable) => vegetable.type === type
      );
      if (product === undefined) {
        let vegetable = {
          type,
          quantity,
          price,
        };
        this.availableProducts.push(vegetable);
        uniqueTypes.push(type);
      } else {
        product.quantity += quantity;
        if (product.price < price) {
          product.price = price;
        }
      }
    }
    return `Successfully added ${uniqueTypes.join(", ")}`;
  }
}
