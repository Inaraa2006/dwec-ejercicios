## 1.
- **Math**: `'object'`, nativo del lenguaje.
- **Date**: `'function'`, nativo del lenguaje (es una función constructora).
- **JSON**: `'object'`, nativo del lenguaje.
- **Intl**: `'object'`, nativo del lenguaje.
- **window**: `'object'`, navegador (BOM - objeto global).
- **document**: `'object'`, documento (DOM).
- **location**: `'object'`, navegador (BOM).
- **navigator**: `'object'`, navegador (BOM).
- **screen**: `'object'`, navegador (BOM).
- **history**: `'object'`, navegador (BOM).
- **localStorage**: `'object'`, navegador (BOM / almacenamiento).
- **console**: `'object'`, navegador / entorno global.
- **setTimeout**: `'function'`, entorno / Web API.
- **alert**: `'function'`, navegador (BOM).

---

## 3.
- ¿Qué nombres dan `ReferenceError` si se evalúan directamente?**  
  window, document, location, navigator, screen, history, localStorage y alert.
- ¿Por qué ocurre?**  
  Porque son objetos propios del entorno de navegador (BOM/DOM) que no existen en el ámbito global estándar de Node.js.
- Cómo evitarlo:**  
  Utilizando el operador typeof combinado con globalThis (typeof globalThis[nombre]), ya que typeof nunca lanza errores por variables no declaradas (devuelve 'undefined') y globalThis unifica el objeto global en cualquier entorno.


## 4.
1. `navigator.hardwareConcurrency`**: Devuelve el número de núcleos lógicos de CPU disponibles en el dispositivo.
2. `navigator.maxTouchPoints`**: Indica el número máximo de puntos de contacto táctil simultáneos soportados por el dispositivo.
3. `navigator.pdfViewerEnabled`**: Devuelve un booleano indicando si el navegador puede visualizar archivos PDF de forma nativa.


## 5.
- Resultados:**  
  - `Object.keys(Math).length` devuelve `0`.
  - `Object.getOwnPropertyNames(Math).length` devuelve el total de propiedades y métodos (aprox. 44).
- ¿Por qué no coinciden?**  
  Porque Object.keys() solo lista las propiedades que son enumerables (visibles en bucles). En el caso de `Math`, todas sus constantes y métodos (como `PI`, `max`, `abs`, etc.) están definidos internamente en JavaScript como no enumerables por seguridad y diseño.