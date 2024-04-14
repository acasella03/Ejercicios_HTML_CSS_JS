const colores = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
let indiceColor = 0;

function cambiarColorFondo() {
    const contenido = document.getElementById('contenido');
    contenido.style.backgroundColor = colores[indiceColor];
    indiceColor = (indiceColor + 1) % colores.length; // Rotar el índice para el siguiente color
}

// Llamar a cambiarColorFondo cada segundo
setInterval(cambiarColorFondo, 1000);