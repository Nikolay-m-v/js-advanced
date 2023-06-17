"use strict";

function townPopulation(array) {
  let towns = {};

  for (let line of array) {
    let [town, population] = line.split(" <-> ");
    if (!towns.hasOwnProperty(town)) {
      towns[town] = 0;
    }
    towns[town] += Number(population);
  }

  Object.keys(towns).forEach((town) => console.log(`${town} : ${towns[town]}`));
}

townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
