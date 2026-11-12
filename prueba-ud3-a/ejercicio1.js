// Prueba UD3 · Versión A · Ejercicio 1
// Nombre y apellidos:
'use strict';

// ===== PARTE A · PREDICE Y JUSTIFICA (antes de ejecutar) =====
// Escribe debajo de cada línea qué muestra la consola y una justificación de una
// línea con el concepto de la unidad que lo explica. Después puedes ejecutarlo.

// P1
console.log('  DAW 2026 '.trim().slice(-4).padStart(6, '*'));
// Muestra: **2026
// Porque: El padStart está sustituyendo las letras que indica el slice
// con negativos por *.

// P2
console.log(Math.round(-2.5), Math.floor(-2.5), (2.5).toFixed(0), typeof (2.5).toFixed(0));
// Muestra: -2 -3 '3' ''string'
// Porque: El round redondea hacia arriba, que en este caso es -2. Floor redondea
// hacia abajo por eso es -3. To fixed 0 redondea al mayor sin decimales. Y el typeof
// toFixe devuelve texto.

// P3
console.log(new Date(2026, 0, 32).getMonth(), new Date(2026, 0, 32).getDate());
// Muestra: 1 1
// Porque: Los meses son desde 0. El getDate se desborda.

// P4 (cuatro líneas de salida, en orden)
console.log('A');
setTimeout(() => console.log('B'), 100);
setTimeout(() => console.log('C'), 0);
console.log('D');
// Muestra: A D C B
// Porque: La consola lee las líneas una a una, por lo que primero muestra A y D
// y luego C porque es después de 0 milisegundos y luego muestra B porque es
// después de 100 milisegundos.

// ===== PARTE B · COMPLETA LOS HUECOS ① a ⑧ (sin cambiar nada más) =====

const IDIOMA = 'es-ES';
const IGIC = 0.07;
const MS_POR_DIA = 1000 * 60 * 60 * 24;

const precio = Number(prompt('Precio del billete sin IGIC (€):', '45.5'));
const fechaTexto = prompt('Fecha del viaje (AAAA-MM-DD):', '2026-12-18') ?? '';

const anio = Number(fechaTexto.slice(0, 4));
const mes = /* ① */ Number(fechaTexto.slice(0, 0)); // ¡ojo! los meses empiezan en 0
const dia = Number(fechaTexto.slice(8, 10));
const fechaViaje = /* ② */ new Intl.DateTimeFormat(
  'es-ES', { dateStyle: 'full' }).format(MS_POR_DIA);; 
  // fecha LOCAL construida con anio, mes y dia

if ( /* ③ */ precio <= 0 | fechaTexto == null ) {
  salida.textContent = 'Datos no válidos: revisa el precio y la fecha.';
} else {
  const moneda = /* ④ */ new Intl.NumberFormat(
    'es-ES', { style: 'currency', currency: 'EUR' }).format(
      IDIOMA);; // UN formateador de euros en IDIOMA
  console.log(`Formateador con EUR ${moneda}`);

  const formatoFecha = /* ⑤ */ new Intl.DateTimeFormat(IDIOMA, {
    dateStyle: 'full'}); // formateador con dateStyle 'full' en IDIOMA
  console.log(`Formateador con dateStyle ${formatoFecha}`);

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const dias = /* ⑥ */ Math.round((fechaViaje - hoy) / MS_POR_DIA);
  console.log(`Días enteros entre hoy y fechaviaje ${dias}`);
   // días enteros entre hoy y fechaViaje
   
  const relativo = /* ⑦ */ new Intl.RelativeTimeFormat('es', { numeric: 'auto' });
  relativo.format(1, 'day'); //mañana
  relativo.format(36, 'day'); //dentro de 36 días
  relativo.format(-2, 'day'); //hace dos días
  // 'mañana', 'dentro de 36 días', 'hace 2 días'…


  // ⑧ Escribe en los tres párrafos con textContent:
  const precioText = document.getElementById("precio");
  precioText.textContent = "Precio: 45,50 € (con IGIC: 48,69 €)";
  //   #precio → 'Precio: 45,50 € (con IGIC: 48,69 €)'

  const fechaText = document.getElementById("fecha");
  fechaText.textContent = "Salida: viernes, 18 de diciembre de 2026";
  //   #fecha  → 'Salida: viernes, 18 de diciembre de 2026'

  const faltanText = document.getElementById("faltan");
  faltanText.textContent = "Viajas dentro de 36 días";
  //   #faltan → 'Viajas dentro de 36 días'
  // y cambia el título de la pestaña a 'Ferry · ' + el precio con IGIC formateado.

}