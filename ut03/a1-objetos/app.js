'use strict';


const nombres = 'Math,Date,JSON,Intl,window,document,location,navigator,screen,history,localStorage,console,setTimeout,alert';

const familias = {
    Math: 'nativo', 
    Date: 'nativo', 
    JSON: 'nativo', 
    Intl: 'nativo',
    window: 'navegador', 
    location: 'navegador', 
    navigator: 'navegador', 
    screen: 'navegador',
    history: 'navegador', 
    localStorage: 'navegador', 
    console: 'navegador', 
    setTimeout: 'navegador',
    alert: 'navegador', 
    document: 'documento',
};

const filas = [];
for (const nombre of nombres.split(',')) {
    filas.push({
        nombre,
        tipo: typeof globalThis[nombre],
        familia: familias[nombre],
        existeAqui: nombre in globalThis,
    });
}

console.group('1., 2. y 3. Tabla de Objetos Predefinidos (compatible con Node y Navegador)');
    console.table(filas);
console.groupEnd();

console.group('5. Pruebas con el objeto Math');
    console.log('Math tiene (Object.keys):', Object.keys(Math).length, 'propiedades enumerables');
    console.log('Math tiene (Object.getOwnPropertyNames):', Object.getOwnPropertyNames(Math).length, 'propiedades totales');
    console.log('Math.max(3, 9, 4) =', Math.max(3, 9, 4));
    console.log('Math.abs(-7) =', Math.abs(-7));
console.groupEnd();

if (typeof document !== 'undefined') {
    let html = '<table><tr><th>Nombre</th><th>typeof</th><th>Familia</th><th>Existe Aquí</th></tr>';
    for (const f of filas) {
        html += `<tr><td>${f.nombre}</td><td>${f.tipo}</td><td>${f.familia}</td><td>${f.existeAqui}</td></tr>`;
    }
    const contenedor = document.getElementById('salida');
    if (contenedor) {
        contenedor.innerHTML = `${html}</table>`;
    }
}