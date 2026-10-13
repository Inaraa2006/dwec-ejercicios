'use strict'


let numTabla = Number(prompt("Introduce un número para ver su tabla de multiplicar: "));
console.log(`1. Tabla de multiplicar del ${numTabla}`);
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
console.log(`--- 2. Del 1 al 100 ---`);
console.log(cadena1_100);
console.log(`Múltiplos de 3 o 5: ${cadenaFiltrada}`);


let nSuma = Number(prompt('Introduce un número N para calcular la suma y media del 1 al N:'));
let suma = 0;
for (let i = 1; i <= nSuma; i++) {
    suma += i;
}
let media = suma / nSuma;
console.log(`3. Suma y media del 1 al ${nSuma}`);
console.log(`Suma: ${suma}, Media: ${media}`);


let fib = [1, 1];
for (let i = 2; i < 15; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(`4. Sucesión de Fibonacci (15 términos)`);
console.log(fib.join(', '));


console.log(`5. Potencias de 2 (0 a 10)`);
let acumuladorPotencia = 1;
for (let i = 0; i <= 10; i++) {
    console.log(`2^${i} = ${acumuladorPotencia}`);
    acumuladorPotencia *= 2;
}