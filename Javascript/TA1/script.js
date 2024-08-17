function botonear(cantidad) {
    if(isNaN(cantidad)){
        alert(cantidad + " no es un número!😠");
        throw new Error(cantidad + " no es un número!😠");
    } else {
    for(let n=0; n < cantidad; n++){
        const para = document.createElement("p");
        para.textContent = "👮";
        document.body.appendChild(para);
    }
    console.log("Se hizo click en el botón con un valor de " + cantidad)
  }
}