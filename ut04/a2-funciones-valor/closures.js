'use strict';

/**
 * @param {number} [inicio=0]
 * @param {number} [paso=1]
 * @returns {Object}
 */

function crearContador(inicio = 0, paso = 1) {
    let cuenta = inicio;
    return {
        siguiente : function() {
            const actual = cuenta;
            cuenta += paso;
            return actual;
        },
        valor : function() {
            return cuenta;
        }
    };
}

/**
 * @returns {Function}
 */

function crearAcumulador() {
    let total = 0;
    return function(valor) {
        total += valor;
        return total;
    };
}

/**
 * @param {number} maximo 
 * @returns {Function} 
 */

function crearLimitador(maximo) {
  let llamadas = 0;
  return function() {
    if (llamadas < maximo) {
      llamadas += 1;
      return true;
    }
    return false;
  };
}


const contador = crearContador(5, 2);
console.assert(contador.siguiente() === 5, "Contador paso 1 falló");
console.assert(contador.siguiente() === 7, "Contador paso 2 falló");
console.assert(contador.valor() === 9, "Contador valor actual falló");

const acumulador = crearAcumulador();
console.assert(acumulador(10) === 10, "Acumulador 1 falló");
console.assert(acumulador(5) === 15, "Acumulador 2 falló");

const limitador = crearLimitador(2);
console.assert(limitador() === true, "Limitador llamada 1 falló");
console.assert(limitador() === true, "Limitador llamada 2 falló");
console.assert(limitador() === false, "Limitador llamada 3 (exceso) falló");