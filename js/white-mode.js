let trilho = document.getElementById("trilho");
let body = document.querySelector("body");

trilho.addEventListener("click", () => {
  trilho.classList.toggle("white");
  body.classList.toggle("white");
});

trilho1.addEventListener("click", () => {
  trilho1.classList.toggle("white");
  body.classList.toggle("white");
});
