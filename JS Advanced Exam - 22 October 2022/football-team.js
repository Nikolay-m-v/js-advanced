"use strict";

const bootstrap = require("bootstrap");

class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    const uniqueNames = [];
    footballPlayers.forEach((line) => {
      let [name, age, value] = line.split("/");
      value = Number(value);
      const foundPlayer = this.invitedPlayers.find(
        (player) => player.name === name
      );
      if (foundPlayer) {
        if (value > foundPlayer.value) {
          foundPlayer.value = value;
        }
      } else {
        uniqueNames.push(name);
        this.invitedPlayers.push({ name, age, value });
      }
    });
    return `You have successfully invited ${uniqueNames.join(", ")}`;
  }

  signContract(selectedPlayer) {
    let [name, playerOffer] = selectedPlayer.split("/");
    playerOffer = Number(playerOffer);
    const foundPlayer = this.invitedPlayers.find(
      (player) => player.name === name
    );
    if (!foundPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (playerOffer < foundPlayer.value) {
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${
          foundPlayer.name
        }, ${
          foundPlayer.value - playerOffer
        } million more are needed to sign the contract`
      );
    } else {
      foundPlayer.value = "Bought";
    }
    return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars`;
  }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(
  fTeam.newAdditions([
    "Kylian Mbappé/23/160",
    "Lionel Messi/35/50",
    "Pau Torres/25/52",
  ])
);
