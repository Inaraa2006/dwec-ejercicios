# Prueba UD2 · Versión A · Respuestas del ejercicio 1

**Inara Mendoza Acosta:**

Rellena la tabla con lo que muestra la consola (o el error que da) y una justificación de una línea con el concepto de la unidad (hoisting, zona muerta temporal, ámbito de bloque, sombreado, coerción, *falsy*, `??`…).

| Fragmento | Salida de la consola (o error) | Justificación |
|-----------|--------------------------------|---------------|
| F1 | undefined <br> 12| Primero muestra undefined porque stock no a sido definido y es un error de referencia. Luego al definirse ya muestra 12
| F2 | VM451:1 Uncaught ReferenceError: precio is not defined | Muetra un error de referencia porque precio a sido definido después de haberse llamado con el console.log|
| F3 | Interior <br> Exterior | Es un ámbito de bloque porque nivel es vuelto a definir con let dentro del if con interior, por lo que se sobreescribe y luego muestra exterior porque coge el let declarado fuera del if|
| F4 | 53 <br> 2 <br> true | En el primero el operador + con una cadena realiza concatenación de texto en vez de suma matemática, el segundo muesta 2 porque - fuerza la operación matemática y convierte de cadena a número y el tercero muestra true porque como es una comparación entre cadenas, el 1 va antes que el 9.|
| F5 | 10 <br> 0 | |
