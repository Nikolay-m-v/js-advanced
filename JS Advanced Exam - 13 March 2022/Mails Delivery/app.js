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

    const recipientName = inputs.recipientName.value;
    const title = inputs.title.value;
    const message = inputs.message.value;

    if (recipientName === "" || title === "" || message === "") {
      return;
    }

    const ul = document.getElementById("list");

    const li = document.createElement("li");

    const titleH4 = document.createElement("h4");
    titleH4.textContent = `Title: ${title}`;

    const nameH4 = document.createElement("h4");
    nameH4.textContent = `Recipient Name: ${recipientName}`;

    const span = document.createElement("span");
    span.textContent = message;

    const div = document.createElement("div");
    div.id = "list-action";

    const sendBtn = document.createElement("button");
    sendBtn.type = "submit";
    sendBtn.id = "send";
    sendBtn.textContent = "Send";

    const deleteBtn = document.createElement("button");
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
      sendBtn.remove();

      const ulSent = document.querySelector(".sent-list");

      const liSent = document.createElement("li");

      const spanTo = document.createElement("span");
      spanTo.textContent = `To ${recipientName}`;

      const spanTitle = document.createElement("span");
      spanTitle.textContent = `Title: ${title}`;

      const divSent = document.createElement("div");
      divSent.classList.add("btn");

      const deleteSentBtn = document.createElement("button");
      deleteSentBtn.type = "submit";
      deleteSentBtn.classList.add("delete");
      deleteSentBtn.textContent = "Delete";

      ulSent.appendChild(li);
      liSent.appendChild(spanTo);
      liSent.appendChild(spanTitle);
      liSent.appendChild(divSent);
      divSent.appendChild(deleteSentBtn);

      deleteSentBtn.addEventListener("click", deleteSentBtnFunction);

      function deleteSentBtnFunction() {
        liSent.remove();

        const ulDeleteList = document.querySelector(".delete-list");

        const liDeleteList = document.createElement("li");

        const spanDeleteListTo = document.createElement("span");
        spanDeleteListTo.textContent = `To: ${recipientName}`;

        const spanDeleteListTitle = document.createElement("span");
        spanDeleteListTitle.textContent = `Title: ${title}`;

        ulDeleteList.appendChild(liDeleteList);
        liDeleteList.appendChild(spanDeleteListTo);
        liDeleteList.appendChild(spanDeleteListTitle);
      }
    }

    deleteBtn.addEventListener("click", deletedBtnFunction);

    function deletedBtnFunction() {
      li.remove();

      const ulDeleteList = document.querySelector(".delete-list");

      const liDeleteList = document.createElement("li");

      const spanDeleteListTo = document.createElement("span");
      spanDeleteListTo.textContent = `To: ${recipientName}`;

      const spanDeleteListTitle = document.createElement("span");
      spanDeleteListTitle.textContent = `Title: ${title}`;

      ulDeleteList.appendChild(liDeleteList);
      liDeleteList.appendChild(spanDeleteListTo);
      liDeleteList.appendChild(spanDeleteListTitle);
    }
  }
}

solve();
