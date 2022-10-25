
// Importar el modulo de expess
// forma convencional nodejs
const express = require("express");
// otra forma de javascript
// import express from "express"

// Para establecer las rutas de express
const router = express.Router();

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
});

router.post("/mesaje",function(req,res){
    res.send("Mensaje con Metodo POST");
});
// -------------------------------------------------------------------------------------------------------------
// Asignacion del puerto
app.listen(4000);

// Mensaje de activacion de servidor web
console.log("Servidor ejecutandose desde: http://localhost:4000/");
console.log("'Ctrl + C' para detener el servidor");
