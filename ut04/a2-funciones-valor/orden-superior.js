function repetir(n, accion) {
  for (let i = 0; i < n; i++) {
    accion(i);
  }
}

function aplicarHasta(n, transformar, condicion) {
  for (let i = 0; i < n; i++) {
    if (condicion(transformar(i))) {
      return i;
    }
  }
  return -1;
}


let acumuladorPrueba = 0;
repetir(3, (i) => { acumuladorPrueba += i; });
console.assert(acumuladorPrueba === 3, "repetir falló");

const primerPar = aplicarHasta(5, (i) => i * 3, (val) => val > 5);
console.assert(primerPar === 2, "aplicarHasta falló");