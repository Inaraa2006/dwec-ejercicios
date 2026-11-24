function memorizar (fn){
    const memoria = {}
    function calculo(n){
        if(memoria[n] === undefined)
            memoria[n] = fn(n)
        return memoria[n]
    }
    return calculo
}

function funcionLenta(n) {
    let resultado = 0;

    for (let i = 0; i < 50000000; i++) {
        resultado += i;
    }

    return resultado + n;
}

const funcionMemorizada = memorizar(funcionLenta);

console.time("Primera llamada");
console.log(funcionMemorizada(5));
console.timeEnd("Primera llamada");

console.time("Segunda llamada");
console.log(funcionMemorizada(5));
console.timeEnd("Segunda llamada");