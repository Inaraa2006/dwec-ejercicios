// =====================================================
//  DRAG & DROP - Clasificando pelotas
// =====================================================

// Referencias a los elementos del HTML
const monton = document.getElementById("monton");
const cestas = document.querySelectorAll(".cesta");
const mensaje = document.getElementById("mensaje");
const registro = document.getElementById("registro");

// Escribe una línea en el registro de eventos
function anotar(texto) {
  const li = document.createElement("li");
  li.textContent = texto;
  registro.prepend(li); // lo más reciente arriba
}


// -----------------------------------------------------
// PASO 0: crear las pelotas
// -----------------------------------------------------
function crearPelota(numero, color) {
  const pelota = document.createElement("div");
  pelota.id = "pelota-" + numero + "-" + color;  // ej: pelota-3-rojo
  pelota.className = "pelota " + color;
  pelota.textContent = numero;
  pelota.dataset.numero = numero;
  pelota.dataset.color = color;

  // PASO 1: permitir que se pueda arrastrar
  pelota.draggable = true;

  // Eventos del ORIGEN (la pelota)
  pelota.addEventListener("mousedown", pinchar);
  pelota.addEventListener("dragstart", empezarArrastre);
  pelota.addEventListener("dragend", terminarArrastre);

  monton.appendChild(pelota);
}

for (let i = 1; i <= 5; i++) {
  crearPelota(i, "rojo");
  crearPelota(i, "azul");
}


// -----------------------------------------------------
// PASO 1: eventos de la pelota que se arrastra
// -----------------------------------------------------
function pinchar(evento) {
  anotar("mousedown: pinchan " + evento.target.id);
}

function empezarArrastre(evento) {
  // Guardamos el id de la pelota para leerlo al soltar
  evento.dataTransfer.setData("text/plain", evento.target.id);
  evento.target.classList.add("arrastrando");
  anotar("dragstart: empiezan a arrastrar " + evento.target.id);
}

function terminarArrastre(evento) {
  evento.target.classList.remove("arrastrando");
  anotar("dragend: sueltan el ratón");
}


// -----------------------------------------------------
// PASO 2: eventos de las cestas (destino)
// -----------------------------------------------------
cestas.forEach(function (cesta) {
  cesta.addEventListener("dragenter", entrar);
  cesta.addEventListener("dragover", pasarPorEncima);
  cesta.addEventListener("dragleave", salir);
  cesta.addEventListener("drop", soltar);
});

function entrar(evento) {
  evento.currentTarget.classList.add("sobre");
  anotar("dragenter: entran en la cesta " + evento.currentTarget.dataset.color);
}

function pasarPorEncima(evento) {
  // ¡IMPORTANTE! Sin esto el navegador NO deja soltar
  evento.preventDefault();
}

function salir(evento) {
  evento.currentTarget.classList.remove("sobre");
  anotar("dragleave: salen de la cesta " + evento.currentTarget.dataset.color);
}


// -----------------------------------------------------
// PASO 3: soltar la pelota
// -----------------------------------------------------
function soltar(evento) {
  evento.preventDefault();
  const cesta = evento.currentTarget;
  cesta.classList.remove("sobre");

  // Recuperamos el id que guardamos en dragstart
  const id = evento.dataTransfer.getData("text/plain");
  const pelota = document.getElementById(id);
  anotar("drop: sueltan " + id + " en la cesta " + cesta.dataset.color);
  if (!pelota) return;   // lo que soltaron no es una pelota

  // PASO 4: comprobar las reglas del juego
  if (esValida(pelota, cesta)) {
    cesta.appendChild(pelota);   // mover la pelota a la cesta
    pelota.draggable = false;    // ya no se puede mover
    comprobarFinal();
  } else {
    anotar("   ✘ movimiento no válido");
    cesta.classList.add("error");
    setTimeout(function () {
      cesta.classList.remove("error");
    }, 500);
  }
}


// -----------------------------------------------------
// PASO 4: reglas -> mismo color y número siguiente
// -----------------------------------------------------
function esValida(pelota, cesta) {
  const mismoColor = pelota.dataset.color === cesta.dataset.color;
  const pelotasDentro = cesta.querySelectorAll(".pelota").length;
  const esLaSiguiente = Number(pelota.dataset.numero) === pelotasDentro + 1;
  return mismoColor && esLaSiguiente;
}


// -----------------------------------------------------
// PASO 5: ¿se acabó el juego?
// -----------------------------------------------------
function comprobarFinal() {
  if (monton.children.length === 0) {
    mensaje.textContent = "🎉 ¡Todas las pelotas clasificadas!";
  }
}
