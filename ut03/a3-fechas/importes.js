'use strict';

const entrada = prompt('Introduce un importe: ');
const precio = Number(entrada);

if (!Number.isNaN(precio)) {

    const paisesConfig = [
        { nombre: 'España', locale: 'es-ES', moneda: 'EUR' },
        { nombre: 'Estados Unidos', locale: 'en-US', moneda: 'USD' },
        { nombre: 'Alemania', locale: 'de-DE', moneda: 'EUR' },
        { nombre: 'Japón', locale: 'ja-JP', moneda: 'JPY' },
        { nombre: 'India', locale: 'en-IN', moneda: 'INR' }
    ];

    const resultadosTabla = paisesConfig.map((item) => {
        const formateador = new Intl.NumberFormat(item.locale, {
            style: 'currency',
            currency: item.moneda
        });

        return {
            'País': item.nombre,
            'Moneda': item.moneda,
            'Importe Formateado': formateador.format(precio)
        };
    });

    console.group('Mismo importe en varios países:');
        console.table(resultadosTabla);
    console.groupEnd();
} else {
    console.warn('Por favor, introduce un número válido.');
}