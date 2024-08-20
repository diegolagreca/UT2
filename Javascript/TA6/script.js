function printResult(str) {
    // Meto el resultado en el cuerpo del HTML
    const p = document.getElementById('result');
    p.textContent = `Resultado: ${str}`;
}

function roundToOneDecimal(num) {
    return +(Math.round(num + "e+1") + "e-1");
}

function convertToCelsius(degrees) {
    let result = roundToOneDecimal((degrees - 30) / 2);
    console.log(degrees + " ºF son " + result + " ºC");
    return result + " ºC";
}

function convertToFahrenheit(degrees) {
    let result = roundToOneDecimal((degrees * 2) + 30);
    console.log(degrees + " ºC son " + result + " ºF");
    return result + " ºF";
}


document.getElementById('convertToCelsius').addEventListener('click', function () {
    // Obtener el valor del input
    let degreesF = document.getElementById('fahrenheit').value;


    // Llamada a la función
    printResult(convertToCelsius(degreesF));
});

document.getElementById('convertToFahrenheit').addEventListener('click', function () {
    // Obtener el valor del input
    let degreesC = document.getElementById('celcius').value;


    // Llamada a la función
    printResult(convertToFahrenheit(degreesC));
});
