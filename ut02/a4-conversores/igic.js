'use strict';

/**
 * @param {number} base
 * @param {number} tipo
 * @returns {Object}
 */

function precioConIgic (base, tipo) {
    let tipoAplicado = tipo ?? 7;
    let impuesto = base * (tipoAplicado / 100);
    let total = base + impuesto;
    return { impuesto: impuesto, total: total};
}

let precioBase = Number(prompt("Introduce el precio sin impuestos:"));
let tipoIgicInput = prompt("Introduce el tipo de IGIC:");
let tipoIgic = tipoIgicInput === null ? null : Number(tipoIgicInput);
let resultadoIgic = precioConIgic(precioBase, tipoIgic);

console.log(`Precio base: ${precioBase.toFixed(2)}€`);
console.log(`Impuesto aplicado: ${resultadoIgic.impuesto.toFixed(2)}€`);
console.log(`Total: ${resultadoIgic.total.toFixed(2)}€`);