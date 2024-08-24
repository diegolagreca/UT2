document.getElementById('toggleButton').addEventListener('click', function() {
    const paragraph = document.getElementById('textParagraph');
    
    // Verificar si el párrafo está visible o no
    if (paragraph.style.display === 'none' || paragraph.style.display === '') {
        // Si está oculto, mostrarlo
        paragraph.style.display = 'block';
    } else {
        // Si está visible, ocultarlo
        paragraph.style.display = 'none';
    }
});
