function actualizarHora() {
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    let minutosActuales = fechaActual.getMinutes();
    let segundosActuales = fechaActual.getSeconds();

    // Minutos y segundos se muestran con dos dígitos
    minutosActuales = minutosActuales < 10 ? '0' + minutosActuales : minutosActuales;
    segundosActuales = segundosActuales < 10 ? '0' + segundosActuales : segundosActuales;

    // Mostrar la hora actual en el div
    document.getElementById('contenido').innerHTML = 'La hora actual es: ' + horaActual + ':' + minutosActuales + ':' + segundosActuales;
}

// Llamar a actualizarHora cada segundo
setInterval(actualizarHora, 1000);