"use strict";

function solve() {
  const inputs = {
    recipientName: document.getElementById("recipientName"),
    title: document.getElementById("title"),
    message: document.getElementById("message"),
  };

  const addBtn = document.getElementById("add");
  const resetBtn = document.getElementById("reset");

  resetBtn.addEventListener("click", reset);

  function reset(event) {
    event.preventDefault();
    inputs.recipientName.value = "";
    inputs.title.value = "";
    inputs.message.value = "";
  }

  addBtn.addEventListener("click", add);

  function add(event) {
    event.preventDefault();

    let recipientName = inputs.recipientName.value;
    let title = inputs.title.value;
    let message = inputs.message.value;

    if (recipientName === "" || title === "" || message === "") {
      return;
    }

    const ul = document.getElementById("list");

    const li = document.createElement("li");

    let titleH4 = document.createElement("h4");
    titleH4.textContent = `Title: ${title}`;

    let nameH4 = document.createElement("h4");
    nameH4.textContent = `Recipient Name: ${recipientName}`;

    let span = document.createElement("span");
    span.textContent = message;

    let div = document.createElement("div");
    div.id = "list-action";

    let sendBtn = document.createElement("button");
    sendBtn.type = "submit";
    sendBtn.id = "send";
    sendBtn.textContent = "Send";

    let deleteBtn = document.createElement("button");
    deleteBtn.type = "submit";
    deleteBtn.id = "delete";
    deleteBtn.textContent = "Delete";

    ul.appendChild(li);
    li.appendChild(titleH4);
    li.appendChild(nameH4);
    li.appendChild(span);
    li.appendChild(div);
    div.appendChild(sendBtn);
    div.appendChild(deleteBtn);

    inputs.recipientName.value = "";
    inputs.title.value = "";
    inputs.message.value = "";

    sendBtn.addEventListener("click", send);

    function send() {
      li.remove();

      const ulSent = document.querySelector(".sent-list");

      const liSent = document.createAttribute("li");
    }
  }
}
