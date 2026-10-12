'use strict'

let peso = Number(prompt("Introduce tu peso en kg:"));
let altura = Number(prompt("Introduce tu altura en cm:"));

let alturaMetros = altura / 100;
let imc = peso / (alturaMetros ** 2);

console.log(`Calculadora de IMC`);
console.log(`Peso: ${peso} kg`);
console.log(`Altura: ${altura} cm`);
console.log(`IMC: ${imc.toFixed(2)}`);
