document.addEventListener('DOMContentLoaded', function() {
    const btnAnadir = document.getElementById('btnAnadir');
    const btnEliminar = document.getElementById('btnEliminar');
    const inputNumero = document.getElementById('inputNumero');
    const imagenesContainer = document.getElementById('imagenesContainer');
    const urlsImagenes = [
        'https://st.depositphotos.com/1001311/3411/i/450/depositphotos_34119767-stock-photo-3d-golden-number-collection-1.jpg',
        'https://www.shutterstock.com/image-vector/gold-number-two-realistic-3d-260nw-2086382290.jpg',
        'https://static8.depositphotos.com/1338574/829/i/450/depositphotos_8292990-stock-photo-the-number-3-in-gold.jpg',
        'https://st.depositphotos.com/1001311/3411/i/450/depositphotos_34119703-stock-photo-3d-golden-number-collection-4.jpg',
        'https://static8.depositphotos.com/1338574/829/i/450/depositphotos_8292996-stock-photo-the-number-5-in-gold.jpg'
    ];
    let imagenesAnadidas = [];

    btnAnadir.addEventListener('click', function() {
        if (imagenesAnadidas.length < 5) {
            const imagen = document.createElement('img');
            imagen.src = urlsImagenes[imagenesAnadidas.length];
            imagenesContainer.appendChild(imagen);
            imagenesAnadidas.push(imagen);
            actualizarMaximoInput();
        }
    });

    btnEliminar.addEventListener('click', function() {
        const numero = parseInt(inputNumero.value);
        if (numero > 0 && numero <= imagenesAnadidas.length) {
            imagenesContainer.removeChild(imagenesAnadidas[numero - 1]);
            imagenesAnadidas.splice(numero - 1, 1);
            actualizarMaximoInput();
        }
    });

    function actualizarMaximoInput() {
        inputNumero.max = imagenesAnadidas.length;
        inputNumero.min = 1;
    }
});