function tecnicosDisponiblesBaratos(libros) {
  return libros
    .filter(libro => libro.categoria === "tecnico" && libro.disponible && libro.precio < 30)
    .sort((a, b) => a.paginas - b.paginas)
    .map(libro => libro.titulo);
}


function etiquetasDeNovelas(libros) {
  return [...new Set(
    libros
      .filter(libro => libro.categoria === "novela")
      .flatMap(libro => libro.etiquetas)
  )].sort((a, b) => a.localeCompare(b, "es"));
}

function autorConMasLibros(libros) {
  const cuenta = libros.reduce((acumulado, libro) => {
    acumulado[libro.autor] = (acumulado[libro.autor] || 0) + 1;
    return acumulado;
  }, {});

  return Object.entries(cuenta)
    .sort((a, b) => b[1] - a[1])[0]?.[0];
}

console.log("6. Técnicos disponibles por menos de 30 euros:",
    tecnicosDisponiblesBaratos(libros));

console.log("6. Etiquetas de novelas:", etiquetasDeNovelas(libros));

console.log("6. Autor con más libros:", autorConMasLibros(libros));