const Player = (name, object) => {
  this.name = name;
  this.object = object;
};

function Play() {
  const square = document.querySelectorAll("div>.square");
  console.log(cell);
  square.forEach((square) =>
    addEventListener("click", () => {
      square.textContent = "x";
    })
  );
}
