class SummerCamp {
  constructor(organizer, location) {}

  registerParticipant(name, condition, money) {}

  unregisterParticipant(name) {
    const foundName = this.listOfParticipants.find(
      (participant) => participant.name === name
    );
    const foundNameIndex = this.listOfParticipants.findIndex(
      (participant) => participant.name === name
    );

    if (foundName === undefined) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }
    this.listOfParticipants.splice(foundNameIndex, 1);
    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, participant1, participant2) {}

  toString() {
    let result = [
      `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`,
    ];
    let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
    sorted.forEach((participant) =>
      result.push(
        `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`
      )
    );
    return result.join("\n");
  }
}
const summerCamp = new SummerCamp(
  "Jane Austen",
  "Pancharevo Sofia 1137, Bulgaria"
);
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.unregisterParticipant("Petar"));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));
