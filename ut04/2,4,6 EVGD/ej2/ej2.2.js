const crearContador = (inicio = 0,paso=1)=>{
    let valor = inicio;
    const manzana = {
        devolverValor: ()=>{
            return valor;
        },
        siguiente: () =>{
            valor+=paso
            return valor;
        }

    }
    return manzana
}


//# es para poner las cosas privadas

function crearAcumulador(){
    let total = 0;
    function funcion(n){
        total +=Number(n);
        return total;
    }

    return funcion;
}

function crearLimitador(maximo){
    let contador = 0;
    function funcion(){
        if(contador>=maximo)
            return false
        contador ++;
        return true;
    }
    return funcion
}

const contador1 = crearContador();
const contador2 = crearContador(10, 5);

console.log(contador1.devolverValor()); // 0
console.log(contador1.siguiente());     // 1
console.log(contador1.siguiente());     // 2

console.log(contador2.devolverValor()); // 10
console.log(contador2.siguiente());     // 15
console.log(contador2.siguiente());     // 20



const acumulador1 = crearAcumulador();

console.log(acumulador1(5));  // 5
console.log(acumulador1(3));  // 8
console.log(acumulador1(10)); // 18

const acumulador2 = crearAcumulador();

console.log(acumulador2(100)); // 100
console.log(acumulador1(2));   // 20