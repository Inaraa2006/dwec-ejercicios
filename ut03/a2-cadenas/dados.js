'use strict';

/**
 * @param {number} min
 * @param {number} max
 * @returns {number} numero aleatorio
 */

function enteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max-min+1)) + min;
}

function simularTiradas() {
    const contadores = [0,0,0,0,0,0]; /*almacenar cuantas veces sale
    cada cara*/
    const totalTiradas = 1000;

    //simular las 1000 tiradas
    for (let i = 0; i < totalTiradas; i++) {
        const resultadoDado = enteroAleatorio(1,6);

        contadores[resultadoDado - 1]++; /*restamos la posición del
        array*/
    }

    console.group('Dados y porcentajes: ');
    
    contadores.forEach((cantidad,indice) => {
        const cara = indice + 1;
        const porcentaje = ((cantidad / totalTiradas) * 100).toFixed(2);

        console.log(`Cara ${cara}: ${cantidad} veces (${porcentaje}%)`);

    });
    
    console.groupEnd();
}

simularTiradas();