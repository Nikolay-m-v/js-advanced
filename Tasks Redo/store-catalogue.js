"use strict";

function storeCatalogue(input) {
  let catalogue = {};

  for (let line of input) {
    let [product, price] = line.split(" : ");
    let letter = product[0];
    if (!catalogue.hasOwnProperty(letter)) {
      catalogue[letter] = {};
    }
    catalogue[letter][product] = price;
  }

  let sorted = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

  for (const letter of sorted) {
    console.log(letter);
    let sortedProduct = Object.keys(catalogue[letter]).sort((a, b) =>
      a.localeCompare(b)
    );
    for (const product of sortedProduct) {
      console.log(`${product}: ${catalogue[letter][product]}`);
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
