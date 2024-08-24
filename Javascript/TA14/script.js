document.getElementById('addItemButton').addEventListener('click', function () {
    // Obtener el valor del input
    const itemText = document.getElementById('itemInput').value;

    // Crear un nuevo elemento <li>
    const newItem = document.createElement('li');
    newItem.textContent = itemText;
    document.getElementById('itemList').appendChild(newItem);

    // Borrar el texto del input
    document.getElementById('itemInput').value = '';


    // Enfocar de nuevo el input
    document.getElementById('itemInput').focus();
});


