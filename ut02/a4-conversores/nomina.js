'use strict'

let salaroBrutoAnual = Number(prompt("Introduce el salario bruto anual:"));
let numPagas = Number(prompt("Introduce el número de pagas: (12 o 14)"));

let salarioBrutoMensual = salaroBrutoAnual / numPagas;
let irpf = salarioBrutoMensual * 0.15;
let seguridadSocial = salarioBrutoMensual * 0.0647;
let netoMensual = salarioBrutoMensual - irpf - seguridadSocial;

console.log(`Calculadora de nómina simplificada`);
console.table({
    "Bruto mensual": salarioBrutoMensual.toFixed(2) + "€",
    "Retención IRPF (15%)": irpf.toFixed(2) + "€",
    "Seguridad Social (6.47%)": seguridadSocial.toFixed(2) + "€",
    "Neto mensual": netoMensual.toFixed(2) + "€"
});