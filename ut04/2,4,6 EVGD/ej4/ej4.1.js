
/**
 * Representa un videojuego de la colección.
 * 
 * @typedef {Object} Videojuego
 * @property {number} id - Identificador único del videojuego.
 * @property {string} titulo - Nombre del videojuego.
 * @property {string} plataforma - Plataforma en la que se puede jugar.
 * @property {number} precio - Precio del videojuego en euros.
 * @property {boolean} completado - Indica si el videojuego ha sido completado.
 * @property {string} fechaLanzamiento - Fecha de lanzamiento en formato ISO (AAAA-MM-DD).
 * @property {string[]} generos - Lista de géneros del videojuego.
 */

/** @type {Videojuego[]} */
const videojuegos = [
    {
        id: 1,
        titulo: "The Witcher 3",
        plataforma: "PC",
        precio: 29.99,
        completado: true,
        fechaLanzamiento: "2015-05-19",
        generos: ["RPG", "Aventura", "Acción"]
    },
    {
        id: 2,
        titulo: "Minecraft",
        plataforma: "PC",
        precio: 19.99,
        completado: false,
        fechaLanzamiento: "2011-11-18",
        generos: ["Supervivencia", "Sandbox"]
    },
    {
        id: 3,
        titulo: "God of War",
        plataforma: "PlayStation 5",
        precio: 49.99,
        completado: true,
        fechaLanzamiento: "2018-04-20",
        generos: ["Acción", "Aventura"]
    },
    {
        id: 4,
        titulo: "Elden Ring",
        plataforma: "PC",
        precio: 59.99,
        completado: false,
        fechaLanzamiento: "2022-02-25",
        generos: ["RPG", "Soulslike"]
    },
    {
        id: 5,
        titulo: "Mario Kart 8 Deluxe",
        plataforma: "Nintendo Switch",
        precio: 39.99,
        completado: false,
        fechaLanzamiento: "2017-04-28",
        generos: ["Carreras", "Multijugador"]
    },
    {
        id: 6,
        titulo: "Red Dead Redemption 2",
        plataforma: "PC",
        precio: 39.99,
        completado: true,
        fechaLanzamiento: "2018-10-26",
        generos: ["Acción", "Aventura", "Mundo abierto"]
    }
];
console.table(videojuegos)