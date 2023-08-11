"use strict";

function ticketDatabase(ticketDescriptions, sortingCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  let tickets = [];

  while (ticketDescriptions[0] !== undefined) {
    let line = ticketDescriptions.shift();
    let [destination, price, status] = line.split("|");
    let ticket = new Ticket(destination, price, status);
    tickets.push(ticket);
  }

  if (sortingCriteria === "price") {
    tickets.sort((a, b) => a[sortingCriteria] - b[sortingCriteria]);
  } else {
    tickets.sort((a, b) =>
      a[sortingCriteria].localeCompare(b[sortingCriteria])
    );
  }

  for (let ticket of tickets) {
    console.log(ticket);
  }
  return tickets;
}

ticketDatabase(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
