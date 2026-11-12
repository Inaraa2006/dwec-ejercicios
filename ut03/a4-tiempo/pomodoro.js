const salida = document.getElementById('salida');

// Parametrizado en segundos (ej. corto para pruebas: 10s trabajo, 5s descanso; pon 1500 y 300 para producción)
let segundosTrabajo = 25 * 60; 
let segundosDescanso = 5 * 60;

let tiempoRestante = segundosTrabajo;
let enModoTrabajo = true;

function formatearMMSS(segundosTotales) {
    const minutos = Math.floor(segundosTotales / 60).toString().padStart(2, '0');
    const segundos = (segundosTotales % 60).toString().padStart(2, '0');
    return `${minutos}:${segundos}`;
}

const idPomodoro = setInterval(() => {
    const textoTiempo = formatearMMSS(tiempoRestante);
    const estadoTexto = enModoTrabajo ? "💻 Trabajando (Concentración)" : "☕ Descanso (Pausado)";

    // Pintar en la página
    salida.innerHTML = `
        <h2>${estadoTexto}</h2>
        <div style="font-size: 3rem; font-family: monospace;">${textoTiempo}</div>
    `;

    // Cambiar el título de la pestaña para que se vea aunque no esté activa
    document.title = `(${textoTiempo}) Pomodoro`;

    if (tiempoRestante > 0) {
        tiempoRestante--;
    } else {
        // Alternar ciclo
        enModoTrabajo = !enModoTrabajo;
        tiempoRestante = enModoTrabajo ? segundosTrabajo : segundosDescanso;
    }
}, 1000);