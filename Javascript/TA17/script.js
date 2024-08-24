let count = 0;

document.getElementById('incrementButton').addEventListener('click', function() {
    // Incrementar el valor del contador
    count++;

    // Actualizar el contenido del span con el nuevo valor
    document.getElementById('counter').textContent = count;
});
