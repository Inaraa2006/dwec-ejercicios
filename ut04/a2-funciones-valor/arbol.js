const carpetaPrueba = {
  nombre: 'proyecto',
  ficheros: ['index.html'],
  subcarpetas: [
    {
      nombre: 'js',
      ficheros: ['app.js'],
      subcarpetas: [
        { nombre: 'utiles', ficheros: ['helpers.js'], subcarpetas: [] }
      ]
    }
  ]
};

function profundidad(c) {
  if (c.subcarpetas.length === 0) return 1;
  let maxSub = 0;
  for (const sub of c.subcarpetas) {
    const p = profundidad(sub);
    if (p > maxSub) maxSub = p;
  }
  return 1 + maxSub;
}

function buscarFichero(c, nombre) {
  if (c.ficheros.includes(nombre)) return c.nombre + '/' + nombre;
  for (const sub of c.subcarpetas) {
    const res = buscarFicher(sub, nombre);
    if (res) return c.nombre + '/' + res;
  }
  return null;
}

function listar(c, sangria = '') {
  let resultado = sangria + '- ' + c.nombre + '\n';
  for (const f of c.ficheros) {
    resultado += sangria + '  * ' + f + '\n';
  }
  for (const sub of c.subcarpetas) {
    resultado += listar(sub, sangria + '  ');
  }
  return resultado;
}


console.assert(profundidad(carpetaPrueba) === 3, "profundidad falló");