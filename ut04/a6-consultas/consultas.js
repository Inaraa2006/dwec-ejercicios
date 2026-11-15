function titulos(libros) {
  return libros.map(l => l.titulo);
}

function resumenes(libros) {
  const f = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
  return libros.map(l => `${l.titulo} (${l.anio}) · ${f.format(l.precio)}`);
}

function conIgic(libros) {
  return libros.map(l => ({
    ...l,
    precio: Math.round(l.precio * 1.07 * 100) / 100
  }));
}

function filasHtml(libros) {
  return libros.map(l => `<tr><td>${l.titulo}</td><td>${l.autor}</td><td>${l.precio} €</td></tr>`).join('');
}

function disponibles(libros) {
  return libros.filter(l => l.disponible);
}

function porCategoria(libros, categoria) {
  return libros.filter(l => l.categoria === categoria);
}

function entrePrecios(libros, min, max) {
  return libros.filter(l => l.precio >= min && l.precio <= max);
}

function conEtiqueta(libros, etiqueta) {
  return libros.filter(l => l.etiquetas && l.etiquetas.includes(etiqueta));
}

function buscar(libros, texto) {
  const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const t = norm(texto);
  return libros.filter(l => norm(l.titulo).includes(t) || norm(l.autor).includes(t));
}

function porId(libros, id) {
  return libros.find(l => l.id === id);
}

function posicionDe(libros, id) {
  return libros.findIndex(l => l.id === id);
}

function hayAgotados(libros) {
  return libros.some(l => !l.disponible);
}

function todosConPrecio(libros) {
  return libros.every(l => typeof l.precio === 'number' && l.precio > 0);
}

function existeId(libros, id) {
  return libros.some(l => l.id === id);
}

function tieneEtiqueta(libro, etiqueta) {
  return libro.etiquetas && libro.etiquetas.includes(etiqueta);
}

function valorInventario(libros) {
  return libros.filter(l => l.disponible).reduce((acc, l) => acc + (l.precio * (l.stock || 1)), 0);
}

function precioMedio(libros) {
  if (libros.length === 0) return 0;
  return libros.reduce((acc, l) => acc + l.precio, 0) / libros.length;
}

function masCaro(libros) {
  if (libros.length === 0) return undefined;
  return libros.reduce((prev, curr) => curr.precio > prev.precio ? curr : prev);
}

function masAntiguo(libros) {
  if (libros.length === 0) return undefined;
  return libros.reduce((prev, curr) => curr.anio < prev.anio ? curr : prev);
}

function contarPorCategoria(libros) {
  return libros.reduce((acc, l) => {
    acc[l.categoria] = (acc[l.categoria] || 0) + 1;
    return acc;
  }, {});
}

function indicePorId(libros) {
  return libros.reduce((acc, l) => {
    acc[l.id] = l;
    return acc;
  }, {});
}

function ordenarPor(libros, campo, descendente = false) {
  return libros.toSorted((a, b) => {
    const va = a[campo];
    const vb = b[campo];
    const comp = typeof va === 'string' ? va.localeCompare(vb) : va - vb;
    return descendente ? -comp : comp;
  });
}

function topN(libros, n, campo) {
  return libros.toSorted((a, b) => b[campo] - a[campo]).slice(0, n);
}

function agruparPorCategoria(libros) {
  return Object.groupBy(libros, l => l.categoria);
}

function agruparPorDecada(libros) {
  return Object.groupBy(libros, l => `${Math.floor(l.anio / 10) * 10}s`);
}

function estadisticasPorCategoria(libros) {
  const grupos = Object.groupBy(libros, l => l.categoria);
  const res = {};
  for (const [cat, lista] of Object.entries(grupos)) {
    res[cat] = {
      cantidad: lista.length,
      precioMedio: lista.reduce((acc, l) => acc + l.precio, 0) / lista.length,
      paginasTotales: lista.reduce((acc, l) => acc + l.paginas, 0)
    };
  }
  return res;
}

function consulta1(libros) {
  return libros.filter(l => l.categoria === 'tecnico' && l.disponible && l.precio < 30).toSorted((a, b) => a.paginas - b.paginas).map(l => l.titulo);
}

function consulta2(libros) {
  return [...new Set(libros.filter(l => l.categoria === 'novela').flatMap(l => l.etiquetas || []))].toSorted((a, b) => a.localeCompare(b));
}

function consulta3(libros) {
  const cont = libros.reduce((acc, l) => {
    acc[l.autor] = (acc[l.autor] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(cont).reduce((max, curr) => curr[1] > max[1] ? curr : max, ['', 0])[0];
}

const notas = [7.5, 4, 9, 6.25, 10, 3.5, 8];
const maximo = notas.reduce((m, n) => n > m ? n : m, notas[0]);
const minimo = notas.reduce((m, n) => n < m ? n : m, notas[0]);
const media = notas.reduce((a, n) => a + n, 0) / notas.length;
const aprobados = notas.filter(n => n >= 5).length;
const redondeadas = notas.map(n => Math.round(n));

console.assert(titulos(libros).length === 20, "titulos");
console.assert(disponibles(libros).length === 17, "disponibles");
console.assert(aprobados === 5, "aprobados");