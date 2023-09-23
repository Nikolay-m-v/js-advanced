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
      return `You have enough from product ${foundProduct.product}`;
    }
    let difference = minimalQuantity - foundProduct.quantity;
    foundProduct.quantity = minimalQuantity;
    return `You added ${difference} more from the ${foundProduct.product} products.`;
  }

  sellProduct(product) {
    const foundProduct = this.products.find((p) => p.product === product);
    if (!foundProduct) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    foundProduct.quantity--;
    this.sales.push({ product, quantity: 1 });

    return `The ${foundProduct.product} has been successfully sold.`;
  }

  revision() {
    if (this.sales.length === 0) {
      throw new Error(`There are no sales today!`);
    }
    const result = [`Products in the warehouse:`];
    let soldProduct = 0;
    this.sales.forEach((sale) => (soldProduct += sale.quantity));
    result.push(
      `You sould ${soldProduct} products today!`,
      "Products in the warehouse:"
    );
    this.products.forEach((p) =>
      result.push(`${p.product}-${p.quantity} more left`)
    );
  }
}

// const myOnlineShop = new OnlineShop(500);
// console.log(myOnlineShop.loadingStore("headphones", 10, 200));
// console.log(myOnlineShop.loadingStore("laptop", 5, 200));
// console.log(myOnlineShop.loadingStore("TV", 40, 500));

// const myOnlineShop = new OnlineShop(500);
// console.log(myOnlineShop.loadingStore("headphones", 10, 200));
// console.log(myOnlineShop.loadingStore("laptop", 5, 200));

// console.log(myOnlineShop.quantityCheck("headphones", 10));
// console.log(myOnlineShop.quantityCheck("laptop", 10));
// console.log(myOnlineShop.quantityCheck("TV", 40));

const myOnlineShop = new OnlineShop(500);
console.log(myOnlineShop.loadingStore("headphones", 10, 200));
console.log(myOnlineShop.loadingStore("laptop", 5, 200));

console.log(myOnlineShop.quantityCheck("headphones", 10));
console.log(myOnlineShop.quantityCheck("laptop", 10));

console.log(myOnlineShop.sellProduct("headphones"));
console.log(myOnlineShop.sellProduct("laptop"));
console.log(myOnlineShop.sellProduct("keyboard"));
