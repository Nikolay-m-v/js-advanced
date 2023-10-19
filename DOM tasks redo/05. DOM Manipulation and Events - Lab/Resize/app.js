(function main() {
  function changeShape(element) {
    element.style.borderRadius = "50px";
    const currentBorderRadius = parseInt(element.style.borderRadius);
    if (currentBorderRadius > 0) {
      element.style.borderRadius = "15px";
    } else if (currentBorderRadius === 15) {
      element.style.borderRadius = "50px";
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
