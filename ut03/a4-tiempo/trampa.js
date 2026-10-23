'use strict';

function saludar() {
    console.log('Hola desde la función saludar');
    return 'Hola';
}

/*Básicamente: si le pones los paréntesis, la función se ejecuta al momento sin 
esperar el segundo. Lo que le pasas al setTimeout no es la función en sí, sino el 
resultado que devuelve (como undefined), por eso el temporizador falla y no hace lo 
que toca.*/


//Sin paréntesis
setTimeout(saludar, 1000);

//Con función flecha envolvente
setTimeout(() => {
    saludar();
}, 2000);