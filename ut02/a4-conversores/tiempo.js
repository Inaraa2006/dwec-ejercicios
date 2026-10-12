'use strict'

let totalSegundos = Number(prompt("Introduce los segundos:"));
let horas = Math.trunc(totalSegundos / 3600);
let minutos = Math.trunc((totalSegundos % 3600) / 60);
let segundos = totalSegundos % 60;

let formatoH = String(horas).padStart(2, '0');
let formatoM = String(minutos).padStart(2, '0');
let formatoS = String(segundos).padStart(2, '0');

console.log(`Conversor de tiempo`);
console.log(`${totalSegundos} segundos equivalen a: ${formatoH}:${formatoM}:${formatoS}`);