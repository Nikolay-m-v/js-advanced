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
    return `Sucessfully added ${uniqueTypes.join(", ")}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;

    for (let line of selectedProducts) {
      let [type, quantity] = line.split(" ");
      quantity = Number(quantity);
      let product = this.availableProducts.find(
        (vegetable) => vegetable.type === type
      );
      if (product === undefined || quantity > product.quantity) {
        throw new Error(
          `The quantity ${quantity} is not available in the store, for the vegetable ${type} your current bil is ${totalPrice.toFixed(
            2
          )}`
        );
      }

      totalPrice += product.price * quantity;
      product.quantity -= quantity;
    }
    return `Great choice! You must pay the following amount ${totalPrice.toFixed(
      2
    )}`;
  }

  rottingVegetable(type, quantity) {
    quantity = Number(quantity);
    let product = this.availableProducts.find(
      (vegetable) => vegetable.type === type
    );
    if (product === undefined) {
      throw new Error(`${type} is not available in the store.`);
    }
    if (quantity > product.quantity) {
      product.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    } else {
      product.quantity -= quantity;
      return `Some quantity of ${type} has been removed.`;
    }
  }

  revision() {
    let revision = [];
    revision.push(`Available vegetables:`);
    let sorted = this.availableProducts.sort((a, b) => a.price - b.price);
    let secondRow = sorted.map(
      (vegetable) =>
        `${vegetable.type}-${vegetable.quantity}-${vegetable.price}`
    );
    revision.push(secondRow);

    let thirdRow = `The onwer of the store is ${this.owner}, and the location is ${this.location}`;
    revision.push(thirdRow);

    return revision.join("\n");
  }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
console.log(vegStore.revision());
