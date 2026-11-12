const salida = document.getElementById('salida');

// Formateadores reutilizables basados en el idioma del navegador
const formateadorHora = new Intl.DateTimeFormat(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
});

const formateadorFecha = new Intl.DateTimeFormat(navigator.language, {
    dateStyle: 'full'
});

function actualizarReloj() {
    const ahora = new Date();
    const horaTexto = formateadorHora.format(ahora);
    const fechaTexto = formateadorFecha.format(ahora);

    // Pintar en la página (usando HTML limpio y seguro)
    salida.innerHTML = `
        <div style="font-size: 2.5rem; font-family: monospace; font-weight: bold;">${horaTexto}</div>
        <div style="font-size: 1.2rem; margin-top: 0.5rem; color: #555;">${fechaTexto}</div>
    `;
}

// Ejecutar al instante y luego cada segundo
actualizarReloj();
setInterval(actualizarReloj, 1000);