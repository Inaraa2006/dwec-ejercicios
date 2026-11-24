
const jsonBonito = JSON.stringify(DATOS_INICIALES, null, 2);

console.log("JSON generado:");
console.log(jsonBonito);

console.log("Longitud del JSON:", jsonBonito.length, "caracteres");

const copia = JSON.parse(jsonBonito);

console.assert(
    copia[0].titulo === DATOS_INICIALES[0].titulo,
    "Error: los títulos no coinciden"
);
console.assert(
    copia[0] !== DATOS_INICIALES[0],
    "Error: los objetos deberían ser independientes"
);

console.log("Conversión JSON completada");
