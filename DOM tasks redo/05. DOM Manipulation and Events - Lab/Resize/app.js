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
    element.classList.add("bigger");
  }

  function resetAll(element) {
    element.classList.forEach((className) => {
      element.classList.remove(className);
    });
    element.classList.add("objectToManipulate");
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
      resetAll();
    });
  }

  function gatherElements() {
    const changeColorBtn = document.querySelector(".changeColor");
    const changeShapeBtn = document.querySelector(".changeShape");
    const changeSizeBtn = document.querySelector(".changeSize");
    const colorInput = document.querySelector(".color-input");
    const objectToManipulate = document.querySelector(".objectToManipulate");
    const resetBtn = document.querySelector(".reset");

    return {
      changeColorBtn,
      changeShapeBtn,
      changeSizeBtn,
      colorInput,
      objectToManipulate,
      resetBtn,
    };
  }

  eventsHandling(gatherElements());
})();
