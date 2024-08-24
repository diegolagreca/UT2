let textInput = document.getElementById('textInput');

// Cambiar el borde al hacer foco en el input
textInput.addEventListener('focus', function () {
    textInput.style.borderColor = '#000';  // Cambiar a un borde negro más oscuro
});

// Restaurar el borde original al perder el foco
textInput.addEventListener('blur', function () {
    textInput.style.borderColor = '#ccc';  // Restaurar el borde gris claro original
});
