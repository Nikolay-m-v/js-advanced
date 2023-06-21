"use strict";

function cityRecord(name, population, treasury) {
  let object = {
    name,
    population,
    treasury,
  };
  console.log(object);
  return object;
}

cityRecord("Tortuga", 7000, 15000);
cityRecord("Balencia", 300, 1000);
