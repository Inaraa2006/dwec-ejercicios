'use strict';

const contenedor = document.getElementById('salida');

if (contenedor) {
    const nombre = prompt('Introduce tu nombre:', 'Inara');
    let mensaje = '';

    if (nombre === null) {
        mensaje = '<p>Has cancelado la introducción del nombre</p>';
    } else if (nombre.trim() === '') {
        mensaje = '<p>Hola, dejaste el campo vacío</p>';
    } else {
        mensaje = `<p>Hola, ${nombre}!</p>`;

        const continuar = confirm('¿Deseas continuar con el programa?');
        
        if (continuar) {
            alert('¡Genial, continuamos!');
            mensaje += '<p>Estado: Continuación aceptada.</p>';
        } else {
            alert('Operación cancelada.');
            mensaje += '<p>Estado: Cancelado en el confirm.</p>';
        }
    }

    contenedor.innerHTML = mensaje;
}