function revertir(str) {
  for (let n = 0; n < cantidad; n++) {
    const para = document.createElement("p");
    para.textContent = "👮";
    document.body.appendChild(para);
  }
  console.log("Se hizo click en el botón con un valor de " + cantidad)
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);

}