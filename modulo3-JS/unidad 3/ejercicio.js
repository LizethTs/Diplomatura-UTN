// Ejercicio 1
//Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:
//0 a 1000 metros = pie
//1000 a 10000 metros = bicicleta
//10000 a 30000 metros = colectivo
//30000 a 100000 metros = auto
//+100000 = avion

const metros = prompt("Ingresa un número");

console.log(metros);

let transporte = "";

if (metros > 0 && metros <= 1000) {
  transporte = "pie";
} else if (metros > 1000 && metros <= 10000) {
  transporte = "bicicleta";
} else if (metros > 10000 && metros <= 30000) {
  transporte = "colectivo";
} else if (metros > 30000 && metros <= 100000) {
  transporte = "auto";
} else if (metros > 100000) {
  transporte = "avion";
}

let respuesta = metros + " " + "metros entonces utilice" + " " + transporte;
alert(respuesta);

console.log(respuesta);

// ejercicio 2
// Crear el código que reciba como parámetro un array de números y devuelva el mayor.

const numeros = [32, 44, 16, 88, 104, 12, 56, 228];

let mayor = 0;

for (i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

console.log("El numero mayor es" + " " + mayor);
