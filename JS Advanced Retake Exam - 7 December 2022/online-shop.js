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
}