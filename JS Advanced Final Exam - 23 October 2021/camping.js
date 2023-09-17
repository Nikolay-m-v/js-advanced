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

  timeToPlay(typeOfGame, participant1, participant2) {
    if (typeOfGame === "Battleship") {
      if (!this.listOfParticipants.includes(participant1)) {
        throw new Error(`Invalid entered name/s`);
      }
      participant1.power += 20;
      return `The ${participant1.name} successfully completed the game ${typeOfGame}`;
    } else if (typeOfGame === "WaterBalloonFights") {
      if (
        !this.listOfParticipants.includes(participant1) ||
        !this.listOfParticipants.includes(participant2)
      ) {
        throw new Error(`Invalid entered name/s`);
      }

      if (!participant1[condition] === participant2[condition]) {
        throw new Error(`Choose players with equal condition.`);
      }

      if (participant1.power > participant2.power) {
        participant1[wins] += 1;
        return `The ${participant1.name} is winner in the game ${typeOfGame}`;
      } else if (participant2.power > participant1.power) {
        participant2[wins] += 1;
        return `The ${participant2.name} is winner in the game ${typeOfGame}`;
      } else if (participant1.power === participant2.power) {
        return `There is no winner`;
      }
    }
  }

  toString() {
    let output = [
      `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`,
    ];
    let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
    sorted.forEach((participant) =>
      output.push(
        `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`
      )
    );
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
