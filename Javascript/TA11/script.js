function printResult(str) {
    // Meto el resultado en el cuerpo del HTML
    const p = document.getElementById('result');
    p.textContent = `Resultado: ${str}`;
}

// números
const nums = [1, 2, 2, 3, 4, 4, 4, 5, 8, 8, 8, 8];

function duplicates(nums) {
    // Crear un objeto para contar la ocurrencia de cada número
    let count = {};

    // Usar el método forEach para contar las apariciones de cada número
    nums.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });

    console.log(count);
    // Filtrar el objeto para encontrar los números que se repiten
    let duplicateCount = Object.values(count).filter(value => value > 1).length;
    console.log(duplicateCount);
    return duplicateCount;
}

document.getElementById('duplicates').addEventListener('click', function () {
    // Llamada a la función
    printResult(duplicates(nums));
});

