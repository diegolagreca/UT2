function printResult(str) {
    // Meto el resultado en el cuerpo del HTML
    const p = document.getElementById('result');
    p.textContent = `Resultado: ${str}`;
}

// personas
const people = [
    {
        // la persona mas vieja registrada, vivió 122 años, 164 días
        name: "Jeanne Calment",
        yearOfBirth: 1875,
        yearOfDeath: 1997,
    },
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
    {
        name: "J.R.R. Tolkien",
        yearOfBirth: 1892,
        yearOfDeath: 1973,
    },
    {
        name: "C.S. Lewis",
        yearOfBirth: 1898,
        yearOfDeath: 1963,
    },
    {
        name: "Ursula K. Le Guin",
        yearOfBirth: 1929,
        yearOfDeath: 2018,
    },
    {
        name: "Terry Pratchett",
        yearOfBirth: 1948,
        yearOfDeath: 2015,
    },
    {
        name: "George R.R. Martin",
        yearOfBirth: 1948,
        // sigue vivo
    }

];
function findTheOldest(people) {
    // Usamos el método reduce para encontrar a la persona con mayor edad
    let oldest = people.reduce((oldestPerson, currentPerson) => {
        // Calculamos la edad de la persona actual
        let currentAge = (currentPerson.yearOfDeath || new Date().getFullYear()) - currentPerson.yearOfBirth;
        // Calculamos la edad de la persona más vieja hasta ahora
        let oldestAge = (oldestPerson.yearOfDeath || new Date().getFullYear()) - oldestPerson.yearOfBirth;

        // Comparamos ambas edades y retornamos la persona con mayor edad
        return currentAge > oldestAge ? currentPerson : oldestPerson;
    });

    console.log(oldest);
    return oldest;
}

document.getElementById('findTheOldest').addEventListener('click', function () {
    // Llamada a la función
    printResult(findTheOldest(people)["name"]);
});

