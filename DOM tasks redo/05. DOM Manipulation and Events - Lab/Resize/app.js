(function main() {
  function changeShape(element) {
    element.classList.add("circle");
  }

  function changeColor(element, color) {
    element.style.backgroundColor = color;
  }

  function extractColorFromInput(input) {
    return input.value;
  }

  function changeSize(element) {
    if (element.classList.contains("small")) {
      element.classList.remove("small");
      element.classList.add("large");
    } else if (element.classList.contains("large")) {
      element.classList.remove("large");
      element.classList.add("very-large");
    } else if (element.classList.contains("very-large")) {
      element.classList.remove("very-large");
      element.classList.add("small");
    }
  }

  function resetObject(element) {
    element.classList = [];
    element.classList.add("objectToManipulate");
  }

  function resetColor(element, color = "white") {
    element.style.backgroundColor = color;
  }

  function eventsHandling(elements) {
    elements.changeShapeBtn.addEventListener("click", () => {
      changeShape(elements.objectToManipulate);
    });

    elements.changeColorBtn.addEventListener("click", () => {
      const colorToShow = extractColorFromInput(elements.colorInput);

      changeColor(elements.objectToManipulate, colorToShow);
    });

    elements.changeSizeBtn.addEventListener("click", () => {
      changeSize(elements.objectToManipulate);
    });

    elements.resetBtn.addEventListener("click", () => {
      resetObject(elements.objectToManipulate);
    });
    elements.resetColorBtn.addEventListener("click", () => {
      resetColor(elements.objectToManipulate);
    });
  }

  function gatherElements() {
    const changeColorBtn = document.querySelector(".changeColor");
    const changeShapeBtn = document.querySelector(".changeShape");
    const changeSizeBtn = document.querySelector(".changeSize");
    const colorInput = document.querySelector(".color-input");
    const objectToManipulate = document.querySelector(".objectToManipulate");
    const resetBtn = document.querySelector(".reset");
    const resetColorBtn = document.querySelector(".resetColor");

    return {
      changeColorBtn,
      changeShapeBtn,
      changeSizeBtn,
      colorInput,
      objectToManipulate,
      resetBtn,
      resetColorBtn,
    };
  }

  eventsHandling(gatherElements());
})();
