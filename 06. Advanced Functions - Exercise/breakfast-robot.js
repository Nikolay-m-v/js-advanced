"use strict";

function solution() {
  const recipes = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },

    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },

    burger: {
      carbohydrate: 5,
      flavour: 3,
      fat: 7,
    },

    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },

    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };
  const stock = {
    protein: 0,
    flavour: 0,
    carbohydrate: 0,
    fat: 0,
  };

  const commands = {
    restock,
    prepare,
    report,
  };

  return manager;

  function manager(line) {
    const [command, param, quantity] = line.split(" ");
    return commands[command](param, quantity);
  }

  function restock(ingridient, quantity) {
    stock[ingridient] += Number(quantity);
    return "Success";
  }

  function prepare(recipe, quantityMeals) {
    quantityMeals = Number(quantityMeals);
    const order = Object.entries(recipes[recipe]);
    order.forEach((ingridient) => (ingridient[1] *= quantityMeals));

    for (let [ingridient, requiredQuantity] of order) {
      if (stock[ingridient] < requiredQuantity) {
        return `Error: not enough ${ingridient} in stock`;
      }
    }

    order.forEach(
      ([ingridient, requiredQuantity]) =>
        (stock[ingridient] -= requiredQuantity)
    );
    return "Success";
  }

  function report() {
    return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
  }
}

let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
