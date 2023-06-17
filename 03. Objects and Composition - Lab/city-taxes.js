"use strict";

function cityTaxes(name, population, treasury) {
  let object = {
    name,
    population,
    treasury,
    taxRate: 10,

    collectTaxes() {
      this.treasury += Math.floor(this.population * this.taxRate);
    },

    applyGrowth(percentage) {
      this.population += Math.floor((this.population * percentage) / 100);
    },

    applyRecession(percentage) {
      this.treasury -= Math.floor((this.treasury * percentage) / 100);
    },
  };
  console.log(object);
  return object;
}

cityTaxes("Tortuga", 7000, 15000);
