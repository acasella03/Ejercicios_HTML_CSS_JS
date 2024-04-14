document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario

        const formData = new FormData(form);
        // Imprimir los datos del formulario en la consola
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Convertir los datos del formulario en un objeto
        const formData = new FormData(form);
        let userData = {};
        for (let [key, value] of formData.entries()) {
            userData[key] = value;
        }
        console.log(userData);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Convertir los datos del formulario en un objeto
        const formData = new FormData(form);
        let userData = {};
        for (let [key, value] of formData.entries()) {
            userData[key] = value;
        }

        // Generar un ID único y autoincremental
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
        userData.id = newId;

        // Añadir el nuevo registro a la colección de usuarios en localStorage
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));

        console.log('Usuario añadido:', userData);
    });
});
