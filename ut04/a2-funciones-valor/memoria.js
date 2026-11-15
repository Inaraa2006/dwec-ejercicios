function memorizar(fn) {
  const cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    }
    const resultado = fn(n);
    cache[n] = resultado;
    return resultado;
  };
}


const lenta = (n) => {
  let res = 0;
  for (let i = 0; i < 10000000; i++) { res += i; }
  return n * 2;
};

const memoLenta = memorizar(lenta);
console.time("Primera llamada");
memoLenta(5);
console.timeEnd("Primera llamada");

console.time("Segunda llamada (caché)");
memoLenta(5);
console.timeEnd("Segunda llamada (caché)");

console.assert(memoLenta(5) === 10, "memorizar falló");