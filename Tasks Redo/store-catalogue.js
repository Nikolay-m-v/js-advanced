"use strict";

function storeCatalogue(input) {
  let catalogue = {};

  for (let line of input) {
    let [product, price] = line.split(" : ");
    let firstLetter = product[0];
    if (!catalogue.hasOwnProperty(firstLetter)) {
      catalogue[firstLetter] = {};
    }
    catalogue[firstLetter][product] = { price };
  }

  let sorted = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

  for (let letter of sorted) {
    console.log(letter);
    let sortedProduct = Object.keys(catalogue[firstLetter][product]);
    for (let product of sortedProduct) {
    }
  }
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
