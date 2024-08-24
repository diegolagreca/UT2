document.getElementById('addItemButton').addEventListener('click', function () {
    // Obtener el valor del input
    let itemText = document.getElementById('itemInput').value;

    // Crear un nuevo elemento <li>
    let newItem = document.createElement('li');
    newItem.textContent = itemText;
    document.getElementById('itemList').appendChild(newItem);

    // Borrar el texto del input
    document.getElementById('itemInput').value = '';


    // Enfocar de nuevo el input
    document.getElementById('itemInput').focus();
});


document.getElementById('removeItemButton').addEventListener('click', function() {
    let itemList = document.getElementById('itemList');
    
    // Verificar si la lista no está vacía
    if (itemList.children.length > 0) {
        // Eliminar el último elemento <li> de la lista
        itemList.removeChild(itemList.lastChild);
    } else {
        alert('No hay elementos en la lista para eliminar.');
    }
});