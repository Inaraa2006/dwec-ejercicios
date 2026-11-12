const preciosTexto = '12.5,8,1250,0.99,19999';
const preciosArray = preciosTexto.split(',').map(Number);

// Un solo formateador de moneda reutilizable (como pide el enunciado)
const formateadorMoneda = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
});

// Formateador para el porcentaje de impuesto
const formateadorPorcentaje = new Intl.NumberFormat('es-ES', {
    style: 'percent',
    maximumFractionDigits: 0
});

const tasaIGIC = 0.07;
const textoIGIC = formateadorPorcentaje.format(tasaIGIC);

// Construir los datos para la tabla
const datosTabla = preciosArray.map(precioBase => {
    const importeIGIC = precioBase * tasaIGIC;
    const totalConIGIC = precioBase + importeIGIC;

    return {
        'Precio Base': formateadorMoneda.format(precioBase),
        [`IGIC (${textoIGIC})`]: formateadorMoneda.format(importeIGIC),
        'Total con IGIC': formateadorMoneda.format(totalConIGIC)
    };
});

console.table(datosTabla);