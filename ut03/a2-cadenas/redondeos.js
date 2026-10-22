'use strict';

const numerosPrueba = [2.5,-2.5,2.4999,1.005];

const redondeos = numerosPrueba.map((val) => ({
        Valor : val,
        'Math.round()' : Math.round(val),
        'Math.floor()' : Math.floor(val),
        'Math.ceil()' : Math.ceil(val),
        'Math.trunc()' : Math.trunc(val),
        'toFixed(0)' : Number(val.toFixed(0)), 
}));

console.group('Redondeos: ');
    console.table(redondeos);
console.groupEnd();


/* El número -2.5 y el 1.005, porque Math.round(-2.5) 
devuelve -2 porque redondea hacia arriba, mientras que
toFixed(0) devuelve -3 porque redondea hacia abajo.

Con 1.005 al redondedarlo, da 1 en lugar de 2 porque no se
guarda exactamente el valor 1.005, sino como 1.0049999999999999, 
y al redondearlo da 1. */
