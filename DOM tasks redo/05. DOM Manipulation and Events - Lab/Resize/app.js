(function main() {
  function changeShape(element) {
    if (element.classList.contains("square")) {
      element.classList.remove("square");
      element.classList.add("circle");
    } else if (element.classList.contains("circle")) {
      element.classList.remove("circle");
      element.classList.add("gravestone");
    } else if (element.classList.contains("gravestone")) {
      element.classList.remove("gravestone");
      element.classList.add("triangle");
    } else if (element.classList.contains("triangle")) {
      element.classList.remove("triangle");
      element.classList.add("star");
    } else if (element.classList.contains("star")) {
      element.classList.add("square");
      element.classList.remove("star");
    }
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
    element.classList.add("small");
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
  eventsHandling(gatherElements());
})();
