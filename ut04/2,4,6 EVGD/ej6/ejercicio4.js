function valorInventario(libros) {
  return libros
    .filter(libro => libro.disponible)
    .reduce((total, libro) => total + libro.precio * libro.stock, 0);
}

function precioMedio(libros) {
  if (libros.length === 0) return 0;

  return libros.reduce((total, libro) => total + libro.precio, 0) / libros.length;
}

function masCaro(libros) {
  return libros.reduce((mayor, libro) =>
    mayor === undefined || libro.precio > mayor.precio ? libro : mayor
  , undefined);
}

function masAntiguo(libros) {
  return libros.reduce((antiguo, libro) =>
    antiguo === undefined || libro.anio < antiguo.anio ? libro : antiguo
  , undefined);
}
function contarPorCategoria(libros) {
  return libros.reduce((cuenta, libro) => {
    cuenta[libro.categoria] = (cuenta[libro.categoria] || 0) + 1;
    return cuenta;
  }, {});
}

function indicePorId(libros) {
  return libros.reduce((indice, libro) => {
    indice[libro.id] = libro;
    return indice;
  }, {});
}

console.log("4. Valor inventario:", valorInventario(libros));
console.log("4. Precio medio:", precioMedio(libros));
console.log("4. Más caro:", masCaro(libros));
console.log("4. Más antiguo:", masAntiguo(libros));
console.log("4. Libros por categoría:", contarPorCategoria(libros));
console.log("4. Índice por id:", indicePorId(libros));