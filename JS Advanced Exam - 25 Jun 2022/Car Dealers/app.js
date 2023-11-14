"use strict";

(function main() {
  function eventHandling(elements) {}

  function gatherElements() {
    const carMake = document.getElementById("make");
    const carModel = document.getElementById("model");
    const carProductionYear = document.getElementById("year");
    const carFuelType = document.getElementById("fuel");
    const originalCost = document.getElementById("original-cost");
    const sellingPrice = document.getElementById("selling-price");
    const tableBodyElement = document.getElementById("table-body");

    return {
      carMake,
      carModel,
      carProductionYear,
      carFuelType,
      originalCost,
      sellingPrice,
      tableBodyElement,
    };
  }

  eventHandling(gatherElements());
})();
