/**
 * @param {number} discos 
 * @param {string} origen 
 * @param {string} destino
 * @param {string} auxiliar
 * @returns {string[]} 
 */

function hanoi(discos, origen = 'A', destino = 'C', auxiliar = 'B') {
  if (discos === 1) {
    return [`${origen} → ${destino}`];
  }
  const movimientosPrevios = hanoi(discos - 1, origen, auxiliar, destino);
  const movimientoBase = `${origen} → ${destino}`;
  const movimientosPosteriores = hanoi(discos - 1, auxiliar, destino, origen);

  return [...movimientosPrevios, movimientoBase, ...movimientosPosteriores];
}

const movimientosHanoi3 = hanoi(3, 'A', 'C', 'B');
console.assert(movimientosHanoi3.length === 2 ** 3 - 1, "Número de movimientos de Hanoi incorrecto");
console.assert(movimientosHanoi3[0] === 'A → C', "Primer movimiento de Hanoi incorrecto");
