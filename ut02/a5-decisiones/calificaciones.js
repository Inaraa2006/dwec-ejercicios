'use strict'

let notaInput = prompt('Introduce una nota de 0 a 10:');
let nota = Number(notaInput);

if (notaInput === null || notaInput.trim() === '' || isNaN(nota) || nota < 0 || nota > 10) {
    console.error('Error: Valor no numérico o fuera de rango (0-10).');
} else {
    let calificacion = '';

    if (nota < 5) {
        calificacion = 'Insuficiente';
    } else if (nota < 6) {
        calificacion = 'Suficiente';
    } else if (nota < 7) {
        calificacion = 'Bien';
    } else if (nota < 9) {
        calificacion = 'Notable';
    } else {
        calificacion = 'Sobresaliente';
    }

    console.log(`Calificaciones: `);
    console.log(`Nota: ${nota} -> ${calificacion}`);
}