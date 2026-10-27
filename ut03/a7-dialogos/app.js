'use strict';

let temporizador = null;

function avisar(texto) {
    const pMensaje = document.getElementById('mensaje');
    
    if (temporizador !== null) {
        clearTimeout(temporizador);
    }
    
    pMensaje.textContent = texto;
    
    temporizador = setTimeout(() => {
        pMensaje.textContent = '';
        temporizador = null;
    }, 3000);
}

const btnNativos = document.getElementById('btnNativos');
const salidaNativos = document.getElementById('salidaNativos');

if (btnNativos) {
    btnNativos.addEventListener('click', () => {
        const nombre = prompt('Introduce tu nombre:', 'Inara');
        let mensaje = '';

        if (nombre === null) {
            mensaje = '<p>Has cancelado el prompt.</p>';
        } else if (nombre.trim() === '') {
            mensaje = '<p>Hola, anónimo (campo vacío).</p>';
        } else {
            mensaje = `<p>Hola, ${nombre}!</p>`;
            const continuar = confirm('¿Deseas continuar?');
            
            if (continuar) {
                alert('¡Continuamos!');
                mensaje += '<p>Continuación aceptada.</p>';
            } else {
                alert('Operación cancelada.');
                mensaje += '<p>Cancelado en el confirm.</p>';
            }
        }
        salidaNativos.innerHTML = mensaje;
    });
}

const btnVaciar = document.getElementById('btnVaciar');
const dialogoVaciar = document.getElementById('dialogoVaciar');
const cancelarVaciar = document.getElementById('cancelarVaciar');
const aceptarVaciar = document.getElementById('aceptarVaciar');
const listaVaciar = document.getElementById('listaVaciar');

btnVaciar.addEventListener('click', () => {
    dialogoVaciar.showModal();
});

cancelarVaciar.addEventListener('click', () => {
    dialogoVaciar.close();
});

aceptarVaciar.addEventListener('click', () => {
    listaVaciar.innerHTML = '';
    avisar('Lista vaciada correctamente.');
    dialogoVaciar.close();
});

const btnAnadir = document.getElementById('btnAnadir');
const dialogoAnadir = document.getElementById('dialogoAnadir');
const formAnadir = document.getElementById('formAnadir');
const nombreItem = document.getElementById('nombreItem');
const cancelarAnadir = document.getElementById('cancelarAnadir');
const listaAnadir = document.getElementById('listaAnadir');

btnAnadir.addEventListener('click', () => {
    nombreItem.value = '';
    dialogoAnadir.showModal();
});

cancelarAnadir.addEventListener('click', () => {
    dialogoAnadir.close();
});

formAnadir.addEventListener('submit', (e) => {
    e.preventDefault();
    const valor = nombreItem.value.trim();
    
    if (valor) {
        const li = document.createElement('li');
        li.textContent = valor;
        listaAnadir.appendChild(li);
        avisar(`Elemento "${valor}" añadido.`);
    }
    
    dialogoAnadir.close();
});

// 4. Toast (Función avisar)
const btnToast = document.getElementById('btnToast');
if (btnToast) {
    btnToast.addEventListener('click', () => {
        avisar('Este es un mensaje de prueba tipo toast');
    });
}

// 5. Notificación del Sistema
const btnNotificacion = document.getElementById('btnNotificacion');

if (btnNotificacion) {
    btnNotificacion.addEventListener('click', async () => {
        if (!('Notification' in window)) {
            avisar('Este navegador no soporta notificaciones.');
            return;
        }

        let permiso = Notification.permission;

        if (permiso === 'default') {
            permiso = await Notification.requestPermission();
        }

        if (permiso === 'granted') {
            new Notification(document.title, {
                body: 'Esta es una notificación del sistema.'
            });
            avisar('Notificación enviada con éxito.');
        } else {
            avisar('Permiso de notificaciones denegado.');
        }
    });
}