'use strict';

/**
 * @param {string} frase
 * @param {string} palabra
 */

function censurarFrase(frase, palabra) {
    if (!frase || !palabra)  {
        return;
    }

    const regex = new RegExp(palabra, 'gi'); /*g busca todas las apariciones, 
    i nos distingue entre mayusculas y minusculas*/

    const asteriscos = '*'.repeat(palabra.length);
    const fraseCensurada = frase.replace(regex, asteriscos);

    console.group('Censura: ');
        console.log('Frase original: ', frase);
        console.log('Palara a censurar: ', palabra);
        console.log('Frase censurada: ', fraseCensurada);
    console.groupEnd();
}

const fraseEntrada = prompt('Introduce una frase');
const palabraEntrada = prompt('Introduce la palabra que quieres censurar: ');

if (fraseEntrada && palabraEntrada) {
    censurarFrase(fraseEntrada, palabraEntrada);
}