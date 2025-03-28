// Función para actualizar la fecha y hora
function actualizarFechaHora() {
    const fechaHoraElemento = document.getElementById('fecha-hora');
    const ahora = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    fechaHoraElemento.textContent = ahora.toLocaleDateString('es-ES', opciones);
}

// Obtener la ubicación del usuario
function obtenerUbicacion() {
    const ubicacionElemento = document.getElementById('ubicacion');
    
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (posicion) => {
                const { latitude, longitude } = posicion.coords;
                ubicacionElemento.textContent = `Latitud: ${latitude.toFixed(2)}, Longitud: ${longitude.toFixed(2)}`;
            },
            (error) => {
                ubicacionElemento.textContent = "No se pudo obtener la ubicación.";
            }
        );
    } else {
        ubicacionElemento.textContent = "Geolocalización no soportada en este navegador.";
    }
}

// Actualizar la fecha y la hora cada segundo
setInterval(actualizarFechaHora, 1000);
actualizarFechaHora();
obtenerUbicacion();
