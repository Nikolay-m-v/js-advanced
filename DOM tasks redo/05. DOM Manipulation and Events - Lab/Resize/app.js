(function main() {
  function changeShape(element) {
    if (element.style.borderRadius > 0) {
      element.style.borderRadius = 15;
    } else if ((element.style.borderRadius = 15)) {
      element.style.borderRadius = 50;
    }
  }

  function changeColor(element, color) {
    element.style.backgroundColor = color;
  }

  function extractColorFromInput(input) {
    return input.value;
  }

  function eventsHandling(elements) {
    elements.changeShapeBtn.addEventListener("click", () => {
      changeShape(elements.objectToManipulate);
    });

    elements.changeColorBtn.addEventListener("click", () => {
      const colorToShow = extractColorFromInput(elements.colorInput);

      changeColor(elements.objectToManipulate, colorToShow);
    });
  }

  function gatherElements() {
    const changeColorBtn = document.getElementById("changeColor");
    const changeShapeBtn = document.getElementById("changeShape");
    const changeSizeBtn = document.getElementById("changeSize");
    const colorInput = document.getElementById("color-input");
    const objectToManipulate = document.getElementById("objectToManipulate");

    return {
      changeColorBtn,
      changeShapeBtn,
      changeSizeBtn,
      colorInput,
      objectToManipulate,
    };
  }

  eventsHandling(gatherElements());
})();
