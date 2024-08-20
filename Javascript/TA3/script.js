// Variable global para almacenar el estado del arreglo
let arreglo = [1, 2, 3, 4, 5];

function removeFromArray(arreglo, item) {
    // Encuentra el índice del item en el arreglo
    const index = arreglo.indexOf(item);

    // Si el item se encuentra en el arreglo, se elimina usando splice
    if (index > -1) {
        arreglo.splice(index, 1);
    }

    // Imprime el arreglo modificado en la consola
    console.log(arreglo);

    // Muestra el arreglo modificado en un <p> en el HTML
    const p = document.getElementById('result');
    p.textContent = `Arreglo modificado: ${arreglo.join(', ')}`;
}

document.getElementById('removeButton').addEventListener('click', function() {
    // Obtener el valor del input
    const item = document.getElementById('inputItem').value;
    const parsedItem = isNaN(item) ? item : Number(item);

    // Llamada a la función con el arreglo global y el item del input
    removeFromArray(arreglo, parsedItem);
});
