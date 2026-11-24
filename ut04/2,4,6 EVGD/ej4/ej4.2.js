
/**
 * Representa un videojuego de la colección.
 *
 * @typedef {Object} Videojuego
 * @property {string} id - Identificador único.
 * @property {string} titulo - Nombre del videojuego.
 * @property {string} plataforma - Plataforma del videojuego.
 * @property {number} precio - Precio en euros.
 * @property {boolean} completado - Indica si se ha completado.
 * @property {string} fechaLanzamiento - Fecha en formato ISO (AAAA-MM-DD).
 * @property {string[]} generos - Géneros del videojuego.
 */

/** @type {Videojuego[]} */
const DATOS_INICIALES = [
    {
        id: "R001",
        titulo: "The Witcher 3",
        plataforma: "PC",
        precio: 29.99,
        completado: true,
        fechaLanzamiento: "2015-05-19",
        generos: ["RPG", "Aventura", "Acción"]
    },
    {
        id: "R002",
        titulo: "Minecraft",
        plataforma: "PC",
        precio: 19.99,
        completado: false,
        fechaLanzamiento: "2011-11-18",
        generos: ["Supervivencia", "Sandbox"]
    },
    {
        id: "R003",
        titulo: "God of War",
        plataforma: "PlayStation 5",
        precio: 49.99,
        completado: true,
        fechaLanzamiento: "2018-04-20",
        generos: ["Acción", "Aventura"]
    },
    {
        id: "R004",
        titulo: "Elden Ring",
        plataforma: "PC",
        precio: 59.99,
        completado: false,
        fechaLanzamiento: "2022-02-25",
        generos: ["RPG", "Acción"]
    },
    {
        id: "R005",
        titulo: "Mario Kart 8 Deluxe",
        plataforma: "Nintendo Switch",
        precio: 39.99,
        completado: false,
        fechaLanzamiento: "2017-04-28",
        generos: ["Carreras", "Multijugador"]
    },
    {
        id: "R006",
        titulo: "Red Dead Redemption 2",
        plataforma: "PC",
        precio: 24.99,
        completado: true,
        fechaLanzamiento: "2018-10-26",
        generos: ["Acción", "Aventura", "Mundo abierto"]
    },
    {
        id: "R007",
        titulo: "Cyberpunk 2077",
        plataforma: "PC",
        precio: 34.50,
        completado: false,
        fechaLanzamiento: "2020-12-10",
        generos: ["RPG", "Acción", "Mundo abierto", "Ciencia ficción"]
    },
    {
        id: "R008",
        titulo: "Super Mario Bros.",
        plataforma: "Nintendo Switch",
        precio: 9.99,
        completado: true,
        fechaLanzamiento: "1985-09-13",
        generos: ["Plataformas"]
    },
    {
        id: "R009",
        titulo: "Hogwarts Legacy",
        plataforma: "PlayStation 5",
        precio: 44.99,
        completado: false,
        fechaLanzamiento: "2023-02-10",
        generos: ["RPG", "Aventura", "Mundo abierto"]
    },
    {
        id: "R010",
        titulo: "Black Myth: Wukong",
        plataforma: "PC",
        precio: 69.99,
        completado: false,
        fechaLanzamiento: "2024-08-20",
        generos: ["Acción", "Aventura"]
    }
];
