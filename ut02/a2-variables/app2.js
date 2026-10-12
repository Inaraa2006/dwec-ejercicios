'use strict'

const nombreReceta = 'Tarta de manzana';
const numeroComensales = 10;
const tiempoPreparacion = 60;
const esVegana = false;
const categoria = 'Postre';
let valoracion = 4.5;

const tipoReceta = typeof nombreReceta;
const tipoComensales = typeof numeroComensales;
const tipoTiempo = typeof tiempoPreparacion;
const tipoVegana = typeof esVegana;
const tipoCategoria = typeof categoria;
const tipoValoracion = typeof valoracion;

console.log('---RECETA---');
console.log(`Receta: ${nombreReceta} (${tipoReceta})`);
console.log(`Número de comensales: ${numeroComensales} (${tipoComensales})`);
console.log(`Tiempo de preparación: ${tiempoPreparacion} minutos (${tipoTiempo})`);
console.log(`Es vegana: ${esVegana} (${tipoVegana})`);
console.log(`Categoría: ${categoria} (${tipoCategoria})`);
console.log(`Valoración: ${valoracion} (${tipoValoracion})`);