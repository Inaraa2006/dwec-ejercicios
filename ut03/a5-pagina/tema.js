'use strict';

document.body.dataset.tema = 'claro';
document.title = 'Tema: claro';

const botonTema = document.getElementById('tema');

if (botonTema) {
    botonTema.addEventListener('click', () => {
        
        const nuevoTema = document.body.dataset.tema === 'claro' ? 'oscuro' : 'claro';
        document.body.dataset.tema = nuevoTema;
        
        
        document.title = `Tema: ${nuevoTema}`;
    });
}