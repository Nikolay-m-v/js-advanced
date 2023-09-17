"use strict";

class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp.hasOwnProperty(condition)) {
      throw new Error(`Unsuccessful registration at the camp.`);
    }

    if (this.listOfParticipants.includes(name)) {
      return `The ${name} is already registered at the camp.`;
    }

    if (money < this.priceForTheCamp[condition]) {
      return `The money is not enough to pay the stay at the camp.`;
    }
    const participant = { name, condition, power: 100, wins: 0 };
    this.listOfParticipants.push(participant);
    return `The ${name} was successfully registered.`;
  }

  unregisteredParticipant(name) {
    const foundName = this.listOfParticipants.find(
      (participant) => participant.name === name
    );
    const foundNameIndex = this.listOfParticipants.findIndex(
      (participant) => participant.name === name
    );
    if (!this.listOfParticipants.includes(name)) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }
    this.listOfParticipants.splice(foundNameIndex, 1);
    return `The ${name} was removed successfully.`;
  }
}

const summerCamp = new SummerCamp(
  "Jane Austen",
  "Pancharevo Sofia 1137, Bulgaria"
);
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
