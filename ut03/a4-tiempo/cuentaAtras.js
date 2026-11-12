const salida = document.getElementById('salida');
const segundosInput = prompt("Introduce el número de segundos para la cuenta atrás:");
let segundosRestantes = parseInt(segundosInput, 10);

if (Number.isNaN(segundosRestantes) || segundosRestantes < 0) {
    salida.textContent = "Por favor, introduce un número válido de segundos.";
} else {
    const idIntervalo = setInterval(() => {
        if (segundosRestantes > 0) {
            salida.textContent = `Quedan ${segundosRestantes} segundos...`;
            console.log(`Segundos restantes: ${segundosRestantes}`);
            segundosRestantes--;
        } else {
            salida.textContent = "¡Tiempo!";
            console.log("¡Tiempo! Intervalo cancelado.");
            clearInterval(idIntervalo); // Cancela el intervalo para que no siga ejecutándose
        }
    }, 1000);
}