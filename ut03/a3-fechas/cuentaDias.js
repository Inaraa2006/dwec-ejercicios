const hoy = new Date();
const msPorDia = 1000 * 60 * 60 * 24;

// Fechas clave
const fin1Eval = new Date(2026, 11, 18); // 18 de diciembre de 2026 (mes 11 = diciembre)
const finClases = new Date(2027, 1, 5);   // 5 de febrero de 2027 (mes 1 = febrero)

// Formateador de tiempo relativo en español
const rtf = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });

function mostrarCuentaAtras(fechaObjetivo, nombreEvento) {
    const diferenciaDias = Math.round((fechaObjetivo - hoy) / msPorDia);
    const textoRelativo = rtf.format(diferenciaDias, 'day');
    
    console.log(`${nombreEvento}: ${diferenciaDias} días (${textoRelativo})`);
}

mostrarCuentaAtras(fin1Eval, "Fin de la 1ª Evaluación (18 dic 2026)");
mostrarCuentaAtras(finClases, "Fin de clases en el centro (5 feb 2027)");





/*Escribir en #precio, #fecha y #faltan con textContent y cambiar document.title como indica el
comentario*/