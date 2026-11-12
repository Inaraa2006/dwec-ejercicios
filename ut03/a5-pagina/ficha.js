const salida = document.getElementById('salida');

// Datos de ejemplo del proyecto (ej. elemento de tu colección)
const elementoProyecto = {
    nombre: 'Guacamayo Azul',
    precioAdquisicion: 1250.75,
    fechaRegistro: new Date(2026, 8, 15)
};

// Formateadores Intl reutilizables
const formateadorMoneda = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
});

const formateadorFecha = new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'long'
});

// Generar la estructura con <article>, <h2> y <dl>
const tarjetaHTML = `
    <article style="border: 1px solid #ccc; padding: 1rem; border-radius: 8px;">
        <h2>${elementoProyecto.nombre}</h2>
        <dl>
            <dt><strong>Coste:</strong></dt>
            <dd>${formateadorMoneda.format(elementoProyecto.precioAdquisicion)}</dd>
            <dt><strong>Fecha de registro:</strong></dt>
            <dd>${formateadorFecha.format(elementoProyecto.fechaRegistro)}</dd>
        </dl>
    </article>
`;

salida.innerHTML = tarjetaHTML;