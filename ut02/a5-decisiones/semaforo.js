'use strict'

let colorInput = prompt('Introduce un color de semáforo (rojo, ambar, verde):');
let color = colorInput ? colorInput.trim().toLowerCase() : '';

console.log(`--- SEMÁFORO ---`);
switch (color) {
    case 'rojo':
        console.log('Acción: Detente.');
        break;
    case 'ambar':
        console.log('Acción: Precaución, reduce la velocidad.');
        break;
    case 'verde':
        console.log('Acción: Avanza con seguridad.');
        break;
    default:
        console.log('Color desconocido');
        break;
}