"use strict";

function townsToJson(input) {
  let array = [];

  for (let i = 0; i < input.length; i++) {
    let [town, latitude, longitude] = input[i]
      .split("|")
      .filter((el) => el.length !== 0)
      .map((el) => el.trim());

    array.push({
      Town: town,
      Latitude: Number(latitude).toFixed(2),
      Longitude: Number(longitude).toFixed(2),
    });
  }
  console.log(JSON.stringify(array));
}

townsToJson([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
