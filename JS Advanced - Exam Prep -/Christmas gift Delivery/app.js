"use strict";

function solution() {
  const giftName = document.querySelector("input");
  const addGiftBtn = document.querySelector("button");

  addGiftBtn.addEventListener("click", addGift);
  function addGift() {
    const gift = giftName.value;
    const ulList = document.querySelectorAll("ul")[0];

    if (gift === "") {
      return;
    }

    let li = document.createElement("li");
    li.classList.add("gift");
    li.textContent = gift;

    const sendBtn = document.createElement("button");
    sendBtn.id = "sendButton";
    sendBtn.textContent = "Send";

    const discardBtn = document.createElement("button");
    discardBtn.id = "discardButton";
    discardBtn.textContent = "Discard";

    ulList.appendChild(li);
    li.appendChild(sendBtn);
    li.appendChild(discardBtn);

    const listOfGifts = Array.from(document.querySelectorAll(".gift"));
    listOfGifts
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .map((node) => ulList.appendChild(node));

    giftName.value = "";

    sendBtn.addEventListener("click", send);

    function send() {
      const ulSent = document.querySelectorAll("ul")[1];
      ulSent.appendChild(li);
      li.classList = "";
      sendBtn.remove();
      discardBtn.remove();
    }

    discardBtn.addEventListener("click", discard);

    function discard() {
      const ulDiscard = document.querySelectorAll("ul")[2];
      ulDiscard.appendChild(li);
      li.classList = "";
      sendBtn.remove();
      discardBtn.remove();
    }
  }
}
