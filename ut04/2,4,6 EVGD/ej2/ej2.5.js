const carpeta = {
 nombre: 'proyecto',
 ficheros: ['index.html', 'README.md'],
 subcarpetas: [
 { nombre: 'js', ficheros: ['app.js', 'datos.js'], subcarpetas: [] },
 { nombre: 'css', ficheros: ['estilos.css'], subcarpetas: [
 { nombre: 'temas', ficheros: ['claro.css', 'oscuro.css'], subcarpetas: [] },
 ] },
 ],
};
/** Cuenta todos los ficheros de una carpeta y de sus subcarpetas. */
function contarFicheros(c) {
 let total = c.ficheros.length;
 for (const sub of c.subcarpetas) {
 total += contarFicheros(sub); // la misma pregunta, para una carpeta más pequeña
 }
 return total;
}
contarFicheros(carpeta); // 7


function profundidad(c) {

    // Caso base: si no hay subcarpetas, la profundidad es 0.
    if (c.subcarpetas.length === 0) {
        return 0;
    }

    let maxima = 0;

    for (const sub of c.subcarpetas) {

        let nivel = profundidad(sub);

        if (nivel > maxima) {
            maxima = nivel;
        }
    }

    return maxima + 1;
}

console.log(profundidad(carpeta)); // 2



function buscarFichero(c, nombre) {

    if (c.ficheros.includes(nombre)) {
        return c.nombre + "/" + nombre;
    }

    for (const sub of c.subcarpetas) {

        let resultado = buscarFichero(sub, nombre);

        if (resultado !== null) {
            return c.nombre + "/" + resultado;
        }
    }
    return null;
}

console.log(buscarFichero(carpeta, "oscuro.css"));
// proyecto/css/temas/oscuro.css

console.log(buscarFichero(carpeta, "imagen.png"));
// null




function listar(c, sangria = '') {

    let resultado = c.nombre + "\n";

    function recorrer(actual, espacios) {

        // Mostramos los archivos de la carpeta actual.
        for (const fichero of actual.ficheros) {
            resultado += espacios + "- " + fichero + "\n";
        }

        // Recorremos las subcarpetas.
        for (const sub of actual.subcarpetas) {

            resultado += espacios + "- " + sub.nombre + "\n";

            // Entramos en la subcarpeta aumentando la sangría.
            recorrer(sub, espacios + "  ");
        }
    }

    recorrer(c, sangria);

    return resultado;
}

console.log(listar(carpeta));


