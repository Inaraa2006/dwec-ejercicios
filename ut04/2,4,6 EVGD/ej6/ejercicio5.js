function ordenarPor(libros, campo, descendente = false) {
  return [...libros].sort((a, b) => {
    let resultado;

    if (typeof a[campo] === "string") {
      resultado = a[campo].localeCompare(b[campo], "es");
    } else {
      resultado = a[campo] - b[campo];
    }

    return descendente ? -resultado : resultado;
  });
}

function topN(libros, n, campo) {
  return ordenarPor(libros, campo, true).slice(0, n);
}


function agruparPorCategoria(libros) {
  return Object.groupBy(libros, libro => libro.categoria);
}

function agruparPorDecada(libros) {
  return Object.groupBy(libros, libro => {
    const decada = Math.floor(libro.anio / 10) * 10;
    return `${decada}`;
  });
}

function estadisticasPorCategoria(libros) {
  const grupos = agruparPorCategoria(libros);

  return Object.fromEntries(
    Object.entries(grupos).map(([categoria, grupo]) => [
      categoria,
      {
        cantidad: grupo.length,
        precioMedio: grupo.reduce((total, libro) => total + libro.precio, 0) / grupo.length,
        paginasTotales: grupo.reduce((total, libro) => total + libro.paginas, 0)
      }
    ])
  );
}

console.log("5. Ordenados por precio:", ordenarPor(libros, "precio"));
console.log("5. Cinco con más páginas:", topN(libros, 5, "paginas"));
console.log("5. Agrupados por categoría:", agruparPorCategoria(libros));
console.log("5. Agrupados por década:", agruparPorDecada(libros));
console.log("5. Estadísticas por categoría:", estadisticasPorCategoria(libros));