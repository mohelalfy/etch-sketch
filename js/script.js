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
      div.classList.add("grid-item-hovered");
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
