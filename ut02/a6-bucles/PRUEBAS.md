## 6. Entrada Válida (Número entre 1 y 20)
| Entrada sucesiva | Esperado | Obtenido |
| :--- | :--- | :--- |
| `25`, `-3`, `10` | Pide de nuevo tras 25 y -3, acepta 10 en 3 intentos. | (Comprobado) |
| `abc`, `5` | Pide de nuevo por valor no numérico, acepta 5 en 2 intentos. | (Comprobado) |
| `15` | Acepta a la primera en 1 intento. | (Comprobado) |

## 7. Adivina el Número (Secreto ej. 50)
| Intentos del usuario | Esperado | Obtenido |
| :--- | :--- | :--- |
| `50` | Acierta a la primera (1 intento). | (Comprobado) |
| `10`, `80`, `50` | Indica "mayor", luego "menor", y acierta en 3 intentos. | (Comprobado) |
| 7 intentos fallidos | Agota los intentos y muestra el número secreto. | (Comprobado) |

## 8. Suma hasta Cero
| Secuencia de entradas | Esperado | Obtenido |
| :--- | :--- | :--- |
| `5`, `10`, `-2`, `0` | Suma: 13, Cantidad: 3, Mayor: 10, Menor: -2 | (Comprobado) |
| `0` | No se introdujo ningún número. | (Comprobado) |
| `100`, `100`, `0` | Suma: 200, Cantidad: 2, Mayor: 100, Menor: 100 | (Comprobado) |

## 13. Números Primos hasta N
| Entrada (N) | Esperado | Obtenido |
| :--- | :--- | :--- |
| `50` | 15 primos encontrados (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47) | (Comprobado) |
| `10` | 4 primos (2, 3, 5, 7) | (Comprobado) |
| `1` | Ningún primo (lista vacía) | (Comprobado) |