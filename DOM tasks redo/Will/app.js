(function main() {
  function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }

  function extractColorFromInput(input) {
    return input.value;
  }

  function resetColor(element, color = "white") {
    element.style.backgroundColor = color;
  }

  function setupEventHandling(elements) {
    elements.changeBgBtn.addEventListener("click", () => {
      const colorToShow = extractColorFromInput(elements.colorInput);

      changeBackgroundColor(elements.body, colorToShow);
    });

    elements.resetBgBtn.addEventListener("click", () => {
      resetColor(document.body);
    });
  }

  function gatherElements() {
    const changeBgBtn = document.getElementById("change-bg-btn");
    const resetBgBtn = document.getElementById("reset-bg-btn");
    const colorInput = document.getElementById("color-input");
    const body = document.body;

    return {
      changeBgBtn,
      resetBgBtn,
      colorInput,
      body,
    };
  }

  setupEventHandling(gatherElements());
})();
