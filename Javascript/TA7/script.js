function printResult(str) {
    // Meto el resultado en el cuerpo del HTML
    const p = document.getElementById('result');
    p.textContent = `Resultado: ${str}`;
}

// unos libros
const books = [
    {
        title: 'Dune',
        author: 'Frank Herbert'
    },
    {
        title: 'The Hobbit',
        author: 'John Tolkien'
    },
    {
        title: 'The Name of the Wind',
        author: 'Patrick Rothfuss'
    }
];

function getTheTitles(books) {
    // método map para crear un nuevo array con los títulos de los libros
    const titles = books.map(book => book.title);
    console.log(titles);
    return titles;
}

document.getElementById('getTheTitles').addEventListener('click', function () {
    // Llamada a la función
    printResult(getTheTitles(books));
});

