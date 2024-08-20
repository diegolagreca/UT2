function printResult(str) {
    // Meto el resultado en el cuerpo del HTML
    const p = document.getElementById('result');
    p.textContent = `Resultado: ${str}`;
}

// números
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getOdds(nums) {
    // Usamos el método filter para obtener un nuevo array con los números impares
    let oddNumbers = nums.filter(num => num % 2 !== 0);
    console.log(oddNumbers);
    return oddNumbers;
}

document.getElementById('getOdds').addEventListener('click', function () {
    // Llamada a la función
    printResult(getOdds(nums));
});

