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

    const foundName = this.listOfParticipants.find(
      (participant) => participant.name === name
    );
    if (this.listOfParticipants.includes(foundName)) {
      return `The ${name} is already registered at the camp.`;
    }

    if (money < this.priceForTheCamp[condition]) {
      return `The money is not enough to pay the stay at the camp.`;
    }
    const participant = { name, condition, power: 100, wins: 0 };
    this.listOfParticipants.push(participant);
    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    const foundName = this.listOfParticipants.find(
      (name) => participant.name === name
    );
    const foundNameIndex = this.listOfParticipants.findIndex(
      (participant) => participant.name === name
    );
    if (foundNameIndex === -1) {
      throw new Error(`The ${name} is not registered in the camp.`); /// should be throw new Error but it exits my application and doesnt output the third outcome.
    }
    this.listOfParticipants.splice(foundNameIndex, 1);
    return `The ${name} was removed successfully.`;
  }

  timeToPlay(typeOfGame, participant1, participant2) {
    const player1 = this.listOfParticipants.find(
      (participant) => participant.name === participant1
    );
    const player2 = this.listOfParticipants.find(
      (participant) => participant.name === participant2
    );
    if (typeOfGame === "Battleship") {
      if (player1 === undefined) {
        throw new Error(`Invalid entered name/s`);
      }
      player1.power += 20;
      return `The ${player1.name} successfully completed the game ${typeOfGame}`;
    } else if (typeOfGame === "WaterBalloonFights") {
      if (
        !this.listOfParticipants.includes(player1) ||
        !this.listOfParticipants.includes(player2)
      ) {
        throw new Error(`Invalid entered name/s`);
      }

      if (player1.condition !== player2.condition) {
        return `Choose players with equal condition.`; /// should be throw new error
        throw new Error(`Choose players with equal condition.`);
      }

      if (player1.power > player2.power) {
        player1.wins += 1;
        return `The ${player1.name} is winner in the game ${typeOfGame}`;
      } else if (player2.power > player1.power) {
        participant2.wins += 1;
        return `The ${player2.name} is winner in the game ${typeOfGame}`;
      } else if (player1.power === player2.power) {
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
    return output.join("\n");
  }
}

// const summerCamp = new SummerCamp(
//   "Jane Austen",
//   "Pancharevo Sofia 1137, Bulgaria"
// );
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp(
//   "Jane Austen",
//   "Pancharevo Sofia 1137, Bulgaria"
// );
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp(
//   "Jane Austen",
//   "Pancharevo Sofia 1137, Bulgaria"
// );
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(
//   summerCamp.timeToPlay(
//     "WaterBalloonFights",
//     "Petar Petarson",
//     "Sara Dickinson"
//   )
// );
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(
//   summerCamp.timeToPlay(
//     "WaterBalloonFights",
//     "Petar Petarson",
//     "Dimitur Kostov"
//   )
// );

const summerCamp = new SummerCamp(
  "Jane Austen",
  "Pancharevo Sofia 1137, Bulgaria"
);
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(
  summerCamp.timeToPlay(
    "WaterBalloonFights",
    "Petar Petarson",
    "Sara Dickinson"
  )
);
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(
  summerCamp.timeToPlay(
    "WaterBalloonFights",
    "Petar Petarson",
    "Dimitur Kostov"
  )
);

console.log(summerCamp.toString());
