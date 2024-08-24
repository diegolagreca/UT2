const people = [
    'John Doe',
    'Jane Smith',
    'Michael Johnson',
    'Emily Davis',
    'William Brown',
    'Olivia Wilson',
    'James Jones',
    'Isabella Garcia'
];

let personList = document.getElementById('personList');

// Función para renderizar la lista de personas
function renderList(items) {
    personList.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

// Renderizar la lista inicial
renderList(people);

// Añadir evento de escucha al input para filtrar la lista
document.getElementById('searchInput').addEventListener('input', function (event) {
    let searchText = event.target.value.toLowerCase();
    // Filtro
    let filteredPeople = people.filter(person =>
        person.toLowerCase().includes(searchText)
    );
    // Renderizo
    renderList(filteredPeople);
});
