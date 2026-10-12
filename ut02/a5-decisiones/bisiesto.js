'use strict'

let anio = Number(prompt('Introduce un año para comprobar si es bisiesto:'));

if (isNaN(anio)) {
    console.error('Error: Introduce un número válido.');
} else {
    let esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);

    console.log(`Año bisiesto:`);
    if (esBisiesto) {
        console.log(`El año ${anio} SÍ es bisiesto.`);
    } else {
        console.log(`El año ${anio} NO es bisiesto.`);
    }
}