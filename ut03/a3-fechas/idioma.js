'use strict';

function mostrarIdiomaYFecha() {
    const idiomaUsuario = navigator.language;
    const listaIdiomas = navigator.languages;

    const fechaActual = new Date();

    const formateadorFecha = new Intl.DateTimeFormat(idiomaUsuario, {
        dateStyle: 'full'
    });

    console.group('Idioma del usuario: ');
        console.log('navigator.language:', idiomaUsuario);
        console.log('navigator.languages:', listaIdiomas);
        console.log('Fecha de hoy formateada en tu idioma:', formateadorFecha.format(fechaActual));
    console.groupEnd();
}

mostrarIdiomaYFecha();