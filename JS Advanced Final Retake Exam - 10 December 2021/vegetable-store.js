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

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    for (let line of selectedProducts) {
      let [type, quantity] = line.split(" ");
      quantity = Number(quantity);

      let product = this.availableProducts.find(
        (vegetable) => vegetable.type === type
      );
      if (product === undefined) {
        throw new Error(
          `${type} is not available in the store, your current bill is ${totalPrice.toFixed(
            2
          )}`
        );
      }

      if (quantity > product.quantity) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is ${totalPrice}`
        );
      }
      totalPrice += product.price * quantity;
      product.quantity -= quantity;
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}`;
  }
}
