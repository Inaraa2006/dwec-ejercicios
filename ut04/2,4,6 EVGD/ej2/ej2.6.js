function hanoi(discos, origen, destino, auxiliar) {

    let movimientos = [];

    if (discos === 1) {
        movimientos.push(`${origen} -> ${destino}`);
    }
    else {

        // Primer paso: mover discos - 1 al auxiliar.
        movimientos.push(
            ...hanoi(discos - 1, origen, auxiliar, destino)
        );

        // Segundo paso: mover el disco más grande.
        movimientos.push(`${origen} -> ${destino}`);

        // Tercer paso: mover discos - 1 al destino.
        movimientos.push(
            ...hanoi(discos - 1, auxiliar, destino, origen)
        );
    }

    return movimientos;
}

console.log(hanoi(1, "A", "C", "B"));
// ["A -> C"]

console.log(hanoi(2, "A", "C", "B"));
// ["A -> B", "A -> C", "B -> C"]

console.log(hanoi(3, "A", "C", "B"));
// 7 movimientos

//Con treinta discos la cantidad de movimientos es de 1B con 40 es de más de 1T