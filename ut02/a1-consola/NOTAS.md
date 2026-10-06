# La consola es tu terminal

## 2. Así se ve en Live Server y en la consola
![Punto 2 en la consola](./img/consolaF12.png)
![Punto 2 en la terminal](./img/node%20app.js.png)

## 3. Diferencias y añadir error de alert
La única diferencia que hay es visual, pero ambos ejecutan bien los console empleados
Al añadir alert('Hola'); y ejectuarlo en Node aparece un error porque la función de alert no está definida en node.js 
![errorAltert](./img/errorAlertpng)

## 4. Añadir use strict
Si solo ponemos resultado = 42, no da error porque crea una variable global y cuando ponemos el 'use strict' da error porque la variable resultado no está declarada
![usestrict](./img/errorConsolastrict.png)