
/**
 * Comprueba si un elemento tiene todas las propiedades
 * obligatorias y sus tipos de datos son correctos.
 *
 * @param {Videojuego} elemento
 * @returns {boolean}
 */
function esElementoValido(elemento) {

    if (typeof elemento !== "object" || elemento === null || Array.isArray(elemento)) {
        return false;
    }

    if (
        typeof elemento.id !== "string" ||
        typeof elemento.titulo !== "string" ||
        typeof elemento.plataforma !== "string" ||
        typeof elemento.precio !== "number" ||
        typeof elemento.completado !== "boolean" ||
        typeof elemento.fechaLanzamiento !== "string" ||
        !Array.isArray(elemento.generos)
    ) {
        return false;
    }

    if (Number.isNaN(elemento.precio)) {
        return false;
    }

    if (!elemento.generos.every(genero => typeof genero === "string")) {
        return false;
    }
    const formatoISO = /^\d{4}-\d{2}-\d{2}$/;

    if (
        !formatoISO.test(elemento.fechaLanzamiento) ||
        Number.isNaN(Date.parse(elemento.fechaLanzamiento))
    ) {
        return false;
    }

    return true;
}


for (let i = 0; i < DATOS_INICIALES.length; i++) {

    console.assert(
        esElementoValido(DATOS_INICIALES[i]),
        `Error: el videojuego de la posición ${i} no es válido`
    );

}

console.log("Comprobación de videojuegos finalizada");
