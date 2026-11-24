function potencia(base, exponente) {
    if (exponente === 0) {
        //caso base, se empieza desde aqui hacia atrás.
        return 1;
    }
    
    return base * potencia(base, exponente - 1);
}
function sumaDigitos(n) {

    // Caso base
    if (n < 10) {
        return n;
    }

    let ultimaCifra = n % 10;
    let resto = Math.floor(n / 10);

    return ultimaCifra + sumaDigitos(resto);
}
function invertir(texto) {
 if (texto.length <= 1) {
        return texto;
    }

    

    return texto[texto.length - 1] + invertir(texto.slice(0, -1));
}

function normalizar(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s/g, "")
        .toLowerCase();
}

function esPalindromo(texto) {

    let textoNormalizado = normalizar(texto);

    function comprobar(texto) {

        if (texto.length <= 1) {
            return true;
        }

        if (texto[0] !== texto[texto.length - 1]) {
            return false;
        }

        return comprobar(texto.slice(1, -1));
    }

    return comprobar(textoNormalizado);
}

console.log(esPalindromo("Ana"));                // true
console.log(esPalindromo("Anita lava la tina"));  // true
console.log(esPalindromo("Hola"));               // false
console.log(esPalindromo("Dábale arroz a la zorra el abad")); // true


console.log(invertir("Hola"));       // aloH
console.log(invertir("JavaScript")); // tpircSavaJ

console.log(sumaDigitos(1234)); // 10
console.log(sumaDigitos(567));  // 18
console.log(sumaDigitos(9));    // 9

console.log(potencia(2, 3)); // 8
console.log(potencia(5, 2)); // 25
console.log(potencia(10, 0)); // 1