'use strict';

const nombre = prompt('Introduce tu nombre: ');
const contenedor = document.getElementById('salida');

if (contenedor && nombre) {
    // VULNERABILIDAD (si usáramos innerHTML):
    // contenedor.innerHTML = `<p>Hola, ${nombre}</p>`;


    const parrafo = document.createElement('p');
    parrafo.textContent = `Hola, ${nombre}`;
    
    contenedor.replaceChildren(parrafo);
}