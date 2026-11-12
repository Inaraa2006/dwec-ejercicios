const salida = document.getElementById('salida');

// 1. textContent: Inserta el texto tal cual, interpretando las etiquetas como texto plano
salida.textContent = '<b>Hola</b> (textContent)';

// 2. innerHTML: Interpreta las etiquetas HTML y sobrescribe todo el contenido previo
salida.innerHTML = '<b>Hola</b> (innerHTML)';

// 3. insertAdjacentHTML: Añade contenido relativo a la posición (ej. 'beforeend' al final) sin borrar lo anterior
salida.insertAdjacentHTML('beforeend', '<p>Párrafo añadido con insertAdjacentHTML</p>');