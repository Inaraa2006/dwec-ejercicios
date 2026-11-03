"use strict";
/* =====================================================================
   SOLITARIO MANRIQUE · Hito 1 · PLANTILLA
   ---------------------------------------------------------------------
   Completen las zonas marcadas con
       /*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***\/
   Lean antes TODOS los comentarios: explican qué debe hacer cada parte.
   No cambien los nombres de las variables ni de las funciones: el
   resto del juego (hitos 2 y 3) se construye sobre ellos.
   ===================================================================== */
/* ===================== CONFIGURACIÓN DEL JUEGO ===================== */

// Primera y última carta de cada palo. Para probar rápido se juega con
// las cartas 9 a 12 (16 cartas). Cambiando PRIMERA_CARTA a 1 se debe
// jugar con la baraja completa (48 cartas) SIN tocar nada más.
const PRIMERA_CARTA = 9;
const ULTIMA_CARTA = 12;

// Códigos de los palos: coinciden con el final del nombre de cada imagen
// (por ejemplo, 12-dia.png es el 12 de Diablitos).
const palos = ["dia", "cam", "jam", "cac"];

// Color de cada palo (se usará en el hito 2 para comprobar las reglas).
const COLOR_PALO = { dia: "rojo", cac: "rojo", cam: "negro", jam: "negro" };

// Nombre de cada palo, para el texto alternativo (alt) de las imágenes.
const NOMBRE_PALO = { dia: "Diablitos", cam: "Camellos", jam: "Jameitos", cac: "Cactus" };

// Modos de juego: la clave coincide con el atributo data-modo de cada botón.
const MODOS = {
	color: "Escalera de color",
	alterna: "Escalera de color alternada",
	palo: "Mismo palo"
};

// Números de carta que se usan en la partida.
const numeros = [];
/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
// Rellenar el array numeros con un bucle desde PRIMERA_CARTA hasta
// ULTIMA_CARTA (ambas incluidas). Resultado: [9, 10, 11, 12].

for (let i = PRIMERA_CARTA; i <= ULTIMA_CARTA; i++) {
	numeros.push(i);
}

// Desplazamiento en píxeles (top y left) entre una carta y la anterior
// en el tapete inicial.
const paso = 5;

// Carpeta de las imágenes de la baraja.
const RUTA_BARAJA = "imagenes/baraja/";


/* ===================== REFERENCIAS AL DOCUMENTO ===================== */

// Tapetes
const tapeteInicial = document.getElementById("inicial");
const tapeteSobrantes = document.getElementById("sobrantes");
const tapeteReceptor1 = document.getElementById("receptor1");
const tapeteReceptor2 = document.getElementById("receptor2");
const tapeteReceptor3 = document.getElementById("receptor3");
const tapeteReceptor4 = document.getElementById("receptor4");
const todosLosTapetes = [tapeteInicial, tapeteSobrantes,
	tapeteReceptor1, tapeteReceptor2, tapeteReceptor3, tapeteReceptor4];

// Contadores de cartas de cada tapete
const contInicial = document.getElementById("contador_inicial");
const contSobrantes = document.getElementById("contador_sobrantes");
const contReceptor1 = document.getElementById("contador_receptor1");
const contReceptor2 = document.getElementById("contador_receptor2");
const contReceptor3 = document.getElementById("contador_receptor3");
const contReceptor4 = document.getElementById("contador_receptor4");

// Marcadores
const contMovimientos = document.getElementById("contador_movimientos");
const contTiempo = document.getElementById("contador_tiempo");
const textoModo = document.getElementById("modo_actual");

// Botones y otros elementos
const botonesModo = document.querySelectorAll(".btn-modo");
const botonReiniciar = document.getElementById("reset");
const botonNuevo = document.getElementById("nuevo");
const botonFinalizar = document.getElementById("finalizar");
const aviso = document.getElementById("aviso");
const dialogoFin = document.getElementById("dialogo_fin");
const resumenFin = document.getElementById("resumen_fin");


/* ===================== ESTADO DEL JUEGO ===================== */

// Mazos: un array por tapete. Su contenido debe coincidir siempre con
// las cartas que se ven en cada tapete.
let mazoInicial = [];
let mazoSobrantes = [];
let mazoReceptor1 = [];
let mazoReceptor2 = [];
let mazoReceptor3 = [];
let mazoReceptor4 = [];

let modo = null;              // modo de la partida: "color", "alterna", "palo" o null
let partidaEnCurso = false;   // true entre el comienzo y el final de una partida

// Tiempo
let segundos = 0;             // segundos transcurridos
let temporizador = null;      // identificador devuelto por setInterval


/* ===================== EVENTOS ===================== */

// Ejemplo: el botón Reiniciar llama a reiniciarPartida al pulsarlo.
botonReiniciar.addEventListener("click", reiniciarPartida);

/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
// 1. Recorrer botonesModo (con forEach) y, para cada botón, registrar un
//    evento click que llame a elegirModo pasándole el modo del botón.
//    El modo está en su atributo data-modo: boton.dataset.modo
botonesModo.forEach(function (boton) {
	boton.addEventListener("click", function () {
		elegirModo(boton.dataset.modo);
	});
});
// 2. Botón Nuevo juego → nuevoJuego
botonNuevo.addEventListener("click", nuevoJuego);
// 3. Botón Finalizar partida → finalizarPartida
botonFinalizar.addEventListener("click", finalizarPartida);
// 4. Botón Aceptar de la ventana (id "cerrar_dialogo") → dialogoFin.close()
document.getElementById("cerrar_dialogo").addEventListener("click", function () {
	dialogoFin.close();
});


/* ===================== MODOS Y BOTONES DE CONTROL ===================== */

/**
 * Guarda el modo elegido, lo muestra en los marcadores, marca el botón
 * correspondiente y comienza una partida.
 * @param {string} nuevoModo  "color", "alterna" o "palo"
 */
function elegirModo(nuevoModo) {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// 1. Guardar nuevoModo en la variable modo.
	// 2. Escribir el nombre del modo (MODOS[modo]) en textoModo.
	// 3. Marcar como activo SOLO el botón del modo elegido: añadir la
	//    clase "active" a ese botón y quitársela a los demás.
	//    Pista: boton.classList.toggle("active", condicion)
	// 4. Llamar a comenzarJuego().
}

/** Vuelve a barajar y repartir en el mismo modo. */
function reiniciarPartida() {
	if (modo !== null) {
		comenzarJuego();
	}
}

/** Vuelve a la pantalla inicial: mesa vacía y ningún modo elegido. */
function nuevoJuego() {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// 1. Detener el tiempo y vaciar la mesa.
	// 2. modo = null y partidaEnCurso = false.
	// 3. Escribir "sin elegir" en textoModo y quitar la clase "active"
	//    de todos los botones de modo.
	// 4. Poner los contadores a 0 y el tiempo a 00:00:00.
	// 5. Desactivar los botones Reiniciar y Finalizar (propiedad disabled).
	// 6. Volver a mostrar el aviso (quitarle la clase "oculto").
}

/**
 * Termina la partida en curso: para el tiempo y muestra un resumen.
 * Las cartas se quedan donde están hasta que se pulse Reiniciar o
 * Nuevo juego.
 */
function finalizarPartida() {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// 1. Si no hay partida en curso, no hacer nada (return).
	// 2. Detener el tiempo, partidaEnCurso = false y desactivar el botón
	//    Finalizar.
	// 3. Escribir en resumenFin el modo, el tiempo (formatearTiempo), los
	//    movimientos y cuántas cartas hay en los receptores de cuántas
	//    tiene la baraja. Ejemplo: "Cartas colocadas: 0 de 16".
	// 4. Abrir la ventana: dialogoFin.showModal()
}


/* ===================== COMIENZO DE LA PARTIDA ===================== */

/**
 * Deja el juego en su estado inicial y empieza una partida en el modo
 * actual. Se usa al elegir un modo y al pulsar Reiniciar, por eso debe
 * poder ejecutarse varias veces seguidas sin acumular cartas ni
 * temporizadores.
 */
function comenzarJuego() {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// 1. Quitar las cartas de la partida anterior y vaciar los mazos
	//    (vaciarMesa).
	// 2. Crear la baraja en mazoInicial (crearBaraja), barajarla y
	//    repartirla en el tapete inicial.
	// 3. Poner todos los contadores a 0 salvo el del tapete inicial, que
	//    debe mostrar el número de cartas del mazo.
	// 4. Ocultar el aviso (añadirle la clase "oculto"), activar los
	//    botones Reiniciar y Finalizar y poner partidaEnCurso a true.
	// 5. Arrancar el tiempo.
}

/**
 * Quita de los tapetes las cartas (elementos img) sin borrar los
 * contadores ni el aviso, y vacía los arrays de los mazos.
 */
function vaciarMesa() {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// Pista: tapete.querySelectorAll("img") devuelve las cartas de un
	// tapete; carta.remove() quita un elemento del documento.
	// ¡Cuidado! tapete.innerHTML = "" borraría también el contador.
}

/** Pone a 0 los contadores de los seis tapetes y el de movimientos. */
function ponerContadoresACero() {
	[contInicial, contSobrantes, contReceptor1, contReceptor2,
		contReceptor3, contReceptor4, contMovimientos].forEach(function (contador) {
		setContador(contador, 0);
	});
}


/* ===================== BARAJA ===================== */

/**
 * Crea la baraja: un array de elementos <img>, uno por carta.
 * @returns {HTMLImageElement[]} mazo sin barajar
 */
function crearBaraja() {
	const mazo = [];
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// Con dos bucles anidados (palos y numeros), crear cada carta con
	// document.createElement("img") y darle:
	//   - src: RUTA_BARAJA + numero + "-" + palo + ".png"
	//   - id: "carta_" + numero + "-" + palo        (ej.: carta_12-dia)
	//   - alt: por ejemplo "12 de Diablitos"        (usen NOMBRE_PALO)
	//   - la clase "carta"
	//   - atributos data-palo, data-numero y data-color
	//       carta.setAttribute("data-palo", palo); ...
	//   - draggable = false (en este hito ninguna carta se arrastra)
	// y añadirla al array con mazo.push(carta).
	palos.forEach(function(palo) {
		numeros.forEach(function (numero) {
			const carta = document.createElement("img");
			carta.src = RUTA_BARAJA + numero + "-" + palo + ".png";
			carta.alt = numero + " de " + NOMBRE_PALO[palo];
			carta.className = "carta";

			carta.dataset.palo = palo;
			carta.dataset.numero = numero;
			carta.dataset.color = COLOR_PALO[palo];
			carta.draggable = false;

			mazo.push(carta);
		}); 
	});
	return mazo;
}

/**
 * Desordena el array de forma aleatoria. Como los arrays se pasan por
 * referencia, el cambio se ve fuera de la función.
 * @param {Array} mazo
 */
function barajar(mazo) {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// Algoritmo de Fisher-Yates (el mismo que en el juego de parejas, UT3).
	// Referencia: https://es.wikipedia.org/wiki/Algoritmo_de_Fisher-Yates
	// Recorrer el array desde el final
	// (i = mazo.length - 1 hasta 1) e intercambiar mazo[i] con mazo[j],
	// siendo j un número entero aleatorio entre 0 e i:
	//     Math.floor(Math.random() * (i + 1))
	for (let i = mazo.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[mazo[i]], [mazo[j]] = [mazo[j]], [mazo[i]];
	}
}

/**
 * Coloca las cartas del mazo en el tapete inicial, en escalera: cada
 * carta se desplaza `paso` píxeles hacia abajo y hacia la derecha
 * respecto a la anterior. La última carta del array queda arriba.
 * @param {HTMLImageElement[]} mazo
 */
function cargarTapeteInicial(mazo) {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// Para cada carta (posición i):
	//   - carta.style.top  = (i * paso) + "px"
	//   - carta.style.left = (i * paso) + "px"
	//   - añadirla al tapete inicial con appendChild
	// Al final, actualizar el contador del tapete inicial.
}


/* ===================== CONTADORES ===================== */

/** Escribe un valor en un contador. */
function setContador(contador, valor) {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// Pista: propiedad textContent.
	contador.textContent = valor;
}

/** Suma 1 a un contador (se usará en el hito 2). */
function incContador(contador) {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// Ojo: textContent es un texto; hay que convertirlo a número.
	let valorActual = Number(contador.textContent);
	setContador(contador, valorActual + 1);
}

/** Resta 1 a un contador (se usará en el hito 2). */
function decContador(contador) {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
		let valorActual = Number(contador.textContent);
	setContador(contador, valorActual - 1);
}


/* ===================== TIEMPO ===================== */

/**
 * Pone el tiempo a 00:00:00 y lo actualiza cada segundo con setInterval.
 * Como se puede reiniciar el juego en cualquier momento, hay que evitar
 * que existan dos temporizadores a la vez: antes de crear uno nuevo hay
 * que detener el anterior (detenerTiempo).
 */
function arrancarTiempo() {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// 1. Detener el temporizador anterior.
	// 2. segundos = 0 y mostrar el tiempo.
	// 3. Guardar en temporizador el resultado de setInterval con una
	//    función que, cada 1000 ms, sume 1 a segundos y muestre el tiempo.
}

/** Detiene el temporizador si existe. */
function detenerTiempo() {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// Si temporizador no es null: clearInterval(temporizador) y
	// temporizador = null.
}

/** Muestra el tiempo actual en su marcador. */
function mostrarTiempo() {
	setContador(contTiempo, formatearTiempo(segundos));
}

/**
 * Convierte segundos totales al formato hh:mm:ss.
 * Para descomponer los segundos pueden usarse estas igualdades
 * (% es el resto de la división):
 *     segundos = truncar(total % 60)
 *     minutos  = truncar((total % 3600) / 60)
 *     horas    = truncar((total % 86400) / 3600)
 * Ejemplo: 134 segundos → "00:02:14"
 * @param {number} total
 * @returns {string}
 */
function formatearTiempo(total) {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// Pista: Math.trunc() y la función dosCifras().

	return "00:00:00";
}

/** Devuelve el número con dos cifras: 7 → "07". */
function dosCifras(n) {
	return String(n).padStart(2, "0");
}
