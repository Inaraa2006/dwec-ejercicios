'use strict';

/*Orden de salida predecido: Tal cual lo lee, es decir, de línea a línea*/

console.log('Inicio');

setTimeout(() => {
    console.log('Retardo de 0');
}, 0);

console.log('Continuación');

setTimeout(() => {
    console.log('Retardo de 100');
}, 100);

console.log('Sigue');

setTimeout(() => {
    console.log('Retardo de 50');
}, 50);

console.log('Casi terminado');
console.log('Fin');

/*Salida en consola: 
Inicio
Continuación
Sigue
Casi terminado
Fin
Retardo de 0
Retardo de 50
Retardo de 100
*/