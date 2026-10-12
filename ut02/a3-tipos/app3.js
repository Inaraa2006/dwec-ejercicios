'use strict'

let numero = prompt("Introduce un número: ");
console.log("El número introducido es: " + numero);
console.log("Tipo de dato: " + typeof numero);
console.log("Resultado con Number(): " + Number(numero));
console.log("Resultado con parseInt(): " + parseInt(numero));
console.log("Resultado con parseFloat(): " + parseFloat(numero));
console.log("Es un número válido? " + Number.isNaN(Number(numero)));