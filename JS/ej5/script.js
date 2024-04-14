let cuentaAtras;
let segundosRestantes;

function iniciarCuentaAtras(segundos) {
    segundosRestantes = segundos;
    cuentaAtras = setInterval(function () {
        segundosRestantes--;
        document.getElementById('cuentaAtras').textContent = segundosRestantes;
        if (segundosRestantes <= 0) {
            clearInterval(cuentaAtras);
            document.getElementById('mensaje').innerHTML = 'La alarma está sonando!';
            document.getElementById('posponer').disabled = false;
            document.getElementById('parar').disabled = false;
        }
    }, 1000);
    document.getElementById('posponer').disabled = true;
    document.getElementById('parar').disabled = true;
}

document.getElementById('iniciar').addEventListener('click', function () {
    let segundosIniciales = parseInt(document.getElementById('segundos').value);
    if (segundosIniciales > 0) {
        // Asegura que el mensaje no se muestre al iniciar
        document.getElementById('mensaje').innerHTML = '';
        iniciarCuentaAtras(segundosIniciales);
    }
});

document.getElementById('posponer').addEventListener('click', function () {
    document.getElementById('posponer5').style.display = 'block';
    document.getElementById('posponer10').style.display = 'block';
    document.getElementById('posponer15').style.display = 'block';
    document.getElementById('posponer').disabled = true;
    document.getElementById('parar').disabled = true;
    // Oculta el mensaje de que la alarma está sonando
    document.getElementById('mensaje').innerHTML = '';
});

document.getElementById('parar').addEventListener('click', function () {
    clearInterval(cuentaAtras);
    document.getElementById('mensaje').innerHTML = 'Alarma parada.';
    document.getElementById('posponer').disabled = true;
    document.getElementById('parar').disabled = true;
});

// Eventos para los botones de posposición
document.getElementById('posponer5').addEventListener('click', function () {
    reiniciarCuentaAtras(5);
});
document.getElementById('posponer10').addEventListener('click', function () {
    reiniciarCuentaAtras(10);
});
document.getElementById('posponer15').addEventListener('click', function () {
    reiniciarCuentaAtras(15);
});

function reiniciarCuentaAtras(segundos) {
    clearInterval(cuentaAtras);
    iniciarCuentaAtras(segundos);
    document.getElementById('posponer5').style.display = 'none';
    document.getElementById('posponer10').style.display = 'none';
    document.getElementById('posponer15').style.display = 'none';
    document.getElementById('posponer').disabled = true;
    document.getElementById('parar').disabled = true;
}
