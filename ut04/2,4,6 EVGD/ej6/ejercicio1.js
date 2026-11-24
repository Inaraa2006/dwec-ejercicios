function titulos(libros) {
  return libros.map(libro => libro.titulo);
}

function resumenes(libros) {
  const euros = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR"
  });

  return libros.map(libro =>
    `${libro.titulo} (${libro.anio}) · ${euros.format(libro.precio)}`
  );
}


function conIgic(libros) {
  return libros.map(libro => ({
    ...libro,
    precio: Number((libro.precio * 1.07).toFixed(2))
  }));
}


function filasHtml(libros) {
  return libros.map(libro =>
    `<tr><td>${libro.titulo}</td><td>${libro.autor}</td><td>${libro.precio}</td></tr>`
  ).join("");
}
console.log("1. Títulos:", titulos(libros));
console.log("1. Resúmenes:", resumenes(libros));

// Comprobar que no modifica el catálogo original.
const precioOriginal = libros[0].precio;
const copiaConIgic = conIgic(libros);
console.assert(libros[0].precio === precioOriginal,
    "conIgic ha modificado el catálogo original");

  
console.log("1. Copia con IGIC:", copiaConIgic);
console.log("1. Filas HTML:", filasHtml(libros));
