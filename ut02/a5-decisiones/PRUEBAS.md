## 2. Calificaciones
| Entrada (Nota) | Esperado | Obtenido |
| :--- | :--- | :--- |
| `4.99` | Insuficiente | (Comprobado) |
| `5` | Suficiente | (Comprobado) |
| `5.99` | Suficiente | (Comprobado) |
| `6` | Bien | (Comprobado) |
| `8.99` | Notable | (Comprobado) |
| `9` | Sobresaliente | (Comprobado) |
| `10` | Sobresaliente | (Comprobado) |
| `10.01` | Error (Fuera de rango) | (Comprobado) |
| `-1` | Error (Fuera de rango) | (Comprobado) |
| `texto` | Error (No numérico) | (Comprobado) |

## 3. Año Bisiesto
| Entrada (Año) | Esperado | Obtenido |
| :--- | :--- | :--- |
| `1900` | No bisiesto | (Comprobado) |
| `2000` | Sí bisiesto | (Comprobado) |
| `2024` | Sí bisiesto | (Comprobado) |
| `2026` | No bisiesto | (Comprobado) |

## 5. Tarifa de Entrada
| Entrada (Edad, Carnet, Día) | Esperado | Obtenido |
| :--- | :--- | :--- |
| `25`, `no`, `lunes` | Precio: 12.00 € | (Comprobado) |
| `4`, `no`, `viernes` | Entrada gratuita | (Comprobado) |
| `20`, `si`, `martes` | Precio: 6.00 € | (Comprobado) |
| `30`, `no`, `miercoles` | Entrada gratuita | (Comprobado) |