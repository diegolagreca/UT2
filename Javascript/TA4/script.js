function sumAll(a, b) {
    // Sumo a + b :D
    let result = a + b;
    console.log(result);
    return result;
}

function printResult(str) {
    // Meto el resultado en el cuerpo del HTML
    const p = document.getElementById('result');
    p.textContent = `Resultado: ${str}`;
}

document.getElementById('sumAll').addEventListener('click', function () {
    // Obtener el valor de los input
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;

    const parsedA = isNaN(a) ? a : Number(a);
    const parsedB = isNaN(b) ? b : Number(b);

    // Llamada a la función
    printResult(sumAll(parsedA, parsedB));
});