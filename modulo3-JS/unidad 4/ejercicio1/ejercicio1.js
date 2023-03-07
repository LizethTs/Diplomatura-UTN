//Ejercicio 1:
//Crear un documento html con 3 cuadrados que, al ser clickeados, cambien el color de fondo del documento. Cada cuadrado debera tener un color distinto.

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
console.log(buttons);

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.id === "rosa") {
      body.style.backgroundColor = "#f023e2";
    }
    if (e.target.id === "verde") {
      body.style.backgroundColor = "#61f023";
    }
    if (e.target.id === "violeta") {
      body.style.backgroundColor = "#9b25fb";
    }
  });
});
