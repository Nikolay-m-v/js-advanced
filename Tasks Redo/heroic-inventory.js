"use strict";

function heroicInventory(input) {
  let register = [];

  for (let line of input) {
    let [name, level, items] = line.split(" / ");
    level = Number(level);
    items = items.split(", ");
    register.push({ name, level, items });
  }

  console.log(JSON.stringify(register));
}

heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
