const containerDiv = document.querySelector("#grid");

for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.className = "grid-item";

  containerDiv.append(div);
}
