const mes = 4;
let dias;
switch (mes) {
  case 4:
  case 6:
    dias = 30;
  case 2:
    dias = 28;
    break;
  default:
    dias = 0;
}
console.log(dias);

/*//document.write(nombre);
salida.textContent = nombre;
//salida.innerHTML = nombre;
//salida.insertAdjacentHTML( 'beforeend', nombre);
console.log(salida);*/

console.log(location.search);