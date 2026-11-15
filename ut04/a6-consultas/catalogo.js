/* =====================================================================
   catalogo.js · Colección común para los ejemplos y las actividades A6 y A7
   UD4 · Desarrollo Web en Entorno Cliente · 20 libros de una librería
   Las fechas van como texto ISO (AAAA-MM-DD) y los precios en euros.
   ===================================================================== */
'use strict';

/**
 * @typedef {Object} Libro
 * @property {string} id
 * @property {string} titulo
 * @property {string} autor
 * @property {'novela' | 'ensayo' | 'infantil' | 'tecnico' | 'poesia'} categoria
 * @property {number} precio
 * @property {number} paginas
 * @property {number} anio - Año de publicación.
 * @property {number} stock
 * @property {string[]} etiquetas
 * @property {string} fechaAlta - Fecha ISO AAAA-MM-DD.
 * @property {boolean} disponible
 */

/** @type {Libro[]} */
const libros = [
  { id: 'L01', titulo: 'Mararía', autor: 'Rafael Arozarena', categoria: 'novela', precio: 12.5, paginas: 192, anio: 1973, stock: 4, etiquetas: ['canarias', 'clásico'], fechaAlta: '2026-09-14', disponible: true },
  { id: 'L02', titulo: 'Eloquent JavaScript', autor: 'Marijn Haverbeke', categoria: 'tecnico', precio: 29.9, paginas: 472, anio: 2018, stock: 2, etiquetas: ['javascript', 'programación'], fechaAlta: '2026-09-15', disponible: true },
  { id: 'L03', titulo: 'Poemas de la isla', autor: 'Josefina de la Torre', categoria: 'poesia', precio: 9, paginas: 120, anio: 1989, stock: 0, etiquetas: ['canarias', 'poesía'], fechaAlta: '2026-09-16', disponible: false },
  { id: 'L04', titulo: 'Guad', autor: 'Alfonso García-Ramos', categoria: 'novela', precio: 14, paginas: 210, anio: 1971, stock: 1, etiquetas: ['canarias', 'clásico'], fechaAlta: '2026-09-17', disponible: true },
  { id: 'L05', titulo: 'Clean Code', autor: 'Robert C. Martin', categoria: 'tecnico', precio: 38.5, paginas: 464, anio: 2008, stock: 3, etiquetas: ['programación', 'buenas prácticas'], fechaAlta: '2026-09-18', disponible: true },
  { id: 'L06', titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', categoria: 'infantil', precio: 8.95, paginas: 96, anio: 1943, stock: 10, etiquetas: ['clásico', 'ilustrado'], fechaAlta: '2026-09-19', disponible: true },
  { id: 'L07', titulo: 'Sapiens', autor: 'Yuval Noah Harari', categoria: 'ensayo', precio: 21.9, paginas: 496, anio: 2011, stock: 5, etiquetas: ['historia', 'divulgación'], fechaAlta: '2026-09-20', disponible: true },
  { id: 'L08', titulo: 'JavaScript: The Good Parts', autor: 'Douglas Crockford', categoria: 'tecnico', precio: 24.95, paginas: 176, anio: 2008, stock: 0, etiquetas: ['javascript', 'programación'], fechaAlta: '2026-09-21', disponible: false },
  { id: 'L09', titulo: 'Crónica de una muerte anunciada', autor: 'Gabriel García Márquez', categoria: 'novela', precio: 11.9, paginas: 136, anio: 1981, stock: 6, etiquetas: ['clásico', 'latinoamérica'], fechaAlta: '2026-09-22', disponible: true },
  { id: 'L10', titulo: 'Las aventuras de Tom Sawyer', autor: 'Mark Twain', categoria: 'infantil', precio: 7.5, paginas: 288, anio: 1876, stock: 2, etiquetas: ['clásico', 'aventuras'], fechaAlta: '2026-09-23', disponible: true },
  { id: 'L11', titulo: 'Diseño de interfaces web', autor: 'Equipo Síntesis', categoria: 'tecnico', precio: 27, paginas: 240, anio: 2022, stock: 4, etiquetas: ['web', 'diseño'], fechaAlta: '2026-09-24', disponible: true },
  { id: 'L12', titulo: 'Antología poética', autor: 'Pedro García Cabrera', categoria: 'poesia', precio: 13.5, paginas: 160, anio: 1980, stock: 1, etiquetas: ['canarias', 'poesía'], fechaAlta: '2026-09-25', disponible: true },
  { id: 'L13', titulo: 'Una habitación propia', autor: 'Virginia Woolf', categoria: 'ensayo', precio: 10.5, paginas: 144, anio: 1929, stock: 3, etiquetas: ['clásico', 'feminismo'], fechaAlta: '2026-09-26', disponible: true },
  { id: 'L14', titulo: 'Momo', autor: 'Michael Ende', categoria: 'infantil', precio: 12, paginas: 272, anio: 1973, stock: 0, etiquetas: ['clásico', 'fantasía'], fechaAlta: '2026-09-27', disponible: false },
  { id: 'L15', titulo: 'Angular en acción', autor: 'Equipo Síntesis', categoria: 'tecnico', precio: 32, paginas: 380, anio: 2025, stock: 2, etiquetas: ['web', 'angular', 'programación'], fechaAlta: '2026-09-28', disponible: true },
  { id: 'L16', titulo: 'Nos han dado la tierra', autor: 'Juan Rulfo', categoria: 'novela', precio: 9.9, paginas: 112, anio: 1953, stock: 7, etiquetas: ['clásico', 'latinoamérica'], fechaAlta: '2026-09-29', disponible: true },
  { id: 'L17', titulo: 'Breve historia del tiempo', autor: 'Stephen Hawking', categoria: 'ensayo', precio: 15.9, paginas: 256, anio: 1988, stock: 2, etiquetas: ['divulgación', 'ciencia'], fechaAlta: '2026-09-30', disponible: true },
  { id: 'L18', titulo: 'Las criadas', autor: 'Mercedes Pinto', categoria: 'novela', precio: 16, paginas: 200, anio: 1926, stock: 1, etiquetas: ['canarias', 'clásico', 'feminismo'], fechaAlta: '2026-10-01', disponible: true },
  { id: 'L19', titulo: 'Cuentos de la selva', autor: 'Horacio Quiroga', categoria: 'infantil', precio: 6.5, paginas: 128, anio: 1918, stock: 8, etiquetas: ['clásico', 'latinoamérica', 'aventuras'], fechaAlta: '2026-10-02', disponible: true },
  { id: 'L20', titulo: 'Romancero gitano', autor: 'Federico García Lorca', categoria: 'poesia', precio: 8, paginas: 104, anio: 1928, stock: 5, etiquetas: ['clásico', 'poesía'], fechaAlta: '2026-10-03', disponible: true },
];
