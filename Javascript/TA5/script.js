function leapYears(year) {
    // Comprueba año biciesto según
    // "Un año bisiesto es aquel que es divisible entre 4, 
    // o si es divisible entre 100 y también es divisible entre 400."
    let bisiesto = false;

    if(year%4==0 || (year%400==0 && year%100==0)){
        bisiesto = true;
        console.log("Año bisiesto!");
    }
    if(bisiesto == true){
        return "Año bisiesto!";
    } else {
        return "Año no bisiesto";
    }
}

function printResult(str) {
    // Meto el resultado en el cuerpo del HTML
    const p = document.getElementById('result');
    p.textContent = `Resultado: ${str}`;
}

document.getElementById('leapYear').addEventListener('click', function () {
    // Obtener el valor del input
    let year = document.getElementById('year').value;

    // Llamada a la función
    printResult(leapYears(year));
});
