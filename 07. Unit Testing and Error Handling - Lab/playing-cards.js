"use strict";

function playingCards(face, suit) {
  const faces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  const suits = {
    S: "\u2660", // пика
    H: "\u2665", // купа
    D: "\u2666", // каро
    C: "\u2663", // спатия
  };

  if (faces.includes(face) === false) {
    throw new Error("Invalid face: " + face);
  }

  if (suits[suit] === undefined) {
    throw new Error("Invalid suit: " + suit);
  }

  const result = {
    face,
    suit: suits[suit],
    toString() {
      return this.face + this.suit;
    },
  };

  return result;
}

console.log(playingCards("8", "H"));

console.log(playingCards("A", "S"));
