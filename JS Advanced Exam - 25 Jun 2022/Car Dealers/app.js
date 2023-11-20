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
    sellButton.addEventListener("click", () => {
      sellCar(elements, trEl);
    });

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

  function sellCar(elements, row) {
    const liEl = document.createElement("li");
    liEl.classList.add("each-list");
    const spanElCarMakeAndModel = document.createElement("span");
    spanElCarMakeAndModel.textContent = `${row.children[0].textContent} ${row.children[1].textContent}`;

    const spanElCarProductionYear = document.createElement("span");
    spanElCarProductionYear.textContent = `${row.children[2].textContent}`;

    const spanElProfitFromSale = document.createElement("span");
    spanElProfitFromSale.textContent =
      row.children[5].textContent - row.children[4].textContent;

    elements.soldCarsList.appendChild(liEl);
    liEl.appendChild(spanElCarMakeAndModel);
    liEl.appendChild(spanElCarProductionYear);
    liEl.appendChild(spanElProfitFromSale);

    elements.profitMade.textContent = `${(
      parseFloat(elements.profitMade.textContent) +
      parseFloat(spanElProfitFromSale.textContent)
    ).toFixed(2)}`;

    removeRow(row);
  }

  function appendElementsSellCar(elements, row) {}

  function removeRow(row) {
    row.remove();
  }

  function checkInputValues(elements) {
    const createdElements = createElements(elements);

    if (
      createdElements.tdElCarMake.textContent.length < 1 ||
      createdElements.tdElCarModel.textContent.length < 1 ||
      createdElements.tdElOriginalCost.textContent.length < 1 ||
      createdElements.tdElSellingPrice.textContent.length < 1
    ) {
      return;
    }

    appendElements(elements, createdElements);
  }

  function editCar(elements, row) {
    elements.carMake.value = row.children[0].textContent;
    elements.carModel.value = row.children[1].textContent;
    elements.carProductionYear.value = row.children[2].textContent;
    elements.carFuelType.value = row.children[3].textContent;
    elements.originalCost.value = row.children[4].textContent;
    elements.sellingPrice.value = row.children[5].textContent;

    removeRow(row);
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

    clearInputValues(elements);
  }

  function clearInputValues(elements) {
    elements.carMake.value = "";
    elements.carModel.value = "";
    elements.originalCost.value = "";
    elements.sellingPrice.value = "";
  }

  function publishCar(elements) {
    checkInputValues(elements);
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
    const soldCarsList = document.getElementById("cars-list");
    const profitMade = document.getElementById("profit");

    return {
      carMake,
      carModel,
      carProductionYear,
      carFuelType,
      originalCost,
      sellingPrice,
      tableBodyElement,
      publishButton,
      soldCarsList,
      profitMade,
    };
  }

  eventHandling(gatherElements());
})();
