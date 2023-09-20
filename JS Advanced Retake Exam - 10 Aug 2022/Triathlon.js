"use strict";

class Triathlon {
  constructor(competitionName) {
    this.competitionName = competitionName;
    this.participants = {};
    this.listOfFinalists = [];
  }

  addParticipant(participantName, participantGender) {
    if (this.participants.hasOwnProperty(participantName)) {
      return `${participantName} has already been added to the list.`;
    } else {
      this.participants[participantName] = participantGender;
      return `A new participant has been added - ${participantName}`;
    }
  }
}
