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
    const currentWidth = parseInt(element.style.width);
    const currentHeight = parseInt(element.style.height);
    if (currentWidth === 200) {
      element.style.width = "300px";
      element.style.height = "300px";
    }
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
  }

  function gatherElements() {
    const changeColorBtn = document.querySelector(".changeColor");
    const changeShapeBtn = document.querySelector(".changeShape");
    const changeSizeBtn = document.querySelector(".changeSize");
    const colorInput = document.querySelector(".color-input");
    const objectToManipulate = document.querySelector(".objectToManipulate");

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
