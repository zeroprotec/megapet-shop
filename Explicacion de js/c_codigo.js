// let nombre = prompt("Digite su numbre:", "JAS");
// alert("Hola Tripulantes \n" + nombre + " Bienvenido al curso de Prog. Web...");

// document.write("Hola Tripulantes... <br>" + nombre + " Bienvenido al curso de Prog. Web...");

// let datos = document.getElementById("datos");
// // datos.innerHTML += "Asignación utilizando el id.innerHTML <br>";
// datos.innerHTML += `Asignación utilizando el id.innerHTML <br>`;


let nombre = prompt("Digite su numbre:", "JAS");
let nombre_id = document.getElementById("nombre-id");
nombre_id.innerHTML += `
    <h3> Hola ${nombre} </h3>
`;

let edad = prompt("Digite su edad:", "6")
let datos = document.getElementById("datos");
if (edad < 18){
    datos.innerHTML += `
        <h4>Usted tiene ${edad} años, por ende es menor de edad....
    `;
}
else{
    datos.innerHTML += `
        <h4>Usted tiene ${edad} años, por ende es mayor de edad....
    `;
}



let eject_for = document.getElementById("eject-for")

for(let i = 1; i<= 6; i++){
    eject_for.innerHTML += `
        <h${i}> Título en h${i} </h${i}
    `;
}
