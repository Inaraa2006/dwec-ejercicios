'use strict'

let peso = Number(prompt("Introduce tu peso en kg:"));
let altura = Number(prompt("Introduce tu altura en cm:"));


if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.error("Error: El peso y la altura deben ser números positivos.");
} else {
    let alturaMetros = altura / 100;
    let imc = peso / (alturaMetros ** 2);
    let clasificacion = '';

    if (imc < 18.5) {
        clasificacion = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        clasificacion = 'Normal';
    } else if (imc >= 25 && imc < 29.9) {
        clasificacion = 'Sobrepeso';
    } else {
        clasificacion = 'Obesidad';
    }
}


console.log(`Calculadora de IMC`);
console.log(`IMC: ${imc.toFixed(1)} - Categoría: ${clasificacion}`);