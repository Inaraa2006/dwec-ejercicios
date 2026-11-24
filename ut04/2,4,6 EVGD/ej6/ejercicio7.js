/** Versión con bucles: obtiene el máximo. */
function maximoBucle(numeros) {
  if (numeros.length === 0) return undefined;
  let resultado = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > resultado) resultado = numeros[i];
  }
  return resultado;
}

/** Versión con reduce: obtiene el máximo. */
function maximo(numeros) {
  return numeros.length === 0 ? undefined :
    numeros.reduce((mayor, numero) => numero > mayor ? numero : mayor);
}

/** Versión con bucles: obtiene el mínimo. */
function minimoBucle(numeros) {
  if (numeros.length === 0) return undefined;
  let resultado = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < resultado) resultado = numeros[i];
  }
  return resultado;
}

/** Versión con reduce: obtiene el mínimo. */
function minimo(numeros) {
  return numeros.length === 0 ? undefined :
    numeros.reduce((menor, numero) => numero < menor ? numero : menor);
}

/** Versión con bucle: calcula la media. */
function mediaBucle(numeros) {
  if (numeros.length === 0) return 0;
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) suma += numeros[i];
  return suma / numeros.length;
}

/** Versión con reduce: calcula la media. */
function media(numeros) {
  return numeros.length === 0 ? 0 :
    numeros.reduce((suma, numero) => suma + numero, 0) / numeros.length;
}

/** Versión con bucle: devuelve las notas aprobadas (>= 5). */
function aprobadosBucle(numeros) {
  const resultado = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 5) resultado.push(numeros[i]);
  }
  return resultado;
}

/** Versión con filter: devuelve las notas aprobadas (>= 5). */
function aprobados(numeros) {
  return numeros.filter(numero => numero >= 5);
}

/** Versión con bucle: redondea todas las notas. */
function redondeadasBucle(numeros) {
  const resultado = [];
  for (let i = 0; i < numeros.length; i++) {
    resultado.push(Math.round(numeros[i]));
  }
  return resultado;
}

/** Versión con map: redondea todas las notas. */
function redondeadas(numeros) {
  return numeros.map(numero => Math.round(numero));
}

const notasA3 = [4.2, 7.8, 5.4, 3.9, 9.1];

console.assert(maximo(notasA3) === maximoBucle(notasA3));
console.assert(minimo(notasA3) === minimoBucle(notasA3));
console.assert(media(notasA3) === mediaBucle(notasA3));

console.assert(
    JSON.stringify(aprobados(notasA3)) ===
    JSON.stringify(aprobadosBucle(notasA3))
);

console.assert(
    JSON.stringify(redondeadas(notasA3)) ===
    JSON.stringify(redondeadasBucle(notasA3))
);