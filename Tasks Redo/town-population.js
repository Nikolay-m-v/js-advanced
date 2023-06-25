"use strict";

function townPopulation(array) {
  let record = {};

  for (let line of array) {
    let [town, population] = line.split(" <-> ");
    if (!record.hasOwnProperty(town)) {
      record[town] = 0;
    }
    record[town] += Number(population);
  }

  Object.keys(record).forEach((town) =>
    console.log(`${town} : ${record[town]}`)
  );
}

townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
