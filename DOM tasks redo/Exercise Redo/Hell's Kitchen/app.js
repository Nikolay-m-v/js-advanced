"use strict";

function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let inputArr = JSON.parse(document.querySelector("#input textarea").value);
  }
}
