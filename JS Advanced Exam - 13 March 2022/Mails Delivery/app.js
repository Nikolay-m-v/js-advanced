"use strict";

function solution() {
  const inputs = {
    recipientName: document.getElementById("recipientName"),
    title: document.getElementById("title"),
    message: document.getElementById("message"),
  };

  const [addBtn, clearBtn] = Array.from(document.querySelectorAll("button"));

  addBtn.addEventListener("click", add);

  function add() {
    if (inputs.recipientName === "" || inputs.title === "" || message === "") {
      return;
    }
  }
}
