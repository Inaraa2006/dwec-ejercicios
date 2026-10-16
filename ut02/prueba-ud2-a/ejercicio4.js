/* =====================================================================
   Prueba UD2 · Versión A · Ejercicio 4 · Amplía el código
   Mini consola con menú
   ---------------------------------------------------------------------
   Nombre y apellidos: ______________________________________________

   El programa ya funciona con las opciones 1 y 2. Tu tarea:
     a) Escribe la función sumarDigitos(numero) con JSDoc.
     b) Escribe la función opcionDigitos() (opción 3 del menú).
     c) Conecta la opción 3 al menú (texto del menú y case del switch).
   No modifiques pedirNumero ni las opciones 1 y 2.
   ===================================================================== */
'use strict';
if (typeof prompt === 'undefined') { require('./_node-prompt.js'); } // solo actúa en Node

// =====================================================================
// 1. FUNCIÓN DE APOYO (no modificar)
// =====================================================================

/**
 * Pide un número al usuario hasta que sea válido (numérico y en rango).
 * @param {string} mensaje - Texto del cuadro de diálogo.
 * @param {number} [min=-Infinity] - Valor mínimo admitido.
 * @param {number} [max=Infinity] - Valor máximo admitido.
 * @returns {number|null} El número válido, o null si el usuario cancela.
 */
function pedirNumero(mensaje, min = -Infinity, max = Infinity) {
  let texto;
  let numero;
  do {
    texto = prompt(mensaje);
    if (texto === null) {
      return null; // Cancelar: se avisa a quien llama
    }
    numero = Number(texto);
  } while (texto.trim() === '' || Number.isNaN(numero) || numero < min || numero > max);
  return numero;
}

// =====================================================================
// 2. OPCIONES DEL MENÚ
// =====================================================================

/**
 * Opción 1. Muestra la tabla de multiplicar de un número del 1 al 10.
 * @returns {void}
 */
function opcionTabla() {
  const numero = pedirNumero('Número para la tabla (1-10):', 1, 10);
  if (numero === null) {
    console.log('Operación cancelada.');
    return;
  }
  let tabla = '';
  for (let i = 1; i <= 10; i += 1) {
    tabla += `${numero} × ${i} = ${numero * i}\n`;
  }
  console.log(tabla);
}

/**
 * Opción 2. Suma y media de los números del 1 al N.
 * @returns {void}
 */
function opcionSuma() {
  const limite = pedirNumero('Valor de N (1-1000):', 1, 1000);
  if (limite === null) {
    console.log('Operación cancelada.');
    return;
  }
  let suma = 0;
  for (let i = 1; i <= limite; i += 1) {
    suma += i;
  }
  const media = (suma / limite).toFixed(2);
  console.log(`Suma de 1 a ${limite}: ${suma} · Media: ${media}`);
}

// ----- a) ESCRIBE AQUÍ sumarDigitos(numero) -------------------------------

function sumarDigitos(numero){
  let numero = Number(prompt("Introduce un número para sumar sus dígitos: "));
  let suma = 0;
  for ( let i = 1; i <= numero; i++) {
    suma += i;
  }
  console.log("La suma de los dígitos del número es: ");
}

// ----- b) ESCRIBE AQUÍ opcionDigitos() ------------------------------------

function opcionDigitos(){
  
}

// =====================================================================
// 3. MENÚ PRINCIPAL
// =====================================================================

const MENU = `MINI CONSOLA · Prueba UD2
1. Tabla de multiplicar
2. Suma y media de 1 a N
0. Salir
Elige una opción:`;

let opcion;
do {
  opcion = pedirNumero(MENU, 0, 9);
  switch (opcion) {
    case 1:
      opcionTabla();
      break;
    case 2:
      opcionSuma();
      break;
    case 3:
      opcionDigitos();
      break;
    case 0:
    case null:
      console.log('Hasta luego.');
      break;
    default:
      console.log('Opción no disponible.');
  }
} while (opcion !== 0 && opcion !== null);
