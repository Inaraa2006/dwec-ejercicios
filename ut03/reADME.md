# 📚 README SUPREMO & GUÍA DE SUPERVIVENCIA: EXAMEN UD3 · DEW
**CIFP César Manrique — CFGS Desarrollo de Aplicaciones Web (Curso 2026-2027)**

---

## ⚠️ 0. REGLA DE ORO DEL ENTORNO DE TRABAJO
* **Usa siempre Live Server** (`http://127.0.0.1:5500/...`). 
* **NUNCA** hagas doble clic en el fichero (`file://`). Muchas APIs de esta unidad (`localStorage`, cookies de sesión, `postMessage`, `BroadcastChannel`) dependen estrictamente del origen web y fallarán o funcionarán mal con `file://`.
* Mantén siempre la misma IP (`127.0.0.1:5500` y `localhost:5500` son orígenes distintos y no comparten almacenamiento).

---

## 🏗️ 1. Plantilla HTML Base Obligatoria
Este es el punto de partida estándar para cada ejercicio o práctica de la unidad:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>UD3 · Examen</title>
    <link rel="stylesheet" href="estilos.css">
    <script src="app.js" defer></script>
</head>
<body>
    <h1>UD3 · Práctica de Examen</h1>
    <main id="salida"></main>
</body>
</html>
```

---

## 🧩 2. Los Objetos Predefinidos (Apartado 1 / A1)
* **Las tres familias de objetos disponibles sin importar nada:**
  1. **Nativos del lenguaje (ECMAScript):** `String`, `Number`, `Math`, `Date`, `JSON`, `Intl`, `Array`, `Map`, `Set`. *(Existen en el navegador y en Node.js)*.
  2. **Del navegador (BOM):** `window`, `location`, `history`, `navigator`, `localStorage`, `setTimeout`, `alert`. *(Solo existen en el navegador)*.
  3. **Del documento (DOM):** `document` y todos los elementos que cuelgan de él. *(Solo existen en el navegador)*.

* **Patrón de detección de características:** Antes de usar una API moderna, comprueba siempre si el navegador la soporta:
  ```javascript
  if (navigator.share) {
      // El navegador soporta la API de compartir
  }
  ```

---

## 🔤 3. Cadenas, Números y Utilidades Math (Apartado 2 / A2)
### A. Métodos esenciales de `String`
```javascript
const texto = "  Hola Mundo  ";
texto.trim();                    // "Hola Mundo" (quita espacios en extremos)
texto.toLowerCase();             // "  hola mundo  "
texto.at(-1);                    // 'o' (admite índices negativos para empezar desde el final)
texto.slice(0, 4);               // "  Ho" (subcadena, prefiere slice frente a substring)
texto.replaceAll('o', 'a');      // "  Hala Munda  "
"1,2,3".split(',');              // Devuelve un Array: ['1', '2', '3']
"7".padStart(2, '0');            // "07" (relleno de ceros a la izquierda)
```

### B. Generador de Slug (Limpiar textos para URLs o nombres de ficheros)
```javascript
const slug = titulo
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Elimina tildes
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')     // Todo lo que no sea letra o dígito pasa a guion
    .replace(/^-+|-+$/g, '');        // Limpia guiones sobrantes en los extremos
```

### C. Patrón para enteros aleatorios (Dados, etc.)
```javascript
/**
 * Genera un número entero aleatorio entre min y max (ambos incluidos).
 */
function enteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

### D. Redondeos clave (`Math` vs `toFixed`)
* `Math.round(2.5)` $\rightarrow$ `3` (el .5 redondea hacia arriba)
* `Math.floor(2.9)` $\rightarrow$ `2` (hacia abajo)
* `Math.ceil(2.1)` $\rightarrow$ `3` (hacia arriba)
* `Math.trunc(-2.9)` $\rightarrow$ `-2` (elimina decimales sin redondear)
* `(2.345).toFixed(2)` $\rightarrow$ `'2.35'` (devuelve **String**, cuidado con errores de precisión como `1.005.toFixed(2)`).

---

## 📅 4. Fechas, Importes e Idiomas con `Intl` (Apartado 3 / A3)
### A. Crear fechas y evitar la trampa de los meses
```javascript
// ¡OJO! Los meses empiezan en 0: Enero = 0, Octubre = 9, Diciembre = 11.
const fechaFija = new Date(2026, 9, 13, 8, 30); // 13 de octubre de 2026, 08:30
const ahora = new Date();                        // Instante actual
const desdeISO = new Date('2026-10-13T08:30:00'); // Desde formato ISO (hora local)
```

### B. Validar fechas inválidas (`NaN`)
```javascript
const fechaValida = new Date(textoPrompt);
if (Number.isNaN(fechaValida.getTime())) {
    console.error("La fecha introducida no es válida.");
}
```

### C. Formateo profesional con `Intl` (Localización)
```javascript
const fecha = new Date();

// 1. Fechas completas localizadas
new Intl.DateTimeFormat('es-ES', { dateStyle: 'full' }).format(fecha);
// Resultado: "martes, 13 de octubre de 2026"

// 2. Monedas y precios
new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(1234.5);
// Resultado: "1.234,50 €"

// 3. Porcentajes (ej. IGIC 7%)
new Intl.NumberFormat('es-ES', { style: 'percent' }).format(0.07);
// Resultado: "7 %"

// 4. Tiempo relativo ("hace X días", "mañana", "dentro de 2 horas")
const rtf = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });
rtf.format(-3, 'day'); // "hace 3 días"
rtf.format(1, 'day');  // "mañana"
```

---

## ⏱️ 5. Temporizadores: `setTimeout` y `setInterval` (Apartado 4 / A4)
```javascript
// A. Ejecutar algo una sola vez tras un retraso (milisegundos)
setTimeout(() => {
    console.log("Ejecutado tras 1 segundo");
}, 1000);

// B. Repetir una tarea periódicamente (ej. Reloj digital)
const idIntervalo = setInterval(() => {
    const horaActual = new Intl.DateTimeFormat('es-ES', { timeStyle: 'medium' }).format(new Date());
    document.getElementById('salida').textContent = horaActual;
}, 1000);

// C. Cancelar un intervalo en marcha (imprescindible para evitar fugas de memoria)
clearInterval(idIntervalo);
```
> ⚠️ **Trampa típica de examen:** `setTimeout(saludar(), 1000)` ejecuta la función **al instante** (porque lleva paréntesis). Debe pasarse sin paréntesis `setTimeout(saludar, 1000)` o envuelta en función flecha si recibe argumentos: `setTimeout(() => saludar('Juan'), 1000)`.

---

## 📝 6. Escribir en la Página y Seguridad (Apartado 5 / A5)
* **`textContent`**: Inserta texto plano de forma totalmente segura. No interpreta etiquetas HTML.
* **`innerHTML`**: Interpreta HTML. **¡PELIGRO DE XSS!** Nunca lo uses con datos introducidos por usuarios (`prompt`, inputs) porque permite inyecciones de scripts maliciosos.
* **`insertAdjacentHTML('beforeend', ...)`**: Inserta bloques HTML de forma relativa sin borrar el contenido previo del elemento.

### Función para escapar HTML y prevenir XSS
```javascript
/**
 * Escapa caracteres peligrosos para evitar inyecciones XSS.
 * @param {string} texto - Texto sin escapar.
 * @returns {string} Texto seguro para inyectar.
 */
function escaparHtml(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}
```

---

## 🧭 7. El Navegador: BOM (Apartado 6 / A6)
* **`location`**: Leer o modificar la URL.
  ```javascript
  console.log(location.href);       // URL completa
  console.log(location.search);     // Parámetros de consulta (ej. ?nombre=Ana)
  location.href = "otra-pagina.html"; // Redirigir a otra página
  ```
* **`URLSearchParams`** (para extraer parámetros de la URL de forma limpia):
  ```javascript
  const params = new URLSearchParams(location.search);
  const nombre = params.get('nombre');
  ```
* **`history`**: Navegación (`history.back()`, `history.forward()`, `history.length`).
* **`navigator`**: Capacidades del dispositivo (`navigator.language`, `navigator.clipboard.writeText(...)`, etc.).

---

## 💬 8. Diálogos y Elementos `<dialog>` (Apartado 7 / A7)
* **Nativos básicos:** `prompt()`, `confirm()`, `alert()`.
* **Diálogos modales propios con `<dialog>` (HTML):**
  ```html
  <dialog id="miDialogo">
      <form method="dialog">
          <p>¿Estás seguro de realizar esta acción?</p>
          <button value="cancelar">Cancelar</button>
          <button value="aceptar">Aceptar</button>
      </form>
  </dialog>
  ```
  ```javascript
  const dialogo = document.getElementById('miDialogo');
  dialogo.showModal(); // Abre el diálogo en modo modal bloqueando el fondo con ::backdrop
  dialogo.close();     // Cierra el diálogo mediante código
  ```

---

## 🪟 9. Varias Ventanas y Comunicación (Apartado 8 / A8)
* **Control de ventanas emergentes:**
  ```javascript
  const ventanaSecundaria = window.open('previa.html', 'previa', 'width=480,height=640');
  ventanaSecundaria.focus();
  ventanaSecundaria.close();
  console.log(ventanaSecundaria.closed); // Devuelve true si la ventana ya fue cerrada
  ```
* **Comunicación segura entre ventanas con `postMessage`:**
  ```javascript
  // Ventana emisora
  ventanaSecundaria.postMessage({ accion: 'enviarDatos', precio: 100 }, 'http://127.0.0.1:5500');

  // Ventana receptora
  window.addEventListener('message', (evento) => {
      if (evento.origin !== 'http://127.0.0.1:5500') return; // Validación rigurosa de seguridad
      console.log(evento.data);
  });
  ```
* **Comunicación entre pestañas del mismo origen con `BroadcastChannel`:**
  ```javascript
  const canal = new BroadcastChannel('preferencias');
  canal.postMessage({ tema: 'oscuro' }); // Emitir mensaje

  canal.onmessage = (evento) => {
      console.log("Recibido de otra pestaña:", evento.data);
  };
  ```

---

## 💾 10. Almacenamiento Web (Apartado 9 / A9)
* **`localStorage`**: Almacena datos de forma persistente sin fecha de caducidad explícita.
* **`sessionStorage`**: Los datos se borran automáticamente al cerrar la pestaña o el navegador.
* **Cookies (`document.cookie`)**: Útiles para interactuar con servidores, configurables con atributos como `max-age=31536000` (1 año).

### Patrón robusto para guardar y cargar objetos JSON con `try...catch` (Obligatorio en A10)
```javascript
/**
 * Guarda un objeto en localStorage convirtiéndolo a JSON de forma segura.
 * @param {string} clave 
 * @param {Object} valor 
 */
function guardar(clave, valor) {
    try {
        localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
        console.error("Error al guardar en localStorage:", error);
    }
}

/**
 * Carga y analiza un objeto JSON de localStorage de forma segura con valor por defecto.
 * @param {string} clave 
 * @param {Object} valorPorDefecto 
 * @returns {Object}
 */
function cargar(clave, valorPorDefecto) {
    try {
        const item = localStorage.getItem(clave);
        return item ? JSON.parse(item) : valorPorDefecto;
    } catch (error) {
        console.error("Datos corruptos en localStorage, cargando por defecto:", error);
        return valorPorDefecto;
    }
}
```

* **Sincronización entre pestañas con el evento `storage`:**
  ```javascript
  window.addEventListener('storage', (evento) => {
      console.log(`La clave ${evento.key} ha cambiado en otra pestaña.`);
  });
  ```

---

## 🏷️ 11. Documentación JSDoc y Tipos (Apartado 11 / A10)
Para documentar estructuras complejas y funciones en tu proyecto:
```javascript
/**
 * @typedef {Object} Preferencias
 * @property {string} tema - Tema visual ('claro', 'oscuro', 'sistema')
 * @property {string} idioma - Idioma activo ('es-ES', 'en-GB')
 * @property {string} moneda - Moneda activa ('EUR', 'USD')
 */

/**
 * Aplica las preferencias del usuario al documento HTML.
 * @param {Preferencias} prefs - Objeto con las preferencias de configuración.
 */
function aplicarPreferencias(prefs) {
    document.documentElement.lang = prefs.idioma;
    document.body.dataset.tema = prefs.tema;
}
```

---

## 💻 12. Código Listo de Referencia (Actividades A3, A4 y A5)

### A3 · 1. Edad exacta (`1-edad.js`)
```javascript
const textoNacimiento = prompt("Introduce tu fecha de nacimiento (AAAA-MM-DD):");
const fechaNacimiento = new Date(textoNacimiento);

if (Number.isNaN(fechaNacimiento.getTime())) {
    console.error("Fecha inválida. Debes usar el formato ISO (AAAA-MM-DD).");
} else {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    const diaNacimiento = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(fechaNacimiento);

    const proximoCumple = new Date(hoy.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate());
    if (proximoCumple < hoy) {
        proximoCumple.setFullYear(hoy.getFullYear() + 1);
    }
    
    const diasFaltan = Math.ceil((proximoCumple - hoy) / (1000 * 60 * 60 * 24));

    console.log(`Edad cumplida: ${edad} años`);
    console.log(`Naciste un: ${diaNacimiento}`);
    console.log(`Faltan ${diasFaltan} días para tu próximo cumpleaños.`);
}
```

### A3 · 2. Cuenta de días (`2-cuenta-dias.js`)
```javascript
const hoy = new Date();
const msPorDia = 1000 * 60 * 60 * 24;
const fin1Eval = new Date(2026, 11, 18); // Mes 11 = diciembre
const finClases = new Date(2027, 1, 5);   // Mes 1 = febrero
const rtf = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });

function mostrarCuentaAtras(fechaObjetivo, nombreEvento) {
    const diferenciaDias = Math.round((fechaObjetivo - hoy) / msPorDia);
    const textoRelativo = rtf.format(diferenciaDias, 'day');
    console.log(`${nombreEvento}: ${diferenciaDias} días (${textoRelativo})`);
}

mostrarCuentaAtras(fin1Eval, "Fin de la 1ª Evaluación (18 dic 2026)");
mostrarCuentaAtras(finClases, "Fin de clases en el centro (5 feb 2027)");
```

### A3 · 4. Tabla de precios localizada (`4-tabla-precios.js`)
```javascript
const preciosArray = '12.5,8,1250,0.99,19999'.split(',').map(Number);

const formateadorMoneda = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
const formateadorPorcentaje = new Intl.NumberFormat('es-ES', { style: 'percent', maximumFractionDigits: 0 });

const tasaIGIC = 0.07;
const textoIGIC = formateadorPorcentaje.format(tasaIGIC);

const datosTabla = preciosArray.map(precioBase => {
    const importeIGIC = precioBase * tasaIGIC;
    const totalConIGIC = precioBase + importeIGIC;

    return {
        'Precio Base': formateadorMoneda.format(precioBase),
        [`IGIC (${textoIGIC})`]: formateadorMoneda.format(importeIGIC),
        'Total con IGIC': formateadorMoneda.format(totalConIGIC)
    };
});

console.table(datosTabla);
```

### A4 · 1. Reloj (`1-reloj.js`)
```javascript
const salida = document.getElementById('salida');
const formateadorHora = new Intl.DateTimeFormat(navigator.language, {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
});
const formateadorFecha = new Intl.DateTimeFormat(navigator.language, { dateStyle: 'full' });

function actualizarReloj() {
    const ahora = new Date();
    salida.innerHTML = `
        <div>${formateadorHora.format(ahora)}</div>
        <div>${formateadorFecha.format(ahora)}</div>
    `;
}

actualizarReloj();
setInterval(actualizarReloj, 1000);
```

### A4 · 2. Cuenta atrás con cancelación (`2-cuenta-atras.js`)
```javascript
const salida = document.getElementById('salida');
let segundosRestantes = parseInt(prompt("Introduce el número de segundos:"), 10);

if (Number.isNaN(segundosRestantes) || segundosRestantes < 0) {
    salida.textContent = "Número inválido.";
} else {
    const idIntervalo = setInterval(() => {
        if (segundosRestantes > 0) {
            salida.textContent = `Quedan ${segundosRestantes} segundos...`;
            segundosRestantes--;
        } else {
            salida.textContent = "¡Tiempo!";
            clearInterval(idIntervalo);
        }
    }, 1000);
}
```

### A4 · 5. Pomodoro (`5-pomodoro.js`)
```javascript
const salida = document.getElementById('salida');
let segundosTrabajo = 25 * 60; 
let segundosDescanso = 5 * 60;
let tiempoRestante = segundosTrabajo;
let enModoTrabajo = true;

function formatearMMSS(segundosTotales) {
    const minutos = Math.floor(segundosTotales / 60).toString().padStart(2, '0');
    const segundos = (segundosTotales % 60).toString().padStart(2, '0');
    return `${minutos}:${segundos}`;
}

setInterval(() => {
    const textoTiempo = formatearMMSS(tiempoRestante);
    const estadoTexto = enModoTrabajo ? "Trabajando" : "Descanso";

    salida.innerHTML = `<h2>${estadoTexto}</h2><div>${textoTiempo}</div>`;
    document.title = `(${textoTiempo}) Pomodoro`;

    if (tiempoRestante > 0) {
        tiempoRestante--;
    } else {
        enModoTrabajo = !enModoTrabajo;
        tiempoRestante = enModoTrabajo ? segundosTrabajo : segundosDescanso;
    }
}, 1000);
```

### A5 · 1. Tres formas de escribir (`1-escritura.js`)
```javascript
const salida = document.getElementById('salida');
salida.textContent = '<b>Hola</b> (textContent)';
salida.innerHTML = '<b>Hola</b> (innerHTML)';
salida.insertAdjacentHTML('beforeend', '<p>Párrafo añadido con insertAdjacentHTML</p>');
```

### A5 · 2. Ficha del proyecto (`2-ficha.js`)
```javascript
const salida = document.getElementById('salida');
const elementoProyecto = {
    nombre: 'Guacamayo Azul',
    precioAdquisicion: 1250.75,
    fechaRegistro: new Date(2026, 8, 15)
};

const formateadorMoneda = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });
const formateadorFecha = new Intl.DateTimeFormat('es-ES', { dateStyle: 'long' });

salida.innerHTML = `
    <article>
        <h2>${elementoProyecto.nombre}</h2>
        <dl>
            <dt>Coste:</dt>
            <dd>${formateadorMoneda.format(elementoProyecto.precioAdquisicion)}</dd>
            <dt>Fecha de registro:</dt>
            <dd>${formateadorFecha.format(elementoProyecto.fechaRegistro)}</dd>
        </dl>
    </article>
`;
```

### A5 · 3. Lista generada (`3-lista.js`)
```javascript
const salida = document.getElementById('salida');
const arrayElementos = 'León, Tigre, Elefante, Jirafa, Cebra'.split(',');

let htmlAcumulado = '<ul>';
for (const elemento of arrayElementos) {
    htmlAcumulado += `<li>${elemento.trim()}</li>`;
}
htmlAcumulado += '</ul>';

salida.innerHTML = htmlAcumulado;
```

---

## 💡 13. CONSEJOS DE SUPERVIVENCIA PARA EL EXAMEN DE HOY
1. **Lee con calma cada enunciado:** Fíjate si te piden volcar el resultado a la consola (`console.table`, `console.log`) o inyectarlo directamente en la página dentro de `<main id="salida">`.
2. **Usa las DevTools (F12):** Ante cualquier fallo o error raro en la ejecución, abre la pestaña *Console* (para ver fallos de sintaxis o referencias) o la pestaña *Application* (para verificar claves de `localStorage` y cookies).
3. **Estructura limpia:** Mantén los scripts organizados en sus respectivas carpetas (`ut03/...`), enlázalos siempre con el atributo `defer` y valida tus funciones con JSDoc si el ejercicio lo requiere.
4. **No te estanques:** Si un punto secundario se te complica, avanza hacia el siguiente ejercicio. Es mucho mejor tener todo avanzado y estructurado que perder media hora bloqueado en un detalle menor.
5. **¡Mucha confianza!** Tienes toda la lógica clara, los patrones clave y las herramientas necesarias preparadas. ¡A por todas en el CIFP César Manrique!