
// Importar el modulo de expess
// forma convencional nodejs
const express = require("express");
const { default: mongoose } = require("mongoose");
// otra forma de javascript
// import express from "express"

// Para establecer las rutas de express
const router = express.Router();

// Importar las variables de entorno
require("dotenv").config({path:"var.env"})
// Inicializar express
var app = express();
// -------------------------------------------------------------------------------------------------------------
// Pruebas minimas de funcionamientp
// app.use("/",function(req,res){
//     res.send("Hola Tripulantes")
// });
// -------------------------------------------------------------------------------------------------------------
// utilizando una funcion flecha
// app.use("/", (req, res) => {
//     res.send("Utilizando la funcion flecha...")
// });
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// Para usar los metodos http
// const router = express.Router(); => aagregada a la linea 10 antes de inicializar 
app.use(router);
router.get("/mesaje",function(req,res){
    res.send("Mensaje con Metodo GET")

    const name_db = "OmegaShopGroupU31G5"
    const user = "dast"
    const paswr = "dast123"
    const uri = `mongodb+srv://${user}:${paswr}@omegapetshopu31g05.b2v1ve4.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(uri)
        .then(function(){
            console.log("Base de datos conectada")
        })
        .catch(function(e){console.log("Error:"+e)})
});

router.post("/mesaje",function(req,res){
    res.send("Mensaje con Metodo POST");
});

router.put("/mesaje",function(req,res){
    res.send("Mensaje con Metodo PUT")
});

router.delete("/mesaje",function(req,res){
    res.send("Mensaje con Metodo DELETE")
});
// -------------------------------------------------------------------------------------------------------------
// Asignacion del puerto
 app.listen(process.env.PORT);

// Mensaje de activacion de servidor web
console.log("Servidor ejecutandose desde: http://localhost:4000/");
console.log("'Ctrl + C' para detener el servidor");
