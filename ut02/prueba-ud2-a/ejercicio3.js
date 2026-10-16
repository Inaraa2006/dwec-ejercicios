/* =====================================================================
   Prueba UD2 · Versión A · Ejercicio 3 · Escribe una función
   Coste de envío de un paquete
   ---------------------------------------------------------------------
   Nombre y apellidos: Inara Mendoza Acosta

   Escribe aquí la función costeEnvio(pesoKg, zona) y el programa que
   la usa, según el enunciado. Documenta la función con JSDoc.
   ===================================================================== */
'use strict';
if (typeof prompt === 'undefined') { require('./_node-prompt.js'); } // solo actúa en Node

// ----- FUNCIÓN -----------------------------------------------------------
/**
 * @param {number} pesoKg
 * @param {string} zona
 * @returns {number|null}
 */

function costeEnvio(pesoKg, zona) {
   const normalizarZona = typeof zona === 'string'?zona.trim().toLowerCase():'';

   if (isNaN(pesoKg) || pesoKg <= 0 || pesoKg > 30){
      return null;
   }

   if (normalizarZona !== 'canarias' && normalizarZona !== 'peninsula' && normalizarZona !== 'europa'){
      return null;
   }
   
   let tarifaBase = 0;
   if (pesoKg <= 1){
      tarifaBase = 3.50;
   } else if (pesoKg <= 5){
      tarifaBase = 6.00;
   } else {
      tarifaBase = 6.00 + (pesoKg -5) * 0.80;
   }
   
   let multiplicadorZona = 1;
   switch (normalizarZona){
      case 'canarias':
         multiplicadorZona = 1;
         break;
      case 'peninsula':
         multiplicadorZona = 1.5;
         break;
      case 'europa':
         multiplicadorZona = 2.5;
         break;
   }

   return tarifaBase * multiplicadorZona;
}


// ----- PROGRAMA ----------------------------------------------------------

const peso = prompt('Introduce el peso del paquete en kg: ');
const zona = prompt("Introduce la zona de envío: ");
const coste = (peso === null || zona === null)? null: costeEnvio(Number(peso),zona)

const resultado = coste == null? 'Datos no válidos':`Coste del envío: ${coste.toFixed(2)}€`;
console.log(resultado);


/* ---------------------------------------------------------------------
   CASOS DE PRUEBA (rellena la columna «obtenido» tras ejecutar)
   pesoKg | zona        | esperado | obtenido
   -------|-------------|----------|---------
   0.5    | canarias    | 3.50     | 3.50€
   5      | peninsula   | 9.00     | 9.00€
   8      | ' Europa '  | 21.00    | 21.00€
   31     | canarias    | null     | Datos no válidos
   abc    | canarias    | null     | Datos no válidos
   --------------------------------------------------------------------- */
