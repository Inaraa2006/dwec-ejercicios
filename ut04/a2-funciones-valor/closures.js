'use strict';

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
        },
        /*función nueva*/
        reiniciar : function() {
            cuenta = inicio;
            return cuenta;
        }
    };
}

function crearAcumulador() {
    let total = 0;
    return function(valor) {
        total += valor;
        return total;
    };
}

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
console.assert(cont.siguiente() === 0);
console.assert(cont.valor() === 1);
console.assert(cont.reiniciar() === 0);

const acum = crearAcumulador();
console.assert(acum(5) === 5);

const lim = crearLimitador(1);
console.assert(lim() === true);
console.assert(lim() === false);

/*comprobaciones nuevas*/
const c = crearContador(5, 2);
c.siguiente();
c.siguiente();
console.assert(c.valor() === 9);

const c2 = crearContador(10 ,1);
console.assert(c.reiniciar() === 5);
console.assert(c2.valor() === 10);