"use strict";
(function main() {
  function addGift(elements) {
    document.createElement("li");
    li = elements.giftName.value;
    li.classList.add("gift");
    li.textContent = gift;

    const sendBtn = document.createElement("button");
    sendBtn.id = "sendButton";
    sendBtn.textContent = "Send";

    const discardBtn = document.createElement("button");
    discardBtn.id = "discardBtn";
    discardBtn.textContent = "Discard";
  }

  function EventHandling(elements) {
    elements.addGiftBtn.addEventListener("click", () => {
      addGift();
    });
  }

  function getElements() {
    const addGiftBtn = document.querySelector("button");
    const giftName = document.querySelector("input");

    return {
      addGiftBtn,
      giftName,
    };
  }

  EventHandling(getElements());
})();
