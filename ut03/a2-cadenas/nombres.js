'use strict';

/**
 * @param {string} textoEntrada
 */

function normalizarNombre (textoEntrada){
    const limpio = textoEntrada.trim();
    const partes = limpio.split(' '); /*Acordarme de poner espacio porque sino me 
    daba todo en mayúsculas porque JS dividía el texto letra por letra*/

    const palabrasNormalizadas = [];
    const iniciales = [];

    for (const p of partes){
        if (p!=='') {
            const inicial = p.at(0).toUpperCase();
            const resto = p.slice(1).toLowerCase();

            const palabraFormateada = inicial + resto;
            palabrasNormalizadas.push(palabraFormateada);
            iniciales.push(`${inicial}.`);
        }
    }

    console.group("Nombre normalizado: ");
        console.log('Nombre limpio: ', palabrasNormalizadas.join(' '));
        console.log('Iniciales: ', iniciales.join(' '));
        console.log('Número de palabras: ', palabrasNormalizadas.length);
    console.groupEnd();
}

    const entradaNombre = prompt('Introduce un nombre y un apellido: ');
    if (entradaNombre){
        normalizarNombre(entradaNombre);
    }