/* =====================================================================
   Prueba UD2 · Versión A · Ejercicio 3 · Escribe una función
   Coste de envío de un paquete
   ---------------------------------------------------------------------
   Nombre y apellidos: ___Inara Mendoza Acosta__________________

   Escribe aquí la función costeEnvio(pesoKg, zona) y el programa que
   la usa, según el enunciado. Documenta la función con JSDoc.
   ===================================================================== */
'use strict';
if (typeof prompt === 'undefined') { require('./_node-prompt.js'); } // solo actúa en Node

// ----- FUNCIÓN -----------------------------------------------------------
function validacion() {
   let pesoKg = Number(prompt("Introduce peso del paquete en kg:"));
   let tipoPeso = pesokg > 0 || pesokg <= 30;
   let zona = prompt("Introduce zona de envío:").toLowerCase();
   let tipoZona = zona === 'canarias' || zona === 'peninsula' || zona === 'europa';

   switch (tipoZona.trim())
   {
      case '1':
         if (zona = 'canarias') {
            tipoPeso * 1;
         }
      case '2':
         if (zona = 'peninsula') {
            tipoPeso * 1.5;
         }
      case '3':
         if (zona = 'europa') {
            tipoPeso * 2.5;
         }
   }

   }


// ----- PROGRAMA ----------------------------------------------------------



/* ---------------------------------------------------------------------
   CASOS DE PRUEBA (rellena la columna «obtenido» tras ejecutar)
   pesoKg | zona        | esperado | obtenido
   -------|-------------|----------|---------
   0.5    | canarias    | 3.50     |
   5      | peninsula   | 9.00     |
   8      | ' Europa '  | 21.00    |
   31     | canarias    | null     |
   abc    | canarias    | null     |
   --------------------------------------------------------------------- */
