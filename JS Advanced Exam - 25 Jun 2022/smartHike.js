"use strict";

class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (this.goals.hasOwnProperty(peak)) {
      return `${peak} has already been added to your goals`;
    } else {
      this.goals[peak] = altitude;
      return `You have successfully added a new goal - ${peak}`;
    }
  }

  hike(peak, time, difficultyLevel) {
    if (this.goals.hasOwnProperty(peak) === false) {
      throw new Error(`${peak} is not in your current goals`);
    }
    if (this.resources <= 0) {
      throw new Error(`You don't have enough resources to start the hike`);
    }
    let difference = time * 10;
    if (this.resources - difference < 0) {
      return `You don't have enough resources to complete the hike`;
    } else {
      this.resources -= difference;
      this.listOfHikes.push({ peak, time, difficultyLevel });
      return `You hiked ${peak} for ${time} hours and have ${this.resources} resources left`;
    }
  }

  rest(time) {
    this.resources += time * 10;
    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      `You have rested for ${time} hours and gained ${time * 10} resources`;
    }
  }
}

const user = new SmartHike("Vili");
console.log(user.addGoal("Musala", 2925));
console.log(user.addGoal("Rui", 1706));
console.log(user.addGoal("Musala", 2925));
