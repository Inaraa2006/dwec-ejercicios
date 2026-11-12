// Prueba UD3 · Versión A · Ejercicio 2
// Nombre y apellidos:
'use strict';

// Escribe aquí enteroAleatorio(min, max) y crearLogin(nombreCompleto, numero),
// documentadas con JSDoc, y el programa principal.

function crearLogin(nombreCompleto, numero) {
    const nombre = nombreCompleto
        .normalize('NFD') 
        .replace(/[̀-ͯ]/g, '') 
        .toLowerCase() 
        .trim() 
        .replace(/[^a-z0-9]+/g, '-') 
        .replace(/^-+|-+$/g, ''); 

    console.log('Nombre completo', nombre);
}

/*
PRUEBAS (completa la columna «obtenido»)
| nombreCompleto          | numero | esperado      | obtenido |
|-------------------------|--------|---------------|----------|
| '  Ada LOVELACE byron ' | 7      | 'alovelace07' |          |
| 'José Ángel Pérez'      | 15     | 'jangel15'    |          |
| 'Ana Núñez'             | 99     | 'anunez99'    |          |
| 'Cher'                  | 3      | null          |          |
| '    '                  | 5      | null          |          |
| 'Ana Núñez'             | 100    | null          |          |
| 'Ana Núñez'             | 2.5    | null          |          |
*/




/*b) Escribe crearLogin(nombreCompleto, numero), que genera un nombre de 
usuario:
• Validación (cláusula de guarda): nombreCompleto debe ser texto con al menos
 dos palabras (ignorando espacios
de sobra al principio, al final y entre palabras) y numero un entero entre 1 y 
99. Si algo no es válido, devuelve
null.*/