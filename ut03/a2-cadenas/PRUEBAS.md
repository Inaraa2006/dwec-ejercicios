## 1.
| Entrada | Resultado Esperado | Resultado Obtenido |
| :--- | :--- | :--- |
| `' ada LOVELACE byron '` | Ada Lovelace Byron \| A. L. B. \| 3 palabras | Correcto |
| `'JUAN'` | Juan \| J. \| 1 palabra | Correcto |
| `' maria  del   carmen '` | Maria Del Carmen \| M. D. C. \| 3 palabras | Correcto |

## 2.
| Título Introducido | Slug Esperado | Nombre de Fichero Esperado |
| :--- | :--- | :--- |
| `'Canción de Navidad (edición 2026)'` | `cancion-de-navidad-edicion-2026` | `2026-10-22-cancion-de-navidad-edicion-2026.md` |
| `'¡Hola Mundo! 2026'` | `hola-mundo-2026` | `2026-10-22-hola-mundo-2026.md` |
| `'Programación en Entorno Cliente'` | `programacion-en-entorno-cliente` | `2026-10-22-programacion-en-entorno-cliente.md` |

## 3.
| Frase de Entrada / Palabra a Censurar | Resultado Esperado | Resultado Obtenido |
| :--- | :--- | :--- |
| `'El Secreto está en el secreto'` / `'secreto'` | `'El ******* está en el *******'` | Correcto |
| `'JavaScript es un lenguaje genial'` / `'Python'` | `'JavaScript es un lenguaje genial'` | Correcto |
| `'Atención: error crítico'` / `'error'` | `'Atención: ***** crítico'` | Correcto |