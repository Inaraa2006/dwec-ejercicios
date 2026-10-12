'use strict'

let edad = Number(prompt('Introduce tu edad:'));
let carnetEstudiante = prompt('¿Tienes carnet de estudiante? (si/no):').trim().toLowerCase();
let diaSemana = prompt('¿Qué día de la semana es?:').trim().toLowerCase();

let precioBase = 12;
let precioFinal = 0;

if (diaSemana === 'miercoles') {
    precioFinal = 0;
} else if (edad < 6 || edad > 65) {
    precioFinal = 0;
} else if ((edad >= 6 && edad <= 17) || carnetEstudiante === 'si') {
    precioFinal = precioBase * 0.5;
} else {
    precioFinal = precioBase;
}

let mensaje = precioFinal === 0 ? 'Entrada gratuita' : `Precio: ${precioFinal.toFixed(2)} €`;

console.log(`Tarifa de entrada:`);
console.log(mensaje);