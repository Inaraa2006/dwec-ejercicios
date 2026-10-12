'use strict'

let mes = Number(prompt('Introduce el mes (1-12):'));
let anio = Number(prompt('Introduce el año:'));

if (isNaN(mes) || isNaN(anio) || mes < 1 || mes > 12) {
    console.error('Error: Mes o año inválidos.');
} else {
    let esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
    let dias = 0;

    switch (mes) {
        case 1: // Enero
        case 3: // Marzo
        case 5: // Mayo
        case 7: // Julio
        case 8: // Agosto
        case 10: // Octubre
        case 12: // Diciembre
            dias = 31;
            break;
        case 4: // Abril
        case 6: // Junio
        case 9: // Septiembre
        case 11: // Noviembre
            dias = 30;
            break;
        case 2: // Febrero
            dias = esBisiesto ? 29 : 28;
            break;
    }

    console.log(`Días del mes:`);
    console.log(`El mes ${mes} del año ${anio} tiene ${dias} días.`);
}