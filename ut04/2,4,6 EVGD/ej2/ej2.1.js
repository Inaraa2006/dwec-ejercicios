//Primera parte del ej 2.1
function repetir(n,accion){
    for (let index = 0; index < n; index++) {
        accion(index)
    }
}

function aplicarHasta(n,transformar,condicion){
    for (let index = 0; index <= n; index++) {
        let x = transformar(index)
        if(condicion(x))
            return index
    }
    return -1
}

repetir(3, (i) => console.log(i));
let resultado = aplicarHasta(10,(i) => i * i,(x) => x > 20);

console.log(resultado);