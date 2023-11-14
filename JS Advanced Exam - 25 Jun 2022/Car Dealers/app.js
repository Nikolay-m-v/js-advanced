"use strict";

(function main() {
  function createElements(elements) {
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
    editButton.addEventListener("click", () => {
      editCar(elements, trEl);
    });

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

  function checkElements(elements) {
    const elementsToCheck = createElements(elements);
    console.log(elementsToCheck.tdElCarMake.textContent);

    if (
      elementsToCheck.tdElCarMake.textContent.length < 1 ||
      elementsToCheck.tdElCarModel.textContent.length < 1 ||
      elementsToCheck.tdElOriginalCost.textContent.length < 1 ||
      elementsToCheck.tdElSellingPrice.textContent.length < 1
    ) {
      console.log(elementsToCheck.tdElCarMake.textContent);

      return;
    }

    const createdElements = createElements(elements);
    appendElements(elements, createdElements);
  }

  function editCar(elements, row) {
    elements.carMake.value = row.children[0].textContent;
    elements.carModel.value = row.children[1].textContent;
    elements.carProductionYear.value = row.children[2].textContent;
    elements.carFuelType.value = row.children[3].textContent;
    elements.originalCost.value = row.children[4].textContent;
    elements.sellingPrice.value = row.children[5].textContent;

    row.remove();
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

    clearInputsValue(elements);
  }

  function clearInputsValue(elements) {
    elements.carMake.value = "";
    elements.carModel.value = "";
    elements.originalCost.value = "";
    elements.sellingPrice.value = "";
  }

  function publishCar(elements) {
    checkElements(elements);
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
