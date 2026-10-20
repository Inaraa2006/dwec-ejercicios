'use strict';

/**
 * @param {string} textoEntrada
 */

function normalizarNombre (textoEntrada){
    const palabras = textoEntrada.trim().split(' ');

    const palabrasNormalizadas = [];
    const iniciales = [];

    for (const p of palabras){
        if (p!=='') {
            const normal = p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
            palabrasNormalizadas.push(normal);
            iniciales.push(p.charAt(0).toUpperCase()+'.');
        }
    }

    console.group("Nombre normalizado: ");
        console.log('Nombre limpio: ', palabrasNormalizadas.join(''));
        console.log('Número de palabras: ', palabrasNormalizadas.length);
    console.groupEnd();
}

    const entradaNombre = prompt('Introduce un nombre y un apellido: ');
    if (entradaNombre){
        normalizarNombre(entradaNombre);
    }