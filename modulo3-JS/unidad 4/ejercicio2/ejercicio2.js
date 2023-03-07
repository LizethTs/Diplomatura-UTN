//Ejercicio 2:
//Programar un contador de caracteres para un textarea.

const textarea = document.getElementById("textarea");
const contador = document.getElementById("contador");

textarea.addEventListener("input", function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute("maxlength");
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});
