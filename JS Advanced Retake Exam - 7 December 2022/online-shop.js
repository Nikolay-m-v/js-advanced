"use strict";

class OnlineShop {
  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
  }

  loadingStore(product, quantity, spaceRequired) {
    if (spaceRequired > this.warehouseSpace) {
      throw new Error(`Not enough space in the warehouse.`);
    }
    this.products.push({ product, quantity });
    this.warehouseSpace -= spaceRequired;
    return `The ${product} has been successfully delivered in the warehouse.`;
  }

  quantityCheck(product, minimalQuantity) {
    const foundProduct = this.products.find((p) => p.product === product);
    if (foundProduct === undefined) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    if (minimalQuantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }
    if (minimalQuantity <= foundProduct.quantity) {
      return `You have enough from product ${foundProduct}`;
    }
    foundProduct.quantity = minimalQuantity;
    return `You added ${
      foundProduct.quantity - minimalQuantity
    } more from the ${minimalQuantity - foundProduct.quantity} products.`;
  }
}
