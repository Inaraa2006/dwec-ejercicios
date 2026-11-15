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


const cont = crearContador(0, 1);
console.assert(cont.siguiente() === 0, "cont 1");
console.assert(cont.valor() === 1, "cont 2");

const acum = crearAcumulador();
console.assert(acum(5) === 5, "acum 1");
console.assert(acum(3) === 8, "acum 2");

const lim = crearLimitador(1);
console.assert(lim() === true, "lim 1");
console.assert(lim() === false, "lim 2");