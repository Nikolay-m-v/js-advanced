"use strict";

function solution() {
  const inputs = {
    recipientName: document.getElementById("recipientName"),
    title: document.getElementById("title"),
    message: document.getElementById("message"),
  };

  const [addBtn, clearBtn] = Array.from(document.querySelectorAll("button"));

  addBtn.addEventListener("click", add);

  function add(event) {
    event.preventDefault();

    let recipientName = inputs.recipientName.value;
    let title = inputs.title.value;
    let message = inputs.message.value;

    if (recipientName === "" || title === "" || message === "") {
      return;
    }

    let li = document.createElement("li");
    let h4 = document.createElement("h4");
    let span = document.createElement("span");
    let div = document.createElement("div");
    let sendBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
  }
}
