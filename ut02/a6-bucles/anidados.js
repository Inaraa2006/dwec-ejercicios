'use strict'

let frase = prompt("Introduce una frase:").toLowerCase();
let vocales = 0, consonantes = 0, espacios = 0;
for (let char of frase) {
    if ('aeiouáéíóú'.includes(char)) {
        vocales++;
    } else if (char >= 'a' && char <= 'z') {
        consonantes++;
    } else if (char === ' ') {
        espacios++;
    }
}
console.log(`Contador de vocales`);
console.log(`Vocales: ${vocales}, Consonantes: ${consonantes}, Espacios: ${espacios}`);


let palabra = prompt("Introduce una palabra para comprobar si es palíndromo:").toLowerCase().trim();
let palabraInvertida = '';
for (let i = palabra.length - 1; i >= 0; i--) {
    palabraInvertida += palabra[i];
}
console.log(`¿Es palíndromo?: ${palabra === palabraInvertida}`);


let nFiguras = Number(prompt("Introduce el tamaño N para las figuras geométricas:"));
let resultadoFiguras = '';


resultadoFiguras += `Cuadrado hueco de ${nFiguras}x${nFiguras}\n`;
for (let i = 1; i <= nFiguras; i++) {
    let fila = '';
    for (let j = 1; j <= nFiguras; j++) {
        if (i === 1 || i === nFiguras || j === 1 || j === nFiguras) {
            fila += '*';
        } else {
            fila += ' ';
        }
    }
    resultadoFiguras += fila + '\n';
}


resultadoFiguras += `\nTriángulo rectángulo de ${nFiguras} filas\n`;
for (let i = 1; i <= nFiguras; i++) {
    let fila = '';
    for (let j = 1; j <= i; j++) {
        fila += '*';
    }
    resultadoFiguras += fila + '\n';
}
console.log(resultadoFiguras);


let nPrimos = Number(prompt('Introduce N para buscar números primos entre 2 y N:'));
let listaPrimos = '';
let contadorPrimos = 0;
for (let candidato = 2; candidato <= nPrimos; candidato++) {
    let esPrimo = true;
    for (let divisor = 2; divisor < candidato; divisor++) {
        if (candidato % divisor === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        listaPrimos += candidato + ' ';
        contadorPrimos++;
    }
}
console.log(`Primos entre 2 y ${nPrimos} (Total: ${contadorPrimos})`);
console.log(listaPrimos);


console.log(`Tablas completas del 1 al 10`);
for (let i = 1; i <= 10; i++) {
    console.group(`Tabla del ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
    console.groupEnd();
}