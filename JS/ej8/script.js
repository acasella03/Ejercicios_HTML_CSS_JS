document.addEventListener('DOMContentLoaded', function() {
    // Obtener la colección de usuarios de localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Imprimir la colección de usuarios en la consola
    console.table(users);
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtener la colección de usuarios de localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Obtener la referencia a la tabla
    const table = document.querySelector('table');

    // Limpiar la tabla si ya tiene contenido
    table.innerHTML = '';

    // Agregar los encabezados de la tabla
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Dirección</th>
            <th>Fecha de Nacimiento</th>
            <th>Teléfono</th>
            <th>Correo Electrónico</th>
            <th>Tipo de Cuenta</th>
            <th>Acciones</th>
        </tr>
    `;
    table.appendChild(thead);

    // Agregar los datos de los usuarios a la tabla
    const tbody = document.createElement('tbody');
    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.nombre}</td>
            <td>${user.apellidos}</td>
            <td>${user.direccion}</td>
            <td>${user.fechaNacimiento}</td>
            <td>${user.telefono}</td>
            <td>${user.correo}</td>
            <td>${user.tipoCuenta}</td>
            <td><a href="detalle.html?id=${user.id}">Ver detalle</a></td>
        `;
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
});

