let nombre;
let registro = document.getElementById("registro-div");
let tripulantes = [];

do{
    nombre = prompt("Digite su nombre (enter para terminar): ", "");
    registro.innerHTML += `
        <h3>${nombre}</h3>
    `;
    if(nombre != ""){
        tripulantes.push(nombre);
    }
} while(nombre != "");

registro.innerHTML = "";

for(let i = 0; i < tripulantes.length; i++){
    registro.innerHTML += `
        <h3>tripulantes[${i}] = ${tripulantes[i]}</h3>
    `;
}

