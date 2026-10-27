/*function saludar(){
    console.log('Hola, mundo');
};*/

//#region. Ejercicio 1. flechas
// Crear funcion flecha saludar() despedir() y presentar()
const saludar = () => {
    console.log('Hola, mundo');
};


const despedir = () => {
    console.log('Adiós, mundo');
};

const presentar = () => {
    console.log('Soy Inara');
};
console.log('------------');
console.log('Ejercicio 1');
saludar();
despedir();
presentar();
//#endregion

//#region. Ejercicio 2. parámetros
const saludarP = nombre => {
    console.log(`Hola, ${nombre}`);
};

// Crear mostrarEdad(edad). Ampliar a mostrarEdad(nombre, edad)
const mostrarEdad = (nombre, edad) => {
    console.log(`${nombre}, tienes ${edad} años`);
};
console.log('------------');
console.log('Ejercicio 2');
saludarP("Inara");
mostrarEdad("Inara", 20);
//#endregion

//#region. Ejercicio 3. retorno

const cuadrado = numero => numero * numero;
console.log(cuadrado(4));
console.log(cuadrado(7));

const otroCuadrado =  numero => {
    return numero * numero
};
console.log(otroCuadrado(4));

/*Crea funciones flecha para el doble y para el triple
y el cubo de un número utilizando retorno implícito.*/

const doble = numero => {
    return numero * 2
};

const triple = numero => {
    return numero * 3
};

const cubo = numero => {
    return numero ** 3
};
console.log('------------');
console.log('Ejercicio 3');
console.log(doble(2));
console.log(triple(2));
console.log(cubo(2));
//#endregion

//#region. Ejercicio 4 cáculos y valor devuelto
const calcularMedia = (nota1, nota2, nota3) => {
    const suma = nota1 + nota2 + nota3;
    const media = suma / 3;
    return media;
};
console.log('------------');
console.log('Ejercicio 4');
console.log(calcularMedia(7,8,9));
//#endregion