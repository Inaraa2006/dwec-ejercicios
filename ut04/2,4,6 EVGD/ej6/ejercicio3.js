function hayAgotados(libros) {
  return libros.some(libro => libro.stock === 0);
}


function todosConPrecio(libros) {
  return libros.every(libro => libro.precio > 0);
}

function existeId(libros, id) {
  return libros.some(libro => libro.id === id);
}

function tieneEtiqueta(libro, etiqueta) {
  return libro.etiquetas.includes(etiqueta);
}

console.log("3. Hay agotados:", hayAgotados(libros));
console.log("3. Todos tienen precio:", todosConPrecio(libros));
console.log("3. Existe L20:", existeId(libros, "L20"));
console.log("3. L01 tiene etiqueta canarias:",
    tieneEtiqueta(porId(libros, "L01"), "canarias"));