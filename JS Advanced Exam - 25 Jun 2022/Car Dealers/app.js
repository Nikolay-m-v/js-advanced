"use strict";

(function main() {
  function createElements(elements) {
    const trEl = document.createElement("tr");
    trEl.classList.add("row");

    const tdElCarMake = document.createElement("td");
    tdElCarMake.value = elements.carMake.value;

    const tdElCarModel = document.createElement("td");
    tdElCarModel.value = elements.carModel.value;

    const tdElProductionYear = document.createElement("td");
    tdElProductionYear.value = elements.carProductionYear.value;

    const tdElFuelType = document.createElement("td");
    tdElFuelType.value = elements.carFuelType.value;

    const tdElOriginalCost = document.createElement("td");
    tdElOriginalCost.value = elements.originalCost.value;

    const tdElSellingPrice = document.createElement("td");
    tdElSellingPrice.value = elements.sellingPrice.value;

    const tdElButtonsHolder = document.createElement("td");

    const editButton = document.createElement("button");
    editButton.classList.add("action-btn", "edit");

    const sellButton = document.createElement("button");
    sellButton.classList.add("action-btn", "sell");

    appendElements();

    return {
      trEl,
      tdElCarMake,
      tdElCarModel,
      tdElProductionYear,
      tdElFuelType,
      tdElOriginalCost,
      tdElSellingPrice,
      tdElButtonsHolder,
      editButton,
      sellButton,
    };
  }

  function appendElements(elements, elementsToAppend) {
    elements.tableBodyElement.appendChild(elementsToAppend.trEl);
    elementsToAppend.trEl.appendChild(elementsToAppend.tdElCarMake);
    elementsToAppend.trEl.appendChild(elementsToAppend.tdElCarModel);
    elementsToAppend.trEl.appendChild(elementsToAppend.tdElProductionYear);
    elementsToAppend.trEl.appendChild(elementsToAppend.tdElFuelType);
    elementsToAppend.trEl.appendChild(elementsToAppend.tdElOriginalCost);
    elementsToAppend.trEl.appendChild(elementsToAppend.tdElSellingPrice);
    elementsToAppend.trEl.appendChild(elementsToAppend.tdElButtonsHolder);
    elementsToAppend.tdElButtonsHolder.appendChild(elementsToAppend.editButton);
    elementsToAppend.tdElButtonsHolder.appendChild(elementsToAppend.sellButton);
  }

  function publishCar(elements) {
    createElements(elements);
  }

  function eventHandling(elements) {
    elements.publishButton.addEventListener("click", () => {
      publishCar(elements);
    });
  }

  function gatherElements() {
    const carMake = document.getElementById("make");
    const carModel = document.getElementById("model");
    const carProductionYear = document.getElementById("year");
    const carFuelType = document.getElementById("fuel");
    const originalCost = document.getElementById("original-cost");
    const sellingPrice = document.getElementById("selling-price");
    const tableBodyElement = document.getElementById("table-body");
    const publishButton = document.getElementById("publish");

    return {
      carMake,
      carModel,
      carProductionYear,
      carFuelType,
      originalCost,
      sellingPrice,
      tableBodyElement,
      publishButton,
    };
  }

  eventHandling(gatherElements());
})();
