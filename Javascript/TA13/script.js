function changeText() {
    // Meto el resultado en el cuerpo del HTML
    const p = document.getElementById('text');
    p.textContent = 'Texto cambiado';

}


document.getElementById('changeText').addEventListener('click', function () {
    // Llamada a la función
    changeText();
});

