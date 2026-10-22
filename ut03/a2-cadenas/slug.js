'use strict';
/**
 * @param {string} titulo
 */

function generarSlug (titulo){
    const slug = titulo
        .normalize('NFD') //separa las letras de las tildes
        .replace(/[̀-ͯ]/g, '') //quita las tildes
        .toLowerCase() //todo a minúsculas
        .trim() //quita los espacios de los extremos
        .replace(/[^a-z0-9]+/g, '-') // todo lo que no sea letra o dígito lo pasa a guión
        .replace(/^-+|-+$/g, ''); //quita los guiones sobrantes de los extremos

        const fechaHoy = new Date().toISOString().slice(0, 10);

        const nombreFichero = `${fechaHoy}-${slug}.md`;

        console.group('Slug y nombre de fichero:')
            console.log('Título original: ',titulo);
            console.log('Slug: ', slug);
            console.log('Nombre del fichero: ', nombreFichero);
        console.groupEnd();
}

//prompt
const tituloEntrada = prompt("Introduce un título: ");
if (tituloEntrada) {
    generarSlug(tituloEntrada);
}