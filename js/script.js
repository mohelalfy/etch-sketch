const containerDiv = document.querySelector("#grid");

for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.classList.add("grid-item");

  div.addEventListener("mouseenter", (e) => {
    div.classList.add("grid-item-hovered");
  });

  containerDiv.append(div);
}
