//Inara Mendoza 13-10-2026

'use strict'

function iniciarConsola() {
    let opcion;
    do {
        opcion = prompt(
            'CONSOLA DE UTILIDADES · Inara Mendoza\n' +
            '1. Conversor de unidades\n' +
            '2. Calculadora de IMC\n' +
            '3. Precio con IGIC\n' +
            '4. Calificación de una nota\n' +
            '5. Generador de series\n' +
            '6. Estadísticas de números\n' +
            '7. Adivina el número\n' +
            '0. Salir'
        );

        if (opcion === null || opcion.trim() === '0') {
            console.log('Saliendo de la consola.');
            break;
        }

        switch (opcion.trim()) {
            case '1':
                ejecutarConversor();
                break;
            case '2':
                ejecutarImc();
                break;
            case '3':
                ejecutarIgic();
                break;
            case '4':
                ejecutarCalificacion();
                break;
            case '5':
                ejecutarSeries();
                break;
            case '6':
                ejecutarEstadisticas();
                break;
            case '7':
                ejecutarAdivina();
                break;
            default:
                alert('Opción no válida. Introduce un número del 0 al 7.');
                break;
        }
    } while (opcion !== '0');
}

//Conversor de unidades.
function ejecutarConversor() {
    let km = Number(prompt('Introduce kilómetros:'));
    console.log(`${km} km equivalen a ${km * 1000} metros, ${km * 0.621371} millas y ${km * 0.539957} millas náuticas.`);

    let celsius = Number(prompt('Introduce grados Celsius:'));
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;
    console.log(`${celsius} °C equivalen a ${fahrenheit} °F y ${kelvin} K.`);

    let segundos = Number(prompt('Introduce un número de segundos:'));
    let horas = Math.trunc(segundos / 3600);
    let minutos = Math.trunc((segundos % 3600) / 60);
    let segSobrantes = segundos % 60;
    console.log(`Tiempo: ${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segSobrantes).padStart(2, '0')}`);
}

//Calculadora de IMC.
function ejecutarImc() {
    let peso = Number(prompt('Introduce tu peso en kg:'));
    let alturaCm = Number(prompt('Introduce tu altura en cm:'));
    let alturaM = alturaCm / 100;
    let imc = peso / (alturaM ** 2);

    let clasificacion = '';
    if (imc < 18.5) {
        clasificacion = 'Bajo peso';
    } else if (imc <= 24.9) {
        clasificacion = 'Normal';
    } else if (imc <= 29.9) {
        clasificacion = 'Sobrepeso';
    } else {
        clasificacion = 'Obesidad';
    }

    console.log(`Tu IMC es ${imc.toFixed(1)} (${clasificacion}).`);
}

//Precio con IGIC.
function ejecutarIgic() {
    let base = Number(prompt('Introduce el precio sin impuestos:'));
    let tipoInput = prompt('Introduce el tipo de IGIC (ej. 7, o cancela para usar el 7% por defecto):');
    let tipo = tipoInput === null || tipoInput.trim() === '' ? null : Number(tipoInput);

    let tipoAplicado = tipo ?? 7; 
    let impuesto = base * (tipoAplicado / 100);
    let total = base + impuesto;

    console.log(`Base: ${base}€ | IGIC (${tipoAplicado}%): ${impuesto.toFixed(2)}€ | Total: ${total.toFixed(2)}€`);
}

//Calificación de una nota.
function ejecutarCalificacion() {
    let nota = Number(prompt('Introduce una nota de 0 a 10:'));
    let calificacion = '';

    if (nota < 5) {
        calificacion = 'Insuficiente';
    } else if (nota < 6) {
        calificacion = 'Suficiente';
    } else if (nota < 7) {
        calificacion = 'Bien';
    } else if (nota < 9) {
        calificacion = 'Notable';
    } else {
        calificacion = 'Sobresaliente';
    }

    console.log(`Nota ${nota}: ${calificacion}`);
}

//Generador de series.
function ejecutarSeries() {
    let tipo = prompt('Elige una serie:\n1. Tabla de multiplicar\n2. Fibonacci');

    if (tipo === '1') {
        let n = Number(prompt('¿De qué número quieres la tabla?'));
        for (let i = 1; i <= 10; i++) {
            console.log(`${n} × ${i} = ${n * i}`);
        }
    } else if (tipo === '2') {
        let nTerminos = Number(prompt('¿Cuántos términos de Fibonacci quieres?'));
        let fib = [1, 1];
        for (let i = 2; i < nTerminos; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        console.log(`Serie de Fibonacci (${nTerminos} términos): ${fib.slice(0, nTerminos).join(', ')}`);
    } else {
        alert('Opción no válida.');
    }
}

//Estadísticas de una lista.
function ejecutarEstadisticas() {
    let suma = 0;
    let cantidad = 0;
    let mayor = -Infinity;
    let minimo = Infinity;
    let num;

    do {
        num = Number(prompt('Introduce un número (0 para terminar):'));
        if (num !== 0) {
            suma += num;
            cantidad++;
            if (num > mayor) mayor = num;
            if (num < minimo) minimo = num;
        }
    } while (num !== 0);

    if (cantidad > 0) {
        console.log(`Suma: ${suma} | Cantidad: ${cantidad} | Media: (suma/cantidad) | Mayor: ${mayor} | Menor: ${minimo}`);
    } else {
        console.log('No se introdujo ningún número.');
    }
}

//Adivina el número.
function ejecutarAdivina() {
    let secreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let ganado = false;

    while (intentos < 7 && !ganado) {
        let intento = Number(prompt(`Intento ${intentos + 1}/7. Adivina el número (1-100):`));
        intentos++;

        if (intento === secreto) {
            console.log(`¡Enhorabuena! Has acertado en el intento ${intentos}.`);
            ganado = true;
        } else if (intento < secreto) {
            console.log('El número secreto es MAYOR.');
        } else {
            console.log('El número secreto es MENOR.');
        }
    }

    if (!ganado) {
        console.log(`Has agotado los 7 intentos. El número era ${secreto}.`);
    }
}

iniciarConsola();