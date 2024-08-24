let form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Validar los campos
    let isValid = validateForm();

    // Si es válido, enviar (aquí puedes manejar el envío)
    if (isValid) {
        alert('Formulario enviado correctamente.');
    }
});

function validateForm() {
    let isValid = true;

    // Obtener valores de los campos
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    // Validar nombre
    if (name === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Validar correo electrónico
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Validar contraseña
    if (password.length < 8) {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    return isValid;
}

// Validar en tiempo real
form.addEventListener('input', function() {
    validateForm();
});