"use strict";

window.addEventListener("load", solve);
function solve() {
  const inputs = {
    type: document.getElementById("type-product"),
    description: document.getElementById("description"),
    name: document.getElementById("client-name"),
    phone: document.getElementById("client-phone"),
  };

  const orders = {
    received: document.getElementById("received-orders"),
    completed: document.getElementById("completed-orders"),
  };

  const [sendBtn, clearBtn] = Array.from(document.querySelectorAll("button"));

  sendBtn.addEventListener("click", send);

  function send(event) {
    event.preventDefault();

    let type = inputs.type.value;
    let description = inputs.description.value;
    let name = inputs.name.value;
    let phone = inputs.phone.value;

    if (description === "" || name === "" || phone === "") {
      return;
    }

    let div = document.createElement("div");
    div.classList.add("container");

    let h2 = document.createElement("h2");
    h2.textContent = `Product type for repair: ${type}`;

    let h3 = document.createElement("h3");
    h3.textContent = `Client information: ${name}, ${phone}`;

    let h4 = document.createElement("h4");
    h4.textContent = `Description of the problem: ${description}`;

    let startBtn = document.createElement("button");
    startBtn.classList.add("start-btn");
    startBtn.textContent = "Start repair";

    let finishBtn = document.createElement("button");
    finishBtn.classList.add("finish-btn");
    finishBtn.disabled = true;
    finishBtn.textContent = "Finish repair";

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(startBtn);
    div.appendChild(finishBtn);
    orders.received.appendChild(div);

    inputs.description.value = "";
    inputs.name.value = "";
    inputs.phone.value = "";
    inputs.type.value = "";

    startBtn.addEventListener("click", start);

    function start(event) {
      startBtn.disabled = true;
      finishBtn.disabled = false;
    }

    finishBtn.addEventListener("click", finish);
    function finish() {
      orders.completed.appendChild(div);
      startBtn.remove();
      finishBtn.remove();
    }
  }
}
