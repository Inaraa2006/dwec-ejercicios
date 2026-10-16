/* =====================================================================
   _node-prompt.js · Fichero de apoyo (NO forma parte de las soluciones)
   ---------------------------------------------------------------------
   prompt() y alert() solo existen en el navegador. Este fichero los
   "fabrica" para Node.js, de modo que los mismos .js de las actividades
   se puedan ejecutar y depurar paso a paso desde VS Code o la terminal.

   Cada solución lo carga con esta línea, que en el navegador no hace nada
   porque allí prompt ya existe:

     if (typeof prompt === 'undefined') { require('../_node-prompt.js'); }

   Equivalencias con el cuadro de diálogo del navegador:
     · Escribir y pulsar Intro      -> botón Aceptar (devuelve el texto)
     · Pulsar Intro sin escribir    -> Aceptar con el cuadro vacío ('')
     · Ctrl + D en una línea vacía  -> botón Cancelar (devuelve null)
   ===================================================================== */
'use strict';

const fs = require('fs');

/**
 * Lee una línea del teclado de forma síncrona (el programa espera, igual
 * que espera el navegador mientras el cuadro de prompt está abierto).
 * @returns {string|null} El texto escrito, o null si se cancela (Ctrl + D).
 */
function leerLinea() {
  const bytes = [];
  const buffer = Buffer.alloc(1);
  for (;;) {
    let leidos;
    try {
      leidos = fs.readSync(0, buffer, 0, 1, null);
    } catch (error) {
      if (error.code === 'EAGAIN') {
        // El teclado aún no tiene datos: esperamos 20 ms y reintentamos
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 20);
        continue;
      }
      if (error.code !== 'EOF') {
        throw error;
      }
      leidos = 0;
    }
    if (leidos === 0) {
      // Fin de la entrada (Ctrl + D): equivale a Cancelar si no se escribió nada
      return bytes.length > 0 ? Buffer.from(bytes).toString('utf8') : null;
    }
    if (buffer[0] === 10) {
      break; // salto de línea: el usuario ha pulsado Intro
    }
    if (buffer[0] !== 13) {
      bytes.push(buffer[0]);
    }
  }
  return Buffer.from(bytes).toString('utf8');
}

globalThis.prompt = function prompt(mensaje = '') {
  process.stdout.write(`${mensaje} `);
  const respuesta = leerLinea();
  if (respuesta === null) {
    process.stdout.write('(cancelado)\n');
  } else if (!process.stdin.isTTY) {
    process.stdout.write(`${respuesta}\n`); // eco cuando la entrada viene de un fichero
  }
  return respuesta;
};

globalThis.alert = function alert(mensaje = '') {
  console.log(`[alert] ${mensaje}`);
};
