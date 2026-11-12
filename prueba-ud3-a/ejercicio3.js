// Prueba UD3 · Versión A · Ejercicio 3
// Nombre y apellidos:
'use strict';

const IDIOMA = 'es-ES';
const TITULO_INICIAL = document.title;

// ---------- Reloj (YA FUNCIONA: no lo modifiques) ----------
const formatoHora = new Intl.DateTimeFormat(IDIOMA, {
  hour: '2-digit', minute: '2-digit', second: '2-digit',
});
const reloj = document.getElementById('reloj');

function pintarReloj() {
  reloj.textContent = formatoHora.format(new Date());
}
pintarReloj();
setInterval(pintarReloj, 1000);

// ---------- Cuenta atrás (TU TRABAJO) ----------
const cuenta = document.getElementById('cuenta');
const completadas = document.getElementById('completadas');
let idCuenta = null; // identificador del intervalo de la cuenta atrás

// a) formatearMMSS(segundos)

function formatearMMSS(segundos) {
    let segundos = Math.trunc(segundos % 60);
    let minutos = Math.trunc((segundos % 3600) / 60);

    return pad (segundos) + ":" + pad(minutos) + ":";
}

function pad(n) {
  return String(n).padStart(2, "0");
}


// b) iniciarCuenta()

function detenerCuenta() {
	if (cuenta != null) {
		clearInterval(cuenta);
		cuenta = null;
	}
}


// c) Al cargar: mostrar en #completadas el valor guardado en localStorage


// Conexión del botón (ya está hecha: «cuando hagan clic, ejecuta iniciarCuenta»)
document.getElementById('iniciar').addEventListener('click', () => {
  iniciarCuenta();
});


// ---------- d) PARA SOBRESALIENTE ----------
const saludo = document.getElementById('saludo');
const ultima = document.getElementById('ultima');

// d1) Saludo con el parámetro `nombre` de la URL


// d2) Guardar y mostrar la última cuenta (objeto JSON en la clave 'ultimaCuenta')


// d3) Borrar historial (la conexión con el botón ya está hecha)
document.getElementById('borrar').addEventListener('click', () => {
  borrarHistorial();
});
