function printResult(str) {
    // Meto el resultado en el cuerpo del HTML
    const p = document.getElementById('result');
    if (typeof str !== 'undefined') {
        console.log(str);
        p.textContent = `Resultado: ${str}`;
    } else {
        p.textContent = 'El largo no es seguro. Ingrese un valor mayor o igual a 8.';
    }
}

function generatePassword(length) {

    // valido largo seguro
    if (length < 8) {
        console.log("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    // defino conjuntos de caractéres que voy a usar

    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let allCharacters = uppercase + lowercase + numbers + symbols;

    let password = '';

    // me aseguro que la contraseña contenga al menos un carácter de cada conjunto
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // completo la contraseña con caracteres aleatorios
    for (let i = password.length; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    // mezclo la contraseña para que no tenga un patrón predecible
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}

document.getElementById('generatePassword').addEventListener('click', function () {
    // Llamada a la función

    let passwordLength = document.getElementById('passwordLength').value;
    printResult(generatePassword(passwordLength));
});

