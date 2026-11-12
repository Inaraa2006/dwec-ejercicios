const salida = document.getElementById('salida');

// Cinco elementos separados por comas
const textoElementos = 'León, Tigre, Elefante, Jirafa, Cebra';
const arrayElementos = textoElementos.split(',');

// Acumular el HTML en una variable
let htmlAcumulado = '<ul>';
for (const elemento of arrayElementos) {
    htmlAcumulado += `<li>${elemento.trim()}</li>`;
}
htmlAcumulado += '</ul>';

// Asignar al DOM una sola vez
salida.innerHTML = htmlAcumulado;