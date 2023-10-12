"use strict";

function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let inputArr = JSON.parse(document.querySelector("#inputs textarea").value);
    let averageSalary = 0;
    let totalSalary = 0;
    let currentAverageSalary = 0;
    let bestRestaurant = "";
    let output = {};

    for (let inputElement of inputArr) {
      let restaurantInfo = inputElement.split(" - ");
      let restaurantName = restaurantInfo.shift();
      let workersData = restaurantInfo[0].split(", ");

      for (let worker of workersData) {
        let [name, salary] = worker.split(" ");
        if (!output.hasOwnProperty(restaurantName)) {
          output[restaurantName] = {};
        }

        if (output.hasOwnProperty(restaurantName)) {
          output[restaurantName][name] = Number(salary);
        }
      }
    }
  }
}
