"use strict";

class Restaurant {
  constructor(budget) {
    this.budgetMoney = budget;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(products) {
    for (let line of products) {
      const [productName, productQuantity, productTotalPrice] = line.split(" ");
      productQuantity = Number(productQuantity);
      productTotalPrice = Number(productTotalPrice);
      if (productTotalPrice <= this.budgetMoney) {
        this.budgetMoney -= productTotalPrice;
        if (this.stockProducts.hasOwnProperty(productName) === false) {
          this.stockProducts[productName] = 0;
        }

        this.stockProducts[productName] += productQuantity;
        this.history.push(
          `Successfully loaded ${productQuantity} ${productName}`
        );
      } else {
        this.history.push(
          `There was not enough money to load ${productQuantity} ${productName}`
        );
      }
    }
    return this.history.join("\n");
  }

  addToMenu() {}
}

let kitchen = new Restaurant(1000);
console.log(
  kitchen.loadProducts([
    "Banana 10 5",
    "Banana 20 10",
    "Strawberries 50 30",
    "Yogurt 10 10",
    "Yogurt 500 1500",
    "Honey 5 50",
  ])
);
