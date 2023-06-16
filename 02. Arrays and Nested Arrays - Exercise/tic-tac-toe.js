"use strict";

function ticTacToe(input) {
  let dashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  let secondPlayerMark = "O";

  let hasFreeFields = (matrix) =>
    matrix.some((arr) => arr.some((value) => value === false));
  let win = false;
  let firstPlayerMark = "X";
}

ticTacToe([
  ["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"][
    ("0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1")
  ],
]);
