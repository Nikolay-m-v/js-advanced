"use strict";

function cityRecord(name, population, treasury) {
  let record = {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: 10,

    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },

    applyGrowth(percentage) {
      this.population += (this.population * percentage) / 100;
    },

    applyRecession(percentage) {
      this.treasury -= (this.treasury * percentage) / 100;
    },
  };

  console.log(record);
  return record;
}

cityRecord("Santo Domingo", 12000, 23500);

const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);
