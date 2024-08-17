function reverseString(texto) {
  return texto.split('').reverse().join('');
}

document.getElementById('reverseButton').addEventListener('click', function () {
  // Obtener el texto del input e invertirlo
  const texto = document.getElementById('inputText').value;
  const textoInvertido = reverseString(texto);

  // Crear un nuevo párrafo y añadir el texto invertido
  const p = document.createElement('p');
  p.textContent = textoInvertido;
  document.body.appendChild(p);
});
