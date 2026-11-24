function disponibles(libros) {
  return libros.filter(libro => libro.disponible);
}

function porCategoria(libros, categoria) {
  return libros.filter(libro => libro.categoria === categoria);
}

function entrePrecios(libros, min, max) {
  return libros.filter(libro => libro.precio >= min && libro.precio <= max);
}

function conEtiqueta(libros, etiqueta) {
  return libros.filter(libro => libro.etiquetas.includes(etiqueta));
}

function normalizar(texto) {
  return texto.toLowerCase()
    .normalize("NFD")
    .replace(/[\\u0300-\\u036f]/g, "");
}


function buscar(libros, texto) {
  const busqueda = normalizar(texto);

  return libros.filter(libro =>
    normalizar(libro.titulo).includes(busqueda) ||
    normalizar(libro.autor).includes(busqueda)
  );
}

function porId(libros, id) {
  return libros.find(libro => libro.id === id);
}

function posicionDe(libros, id) {
  return libros.findIndex(libro => libro.id === id);
}

console.log("2. Disponibles:", disponibles(libros));
console.log("2. Novelas:", porCategoria(libros, "novela"));
console.log("2. Entre 10 y 20 euros:", entrePrecios(libros, 10, 20));
console.log("2. Con etiqueta clásico:", conEtiqueta(libros, "clásico"));
console.log("2. Buscar MARARIA:", buscar(libros, "MARARIA"));
console.log("2. Libro L01:", porId(libros, "L01"));
console.log("2. Posición de L01:", posicionDe(libros, "L01"));

