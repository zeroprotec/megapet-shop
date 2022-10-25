function mapaDiccionario(){
    let cc = document.getElementById("cc-per").value;
    let nombre = document.getElementById("nombre-per").value;
    let apellido = document.getElementById("apellido-per").value;
    let celular = document.getElementById("celular-per").value;
    let direccion = document.getElementById("direccion-per").value;

    let persona = {
        "cc": cc,
        "nombre": nombre,
        "apellido": apellido,
        "celular": celular,
        "direccion": direccion
    }

    // persona = 16; cuidado cambia el tipo de dato...

    console.log(persona);

    let mapa_dic = document.getElementById("mapa-dic");

    mapa_dic.innerHTML = "<h2>Contenido del Diccionario</h2>";
    mapa_dic.innerHTML += "<h4>persona = {</h4>";
    for(let clave in persona){
        mapa_dic.innerHTML += `
            "${clave}" : "${persona[clave]}", <br>
        `;
    }
    mapa_dic.innerHTML += "<h4>}</h4>";
}
