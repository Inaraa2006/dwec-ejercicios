"use strict";

/* =====================================================================
   SOLITARIO MANRIQUE · Hito 2 · ARRASTRAR Y SOLTAR · PLANTILLA
   ---------------------------------------------------------------------
   Este fichero se carga DESPUÉS de solitario.js, así que puede usar sus
   variables (mazoInicial, tapeteSobrantes, contMovimientos, modo,
   partidaEnCurso...) y sus funciones (incContador, decContador...).

   Completen las zonas marcadas con
       /*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***\/

   Tengan abierto el modelo de las PELOTAS (pelotas/script.js): la mayor
   parte de los eventos son iguales. Donde lo son, se indica con
       ⚽ PELOTAS: nombre de la función que pueden reutilizar
   Lo nuevo del solitario son los MAZOS (arrays), los CONTADORES y las
   REGLAS de los tres modos: ahí tienen pistas paso a paso.

   Orden recomendado: 1 → 2 → 3 → ... (cada sección se puede probar en
   el navegador antes de pasar a la siguiente).
   ===================================================================== */


/* ============ 1. FUNCIONES AUXILIARES (mazos y contadores) ============ */
// En las pelotas, para saber qué había en una cesta mirábamos el DOM
// (cesta.querySelectorAll). En el solitario cada tapete tiene además su
// ARRAY (mazo) y su CONTADOR, y los tres deben ir siempre a la par.

/**
 * Devuelve el array del mazo de un tapete. (YA HECHA)
 * Se usa un switch dentro de una función para leer SIEMPRE el valor
 * actual de la variable: vaciarMesa() hace mazoInicial = [] y crea un
 * array nuevo en cada partida.
 */
function mazoDe(tapete) {
	switch (tapete.id) {
		case "inicial": return mazoInicial;
		case "sobrantes": return mazoSobrantes;
		case "receptor1": return mazoReceptor1;
		case "receptor2": return mazoReceptor2;
		case "receptor3": return mazoReceptor3;
		case "receptor4": return mazoReceptor4;
	}
}

/** Devuelve el contador (span) de un tapete. */
function contadorDe(tapete) {
	/***CODIGO HECHO***/
	// Igual que mazoDe, pero devolviendo contInicial, contSobrantes,
	// contReceptor1 ... contReceptor4.
	switch (tapete.id) {
		case "inicial": return contInicial;
		case "sobrantes": return contSobrantes;
		case "receptor1": return contReceptor1;
		case "receptor2": return contReceptor2;
		case "receptor3": return contReceptor3;
		case "receptor4": return contReceptor4;
	}
}

/** Devuelve la carta de arriba de un mazo, o undefined si está vacío. */
function cartaDeArriba(mazo) {
	/***CODIGO HECHO***/
	// La carta de arriba es la ÚLTIMA del array.
	// Pista: ¿qué posición tiene el último elemento de un array?
	// (Si el array está vacío, mazo[-1] ya devuelve undefined.)
	return mazo[mazo.length -1];
}

/** true si el tapete es uno de los cuatro receptores. (YA HECHA) */
function esReceptor(tapete) {
	return tapete.classList.contains("receptor");
}

// Prueba rápida en la consola (con una partida empezada):
//   mazoDe(tapeteInicial).length        → 16
//   contadorDe(tapeteInicial).textContent → "16"
//   cartaDeArriba(mazoInicial)           → la <img> que se ve arriba


/* ============ 2. CARTAS ARRASTRABLES ============ */
// En las pelotas TODAS eran arrastrables (pelota.draggable = true).
// Aquí solo se puede coger la carta de ARRIBA del tapete inicial y la de
// ARRIBA del de sobrantes. Esta función se llama al empezar la partida,
// después de cada movimiento y al finalizar.

function actualizarArrastrables() {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// Paso 1. Poner TODAS las cartas de la mesa a draggable = false.
	//   Pista: recorran todosLosTapetes con forEach y, dentro, las cartas
	//   de cada tapete: tapete.querySelectorAll(".carta").forEach(...)
	//
	// Paso 2. Si NO hay partida en curso (partidaEnCurso), salir (return):
	//   así, al finalizar, no queda ninguna carta arrastrable.
	//
	// Paso 3. Obtener la carta de arriba de mazoInicial con cartaDeArriba.
	//   Si no es undefined, ponerle draggable = true.
	//
	// Paso 4. Lo mismo con mazoSobrantes.
	todosLosTapetes.forEach(function (tapete) {
		tapete.querySelectorAll(".carta").forEach(function (carta) {
			carta.draggable = false;
		});
	});

	if (!partidaEnCurso) {
		return;
	}

	const arribaInicial = cartaDeArriba(mazoInicial);
	if (arribaInicial) {
		arribaInicial.draggable = true;
	}

	const arribaSobrantes = cartaDeArriba(mazoSobrantes);
	if (arribaSobrantes) {
		arribaSobrantes.draggable = true;
	}
}


/* ============ 3. EVENTOS DE LAS CARTAS (origen) ============ */
// Se registran en crearBaraja() de solitario.js (ver LEEME):
//   carta.addEventListener("dragstart", alEmpezarArrastre);
//   carta.addEventListener("dragend", alTerminarArrastre);

/** dragstart: empieza el arrastre de una carta. */
function alEmpezarArrastre(evento) {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// ⚽ PELOTAS: empezarArrastre. Es igual: guardar en dataTransfer el
	// id de la carta y añadirle la clase "arrastrando".
}

/** dragend: termina el arrastre, se haya soltado bien o no. */
function alTerminarArrastre(evento) {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// ⚽ PELOTAS: terminarArrastre. Quitar la clase "arrastrando".
}


/* ============ 4. EVENTOS DE LOS TAPETES (destino) ============ */
// En las pelotas, las cestas eran los destinos. Aquí los destinos son el
// tapete de sobrantes y los cuatro receptores (NO el inicial).

const tapetesDestino = [tapeteSobrantes, tapeteReceptor1, tapeteReceptor2,
	tapeteReceptor3, tapeteReceptor4];

/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
// ⚽ PELOTAS: cestas.forEach(...). Recorran tapetesDestino y registren en
// cada tapete los eventos dragenter, dragover, dragleave y drop con las
// funciones alEntrar, alPasarPorEncima, alSalir y alSoltar.
// UNA sola función por evento para los cinco tapetes.


/** dragenter: la carta entra en el tapete. */
function alEntrar(evento) {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// ⚽ PELOTAS: entrar. preventDefault() y añadir la clase "resaltado"
	// al tapete. Recuerden: el tapete es evento.currentTarget.
}

/** dragover: la carta está encima del tapete. */
function alPasarPorEncima(evento) {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// ⚽ PELOTAS: pasarPorEncima. ¡Sin esto no se puede soltar!
}

/** dragleave: la carta sale del tapete. */
function alSalir(evento) {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// ⚽ PELOTAS: salir. Quitar la clase "resaltado".
	// Detalle nuevo: si pasan del hueco del tapete a una carta del mismo
	// tapete, también salta dragleave y el resaltado «parpadea». Para
	// evitarlo, empiecen la función con:
	//   if (evento.currentTarget.contains(evento.relatedTarget)) return;
}

/** drop: se suelta la carta sobre el tapete. */
function alSoltar(evento) {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// ⚽ PELOTAS: soltar. La estructura es la misma:
	//   1. preventDefault(); tapeteDestino = evento.currentTarget;
	//      quitarle la clase "resaltado".
	//   2. Recuperar la carta con el id de dataTransfer y getElementById.
	//      Si es null, salir.
	//   3. NUEVO: el tapete de origen es carta.parentElement
	//   4. Si esMovimientoValido(carta, tapeteOrigen, tapeteDestino),
	//      llamar a moverCarta(carta, tapeteOrigen, tapeteDestino).
	//      Si no es válido, no se hace nada: la carta se queda donde estaba.
}


/* ============ 5. MOVER LA CARTA ============ */
// En las pelotas bastaba con cesta.appendChild(pelota). Aquí, además de
// la pantalla, hay que actualizar los ARRAYS y los CONTADORES.

/** Mueve una carta, ya validada, del tapete de origen al de destino. */
function moverCarta(carta, tapeteOrigen, tapeteDestino) {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// Paso 1. DATOS. La carta es la última del mazo de origen:
	//   - sacarla de ese array        → mazoDe(tapeteOrigen).pop()
	//   - meterla en el del destino   → mazoDe(tapeteDestino).push(carta)
	//
	// Paso 2. PANTALLA. Como en las pelotas: tapeteDestino.appendChild(carta)
	//   (appendChild la MUEVE: no hace falta quitarla antes del origen).
	//
	// Paso 3. POSICIÓN. Fuera del tapete inicial no hay escalera: la carta
	//   va encima de la anterior y centrada. Copien estas cuatro líneas:
	//     carta.style.top = "50%";
	//     carta.style.left = "50%";
	//     carta.style.margin = "0";
	//     carta.style.transform = "translate(-50%, -50%)";
	//
	// Paso 4. CONTADORES (funciones de solitario.js):
	//   - decContador del contador del origen   (contadorDe(tapeteOrigen))
	//   - incContador del contador del destino
	//   - incContador de contMovimientos
	//
	// Paso 5. La carta que ha quedado arriba en el origen ahora se puede
	//   coger: llamar a actualizarArrastrables().
	//
	// Comprueben después de cada jugada: contador = mazoDe(...).length =
	// número de cartas que se ven en el tapete.
}


/* ============ 6. REGLAS (no tocan el DOM) ============ */
// ⚽ PELOTAS: esValida(pelota, cesta). Allí la regla era «mismo color y
// número siguiente, 1, 2, 3...». Aquí los receptores van al revés
// (12, 11, 10...) y la regla de color o palo depende del modo.
// Recuerden: dataset.numero es un TEXTO → Number(carta.dataset.numero)

/**
 * true si la carta cumple la regla de color o palo del modo actual
 * comparándola con la carta de arriba del receptor.
 */
function cumpleReglaModo(carta, cartaArriba) {
	if (modo === "color") {
		// Escalera de color: mismo color (YA HECHO, de ejemplo)
		return carta.dataset.color === cartaArriba.dataset.color;
	}
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// modo "alterna": color CONTRARIO → ¿qué operador es «distinto»?
	// modo "palo":    mismo PALO      → comparen dataset.palo
	return false;
}

/** true si la carta se puede dejar en un receptor que tiene ese mazo. */
function aceptaReceptor(carta, mazoReceptor) {
	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// Paso 1. numero = Number(carta.dataset.numero)
	//         cartaArriba = cartaDeArriba(mazoReceptor)
	//
	// Paso 2. Receptor VACÍO (cartaArriba === undefined):
	//         solo vale si numero es 12.
	//
	// Paso 3. Receptor con cartas: tienen que cumplirse las DOS cosas
	//         (operador &&):
	//         - numero es exactamente uno menos que el de cartaArriba
	//           (en las pelotas era pelotasDentro + 1; aquí, - 1)
	//         - cumpleReglaModo(carta, cartaArriba)
	return false;
}

/**
 * Aplica TODAS las reglas del juego. Devuelve true o false.
 * Truco: ir descartando los casos que NO valen con «if (...) return false;»
 * y dejar para el final los casos que sí pueden valer.
 */
function esMovimientoValido(carta, tapeteOrigen, tapeteDestino) {
	if (!partidaEnCurso) return false;            // sin partida no se juega (YA HECHO)
	if (tapeteOrigen === tapeteDestino) return false;  // soltar en su propio tapete (YA HECHO)

	/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
	// 3. Si el origen es un receptor → false (esReceptor).
	// 4. Si la carta NO es la de arriba de su mazo → false
	//    (comparen cartaDeArriba(mazoDe(tapeteOrigen)) con carta).
	// 5. Si el destino es tapeteSobrantes → vale solo si el origen es
	//    tapeteInicial (return tapeteOrigen === tapeteInicial;).
	// 6. Si el destino es un receptor → return aceptaReceptor(carta, mazoDe(tapeteDestino));
	// 7. En cualquier otro caso (el tapete inicial) → false.
	return false;
}


/* ============ 7. PRUEBAS DE LAS REGLAS ============ */
// Cartas «de prueba»: objetos con la misma forma que una carta (solo
// tienen dataset), para probar las reglas sin arrastrar.
// console.assert no muestra nada si se cumple; si falla, sale en rojo en
// la consola con el mensaje. Si no ven nada, ¡todas pasan!

const doceDia = { dataset: { numero: "12", palo: "dia", color: "rojo" } };
const onceDia = { dataset: { numero: "11", palo: "dia", color: "rojo" } };
const onceCac = { dataset: { numero: "11", palo: "cac", color: "rojo" } };
const onceCam = { dataset: { numero: "11", palo: "cam", color: "negro" } };

modo = "color";
console.assert(cumpleReglaModo(onceCac, doceDia) === true, "color: 11 rojo sobre 12 rojo");
console.assert(cumpleReglaModo(onceCam, doceDia) === false, "color: 11 negro sobre 12 rojo");

/*** !!!!!!!!!!!!!!!!!!! CODIGO !!!!!!!!!!!!!!!!!!!! ***/
// Añadan al menos:
//  - una prueba válida y una no válida del modo "alterna"
//  - una prueba válida y una no válida del modo "palo"
//  - aceptaReceptor: un 12 en un receptor vacío (aceptaReceptor(doceDia, []))
//    y un 11 en un receptor vacío.

modo = null;   // ¡Al terminar, dejar el modo como al cargar la página!


/* ============ 8. MEJORAS (opcionales) ============ */
// - Tapete verde si la jugada sería válida y rojo si no, en dragenter.
//   En dragenter el navegador NO deja leer dataTransfer.getData: guarden
//   la carta en una variable global en dragstart (let cartaArrastrada)
//   y pónganla a null en dragend. Luego, en alEntrar:
//     esMovimientoValido(cartaArrastrada, cartaArrastrada.parentElement, tapete)
//   y añadan la clase "valido" o "invalido" (ya están en arrastre.css).
// - Doble clic en una carta para enviarla al primer receptor que la acepte.
// - Animación al colocar la carta.
