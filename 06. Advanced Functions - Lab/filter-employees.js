"use strict";

function filter(data, criteria) {
  let [criteriaWord, criteriaValue] = criteria.split("-");

  JSON.parse(data)
    .filter((employee) => employee[criteriaWord] === criteriaValue)
    .forEach((employee, number) =>
      console.log(
        `${number++}. ${employee.first_name} ${employee.last_name} - ${
          employee.email
        } `
      )
    );
}

filter(
  `[{
  "id": "1",
  "first_name": "Ardine",
  "last_name": "Bassam",
  "email": "abassam0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Jost",
  "email": "kjost1@forbes.com",
  "gender": "Female"
},  
{
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}]`,
  "gender-Female"
);
