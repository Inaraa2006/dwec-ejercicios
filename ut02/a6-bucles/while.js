'use strict'


let numValido = NaN;
let intentosValidos = 0;
while (isNaN(numValido) || numValido < 1 || numValido > 20) {
    let entrada = prompt('Introduce un número entre 1 y 20:');
    numValido = Number(entrada);
    intentosValidos++;
}
console.log(`6. Entrada Válida`);
console.log(`Número correcto: ${numValido}. Intentos necesarios: ${intentosValidos}`);


let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentosAdivina = 0;
let acertado = false;
console.log(`7. Adivina el número (1 a 100)`);
while (intentosAdivina < 7 && !acertado) {
    let intentoUsr = Number(prompt(`Intento ${intentosAdivina + 1}/7. Introduce un número del 1 al 100:`));
    intentosAdivina++;
    if (intentoUsr === numeroSecreto) {
        console.log(`¡Has acertado en el intento ${intentosAdivina}!`);
        acertado = true;
    } else if (intentoUsr < numeroSecreto) {
        console.log('El número secreto es mayor.');
    } else {
        console.log('El número secreto es menor.');
    }
}
if (!acertado) {
    console.log(`Has agotado los 7 intentos. El número secreto era ${numeroSecreto}.`);
}


console.log(`8. Suma hasta cero`);
let sumaTotal = 0;
let contadorNum = 0;
let maximo = -Infinity;
let minimo = Infinity;

let numeroActual = Number(prompt('Introduce un número (0 para terminar):'));
while (numeroActual !== 0) {
    sumaTotal += numeroActual;
    contadorNum++;
    if (numeroActual > maximo) maximo = numeroActual;
    if (numeroActual < minimo) minimo = numeroActual;
    
    numeroActual = Number(prompt('Introduce otro número (0 para terminar):'));
}

if (contadorNum > 0) {
    console.log(`Suma: ${sumaTotal}, Cantidad: ${contadorNum}, Mayor: ${maximo}, Menor: ${minimo}`);
} else {
    console.log('No se introdujo ningún número.');
}


let opcion;
do {
    opcion = Number(prompt('MENÚ:\n1. Opción A\n2. Opción B\n3. Opción C\n0. Salir'));
    switch (opcion) {
        case 1:
            console.log('Has seleccionado la Opción A');
            break;
        case 2:
            console.log('Has seleccionado la Opción B');
            break;
        case 3:
            console.log('Has seleccionado la Opción C');
            break;
        case 0:
            console.log('Saliendo del programa...');
            break;
        default:
            console.log('Opción no válida.');
            break;
    }
} while (opcion !== 0);