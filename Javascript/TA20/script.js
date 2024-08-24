let image = document.getElementById('hoverImage');

let originalSrc = 'imagen1.jpg';
let hoverSrc = 'imagen2.jpg';

// Cambiar la imagen al pasar el mouse por encima
image.addEventListener('mouseenter', function () {
    image.src = hoverSrc;
});

// Volver a la imagen original al retirar el mouse
image.addEventListener('mouseleave', function () {
    image.src = originalSrc;
});
