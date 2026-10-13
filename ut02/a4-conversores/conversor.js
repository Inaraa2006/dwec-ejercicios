//El programa pide una cantidad en km 
// y muestra su equivalencia en m, millas y millas naúticas.

//Además, pide grados celcius y los muestra en F y K

//Inara Mendoza Acosta, 12-10-2026

'use strict'

let km = Number(prompt("Introduce los km/h:"));
let metros = km * 1000;
let millas = km * 0.621371;
let millasNauticas = km * 0.539957;

console.log(`Conversor de distancias`);
console.log(`Velocidad en km/h: ${km}`);
console.log(`Velocidad en m: ${metros}`);
console.log(`Velocidad en millas: ${millas}`);
console.log(`Velocidad en millas náuticas: ${millasNauticas}`);

let celsius = Number(prompt("Introduce la temperatura en grados Celsius:"));
let fahrenheit = (celsius * 9/5) + 32;
let kelvin = celsius + 273.15;

console.log(`Conversor de temperaturas`);
console.log(`Temperatura en grados Celsius: ${celsius}`);
console.log(`Temperatura en grados Fahrenheit: ${fahrenheit}`);
console.log(`Temperatura en grados Kelvin: ${kelvin}`);
