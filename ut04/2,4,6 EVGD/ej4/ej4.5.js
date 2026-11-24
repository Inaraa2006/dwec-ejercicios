
const formatoPrecio = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR"
});

const formatoFecha = new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
});

const tabla = document.getElementById("tablaVideojuegos");

let contenido = "";

for (let i = 0; i < DATOS_INICIALES.length; i++) {

    const videojuego = DATOS_INICIALES[i];

    contenido += `
        <tr>
            <td>${videojuego.id}</td>
            <td>${videojuego.titulo}</td>
            <td>${videojuego.plataforma}</td>
            <td>${formatoPrecio.format(videojuego.precio)}</td>
            <td>${videojuego.completado ? "Sí" : "No"}</td>
            <td>${formatoFecha.format(new Date(videojuego.fechaLanzamiento + "T00:00:00"))}</td>
            <td>${videojuego.generos.join(", ")}</td>
        </tr>
    `;
}

tabla.innerHTML = contenido;
