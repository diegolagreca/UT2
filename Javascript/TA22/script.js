let dimensionsSpan = document.getElementById('dimensions');

// Función para actualizar las dimensiones
function updateDimensions() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    dimensionsSpan.textContent = `${width}px x ${height}px`;
}

// Detectar el evento de cambio de tamaño de la ventana
window.addEventListener('resize', updateDimensions);

// Mostrar las dimensiones actuales al cargar la página
updateDimensions();
