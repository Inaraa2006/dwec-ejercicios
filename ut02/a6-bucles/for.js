'use strict'

let numTabla = Number(prompt("Introduce un número para ver su tabla de multiplicar: "));
console.log(`Tabla de multiplicar del ${numTabla}`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numTabla} × ${i} = ${numTabla * i}`);
}


let cadena1_100 = '';
let cadenaFiltrada = '';
for (let i = 1; i <= 100; i++) {
    cadena1_100 += i + ' ';
    if (i % 3 !== 0 && i % 5 !== 0) {
        continue;
    }
    cadenaFiltrada += i + ' ';
}
console.log(`Números del 1 al 100`);
console.log(cadena1_100);
console.log(`Múltiplos de 3 o 5: ${cadenaFiltrada}`);


let numeroSuma = Number(prompt('Introduce un número para calcular la suma y media del 1 al N:'));
let suma = 0;
for (let i = 1; i <= numeroSuma; i++) {
    suma += i;
}
let media = suma / numeroSuma;
console.log(`Suma y media del 1 al ${numeroSuma}, media: ${media} y suma: ${suma}`);


const serieFib = [1, 1];
for (let i = 2; i < 15; i++) {
    serieFib[i] = serieFib[i - 1] + serieFib[i - 2];
}
console.log(`Sucesión de Fibonacci (15 términos)`);
console.log(serieFib.join(', '));


console.log(`Potencias de 2`);
let acumuladorPotencia = 1;
for (let i = 0; i <= 10; i++) {
    console.log(`2^${i} = ${acumuladorPotencia}`);
    acumuladorPotencia *= 2;
}