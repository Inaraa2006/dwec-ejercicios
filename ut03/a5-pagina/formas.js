'use strict';

const contenedor = document.getElementById('salida');

if (contenedor) {
    
    contenedor.textContent = 'Hola';

    contenedor.innerHTML = '<strong>Hola (con innerHTML)</strong>';

    contenedor.insertAdjacentHTML('beforeend', '<p>Párrafo añadido con insertAdjacentHTML</p>');
}