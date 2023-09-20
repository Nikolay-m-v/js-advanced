"use strict";

class Triathlon {
  constructor(competitionName) {
    this.competitionName = competitionName;
    this.participants = {};
    this.listOfFinalists = [];
  }

  addParticipant(participantName, participantGender) {
    if (this.participants[participantName]) {
      return `${participantName} has already been added to the list.`;
    } else {
      this.participants[participantName] = participantGender;
      return `A new participant has been added - ${participantName}`;
    }
  }

  completeness(participantName, condition) {
    if (!this.participants[participantName]) {
      throw new Error(
        `${participantName} is not in the current participants list.`
      );
    }
    if (this.participants[participantName] && condition < 30) {
      throw new Error(
        `${participantName} is not well prepared and cannot finish any discipline.`
      );
    }
    let disciplinesCompleted = Math.floor(condition / 30);
    if (disciplinesCompleted < 3) {
      return `${participantName} could only complete ${disciplinesCompleted} of the disciplines.`;
    } else {
      this.listOfFinalists.push({
        participantName,
        participantGender: this.participants[participantName],
      });
      delete this.participants[participantName];
      return `Congratulations, ${participantName} finished the whole competition`;
    }
  }

  rewarding(participantName) {
    const foundParticipant = this.listOfFinalists.find(
      (participant) => participant.participantName === participantName
    );
    if (foundParticipant === undefined) {
      return `${participantName} is not in the current finalists list.`;
    } else {
      return `${participantName} was rewarded with a trophy for his performance.`;
    }
  }
}
