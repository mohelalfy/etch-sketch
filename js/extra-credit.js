const containerDiv = document.querySelector("#grid");
const resetButton = document.querySelector("#reset-button");

function resetGrid() {
  containerDiv.replaceChildren();
}

function generateGrid(length) {
  for (let i = 0; i < length * length; i++) {
    const div = document.createElement("div");

    div.classList.add("grid-item");
    div.style.flexBasis = `${(1 / length) * 100}%`;

    div.style.flexBasis = div.addEventListener("mouseenter", (e) => {
      if (div.classList.contains("grid-item-hovered")) {
        const currentOpacity = parseFloat(div.style.opacity);

        if (currentOpacity !== 0) {
          div.style.opacity = String(currentOpacity - 0.1);
        }
      } else {
        div.classList.add("grid-item-hovered");
        const red = Math.random() * 255;
        const green = Math.random() * 255;
        const blue = Math.random() * 255;

        div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        div.style.opacity = "1";
      }
    });

    containerDiv.append(div);
  }
}

resetButton.addEventListener("click", () => {
  const length = parseInt(prompt("Enter new grid size"));

  if (length > 100) {
    alert("Max length is 100, try again with smaller number");
    return;
  }

  resetGrid();
  generateGrid(length);
});

generateGrid(4);
