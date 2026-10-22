'use strict';

/**
 * @param {string} constraseña
 */

function generarContraseñaProv() {
    const caracteres = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
    let password ='';

    for (let i = 0; i < 10; i++) {
        const indiceAleatorio = Math.floor(Math.random()* caracteres.length);
        password += caracteres.at(indiceAleatorio);
    }

    return password;
}

console.group('Contraseña provisional: ')
    console.log('Contraseña provisional generada: ', generarContraseñaProv());
    console.log('Idenfificador criptográfico: ', crypto.randomUUID());
console.groupEnd();


/*El segundo es adecuado porque usa la seguridad del sistema 
operativo para generar códigos imposibles de adivinar, mi función
no sería adecuada para contraseñas reales porque el Math.random()
usa fórmulas matemáticas sencillas para calcular números al azar.*/
