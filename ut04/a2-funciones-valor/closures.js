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