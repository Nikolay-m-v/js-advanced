"use strict";

(function main() {
  function createElements(elements) {
    console.log("creating elements");
    const trEl = document.createElement("tr");
    trEl.classList.add("row");

    const tdElCarMake = document.createElement("td");
    tdElCarMake.textContent = elements.carMake.value;

    const tdElCarModel = document.createElement("td");
    tdElCarModel.textContent = elements.carModel.value;

    const tdElProductionYear = document.createElement("td");
    tdElProductionYear.textContent = elements.carProductionYear.value;

    const tdElFuelType = document.createElement("td");
    tdElFuelType.textContent = elements.carFuelType.value;

    const tdElOriginalCost = document.createElement("td");
    tdElOriginalCost.textContent = elements.originalCost.value;

    const tdElSellingPrice = document.createElement("td");
    tdElSellingPrice.textContent = elements.sellingPrice.value;

    const tdElButtonsHolder = document.createElement("td");

    const editButton = document.createElement("button");
    editButton.textContent = "edit";
    editButton.classList.add("action-btn", "edit");

    const sellButton = document.createElement("button");
    sellButton.textContent = "sell";
    sellButton.classList.add("action-btn", "sell");

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
    console.log("appending elements");
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
    const createdElements = createElements(elements);
    appendElements(elements, createdElements);
  }

  function eventHandling(elements) {
    elements.publishButton.addEventListener("click", (event) => {
      event.preventDefault();
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
