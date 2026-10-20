## 1. Clasificación de objetos predefinidos (Navegador)

A continuación se muestra la tabla con los 14 nombres analizados desde la consola de las DevTools del navegador, indicando el resultado de `typeof` y su familia correspondiente:

| Nombre | `typeof` | Familia | Descripción / Notas |
| :--- | :--- | :--- | :--- |
| **Math** | `'object'` | Nativo del lenguaje | Objeto estático con propiedades y métodos matemáticos. |
| **Date** | `'function'` | Nativo del lenguaje | Es una función constructora (se instancia con `new Date()`). |
| **JSON** | `'object'` | Nativo del lenguaje | Objeto estático para parsear y serializar formato JSON. |
| **Intl** | `'object'` | Nativo del lenguaje | Espacio de nombres para la API de internacionalización ECMAScript. |
| **window** | `'object'` | Navegador (BOM) | Objeto global en el navegador que representa la ventana/pestaña. |
| **document** | `'object'` | Documento (DOM) | Objeto raíz que representa el documento HTML cargado. |
| **location** | `'object'` | Navegador (BOM) | Contiene la información de la URL actual y permite la navegación. |
| **navigator** | `'object'` | Navegador (BOM) | Contiene información sobre la identidad y capacidades del agente de usuario. |
| **screen** | `'object'` | Navegador (BOM) | Proporciona propiedades sobre las dimensiones de la pantalla física. |
| **history** | `'object'` | Navegador (BOM) | Permite la manipulación del historial de navegación de la sesión. |
| **localStorage** | `'object'` | Navegador (Web API) | Almacenamiento persistente en el cliente mediante clave-valor. |
| **console** | `'object'` | Navegador / Entorno | API para depuración e impresión de mensajes en la terminal o consola. |
| **setTimeout** | `'function'` | Navegador / Entorno | Función para la ejecución diferida o temporizada de código. |
| **alert** | `'function'` | Navegador (BOM) | Despliega un cuadro de diálogo modal modal de advertencia en el navegador. |

> **Nota:** `Date` devuelve `'function'` en lugar de `'object'` porque es un constructor creado para instanciar nuevos objetos mediante la sintaxis `new Date()`.

---

## 3. Ejecución en Node.js y manejo de errores

Al ejecutar el script con Node.js desde la terminal (`node app.js`), se observa el siguiente comportamiento:

1. **Objetos que provocan `ReferenceError` al acceder a ellos directamente:**
   - `window`, `document`, `location`, `screen`, `history`, `localStorage`, `alert`.
   
2. **Explicación:**
   - Node.js es un entorno de ejecución en servidor que carece de interfaz gráfica, navegador o documento HTML. Por tanto, los objetos del **BOM (Browser Object Model)** y del **DOM (Document Object Model)** no existen en la API global de Node.
   - *Excepción:* `navigator` existe en versiones recientes de Node.js (v21+) como un objeto global reducido para compatibilidad de estándares. Los objetos nativos de JS (`Math`, `Date`, `JSON`, `Intl`), así como `console` y `setTimeout`, sí están presentes en Node.js.

3. **Solución para evitar fallos de ejecución:**
   - Evaluar mediante `typeof nombre` (que nunca lanza un error y devuelve `'undefined'` si no existe) o mediante la propiedad `globalThis[nombre]` (el objeto global unificado para cualquier entorno JavaScript).

---

## 4. Inspección de `navigator`

Analizando el objeto `navigator` en la consola mediante `console.dir(navigator)`, se han localizado las siguientes tres propiedades:

1. **`navigator.hardwareConcurrency`**
   - *Hipótesis:* Indica la cantidad de núcleos lógicos del procesador de la máquina.
   - *Comprobación MDN:* Devuelve el número de hilos o núcleos lógicos de procesamiento disponibles para el navegador.
2. **`navigator.maxTouchPoints`**
   - *Hipótesis:* Indica el número máximo de puntos de contacto táctil simultáneos que permite la pantalla.
   - *Comprobación MDN:* Devuelve `0` en dispositivos no táctiles o un entero mayor que `0` si la pantalla es táctil.
3. **`navigator.pdfViewerEnabled`**
   - *Hipótesis:* Indica si el navegador es capaz de renderizar documentos PDF de forma nativa.
   - *Comprobación MDN:* Devuelve `true` si el navegador admite la previsualización directa de archivos PDF sin necesidad de complementos externos.

---

## 5. Inspección del objeto `Math`

* **`Object.keys(Math).length`**: Devuelve `0`.
* **`Object.getOwnPropertyNames(Math).length`**: Devuelve aproximadamente `44`.

### Explicación
`Object.keys()` solo lista las propiedades que son **enumerables** (`enumerable: true`). En la especificación ECMAScript, las funciones y constantes integradas del objeto `Math` tienen su atributo `enumerable` configurado como `false`, por lo que `Object.keys()` devuelve `0`. Para obtener todas las propiedades propias (enumerables o no), debemos utilizar `Object.getOwnPropertyNames()`.

### Métodos evaluados
* **Cálculo del máximo:** `Math.max(3, 9, 4)` $\rightarrow$ Devuelve `9`.
* **Cálculo del valor absoluto:** `Math.abs(-7)` $\rightarrow$ Devuelve `7`.