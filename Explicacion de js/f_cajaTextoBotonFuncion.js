function nombreFuncion(){

    let caja_txt = document.getElementById("caja-txt").value;

    let resultado = document.getElementById("resultado");

    resultado.innerHTML += `<h3>${caja_txt}</h3>`;
}
