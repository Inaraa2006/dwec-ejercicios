/**
 * @param {number} base
 * @param {number} exponente
 * @returns {number}
 */

function potencia(base, exponente) {
  if (exponente === 0) {
    return 1;
  }
  return base * potencia(base, exponente - 1);
}

/**
 * @param {number} numero
 * @returns {number}
 */

function sumaDigitos(n) {
  if (n < 10) {
    return n;
  }
  return (n % 10) + sumaDigitos(Math.floor(n / 10));
}

/**
 * @param {string} texto 
 * @returns {string} 
 */

function invertir(texto) {
  if (texto.length <= 1) {
    return texto;
  }
  return invertir(texto.slice(1)) + texto[0];
}

/**
 * @param {string} texto 
 * @returns {boolean}
 */

function esPalindromo(texto) {
  const limpio = texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  function comprobarRecursivo(str) {
    if (str.length <= 1) {
      return true;
    }
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
    return comprobarRecursivo(str.slice(1, -1));
  }

  return comprobarRecursivo(limpio);
}

console.assert(potencia(2, 3) === 8, "Potencia falló");
console.assert(sumaDigitos(1234) === 10, "Suma de dígitos falló");
console.assert(invertir("hola") === "aloh", "Invertir texto falló");
console.assert(esPalindromo("Dábale arroz a la zorra el abad") === true, "Palíndromo falló");