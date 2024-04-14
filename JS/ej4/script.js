function actualizarHora() {
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    let minutosActuales = fechaActual.getMinutes();
    let segundosActuales = fechaActual.getSeconds();

    // Minutos y segundos se muestran con dos dígitos
    minutosActuales = minutosActuales < 10 ? '0' + minutosActuales : minutosActuales;
    segundosActuales = segundosActuales < 10 ? '0' + segundosActuales : segundosActuales;

    // Obtener todos los elementos con la clase "now"
    const elementosNow = document.querySelectorAll('.now');

    // Actualizar el contenido de cada elemento con la hora actual
    elementosNow.forEach(elemento => {
        elemento.innerHTML = 'La hora actual es: ' + horaActual + ':' + minutosActuales + ':' + segundosActuales;
    });
}

// Llamar a actualizarHora cada segundo
setInterval(actualizarHora, 1000);