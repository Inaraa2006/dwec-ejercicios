const textoNacimiento = prompt("Introduce tu fecha de nacimiento (AAAA-MM-DD):");
const fechaNacimiento = new Date(textoNacimiento);

if (Number.isNaN(fechaNacimiento.getTime())) {
    console.error("Fecha inválida. Debes usar el formato ISO (AAAA-MM-DD).");
} else {
    const hoy = new Date();

    // 1. Cálculo exacto de la edad
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    // 2. Día de la semana en que nació (usando Intl)
    const opcionesDia = { weekday: 'long' };
    const diaNacimiento = new Intl.DateTimeFormat('es-ES', opcionesDia).format(fechaNacimiento);

    // 3. Días que faltan para el próximo cumpleaños
    const proximoCumple = new Date(hoy.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate());
    if (proximoCumple < hoy) {
        proximoCumple.setFullYear(hoy.getFullYear() + 1);
    }
    
    const milisegundosFaltan = proximoCumple - hoy;
    const diasFaltan = Math.ceil(milisegundosFaltan / (1000 * 60 * 60 * 24));

    console.log(`Edad cumplida: ${edad} años`);
    console.log(`Naciste un: ${diaNacimiento}`);
    console.log(`Faltan ${diasFaltan} días para tu próximo cumpleaños.`);
}