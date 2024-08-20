function printResult(str) {
    // Meto el resultado en el cuerpo del HTML
    const p = document.getElementById('result');
    p.textContent = `Resultado: ${str}`;
}

// números
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];

function getSum(nums) {
    // Usamos el método reduce para calcular la suma de todos los números y devolver un nuevo array
    let sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum);
    return sum;
}

document.getElementById('getSum').addEventListener('click', function () {
    // Llamada a la función
    printResult(getSum(nums));
});

