


// Importar el módulo de express
// forma convencional de nodejs
const express = require('express');
// otra forma de JavaScript
// import express from 'express'

const mongoose = require('mongoose');

// importar las variables de entorno
require('dotenv').config({path: 'var.env'});

// para establecer las rutas de express
const router = express.Router();

// Importar la ruta de la configuración con la base de datos
const conectarDB = require('./config/cxn_db');


// // Importar los CORS
// const cors = require('cors');


// para inicializar express
var app = express();
app.use(express.json());

// Establecer la conexión con la base de datos
conectarDB();


// --------------------------------------------------------------------
// Prueba mínima para saber que funciona el módulo de express
// En relación al entorno web (ejecutar el servidor web)
// app.use('/', function(req, res){
//     res.send("Hola Tripulantes...")
// });
// utilizando una función flecha
// app.use('/', (req, res) => {
//     res.send("Utilizando la función flecha...")
// });
// --------------------------------------------------------------------

// --------------------------------------------------------------------
// Para utilizar los métodos http => GET, POST, PUT, DELETE, etc...
// const router = express.Router();  => agregada en la línea 10 antes de inicializar express()
app.use(router);


// Importar el Controlador de Proveedores => CRUD
const controlProveedor = require('./controllers/controlProveedor')

router.post('/apirest/proveedor/', controlProveedor.crear);  // Create
router.get('/apirest/proveedor/', controlProveedor.obtener);  // Read
router.get('/apirest/proveedor/:id', controlProveedor.obtenerPorId);  // Read
router.put('/apirest/proveedor/:id', controlProveedor.actualizar); // Update
router.delete('/apirest/proveedor/:id', controlProveedor.eliminar); // Delete


// importar el controlador de productos => CRUD
const controlProducto = require('./controllers/controlProducto');

router.post('/apirest/producto/', controlProducto.crear); // Create
router.get('/apirest/producto/', controlProducto.obtener); // Read
router.get('/apirest/producto/:id', controlProducto.obtenerPorId); // Read
router.put('/apirest/producto/:id', controlProducto.actualizar); // Update
router.delete('/apirest/producto/:id', controlProducto.eliminar); // Delete




// router.get('/mensaje', function(req, res){
//     res.send('Mensaje con Método GET');

//     // const name_db = 'u31_gxx'
//     // const user = 'u31gxx'
//     // const psw = 'u31gxx'
//     //const uri = `mongodb+srv://${user}:${psw}@misiontic-uis-jas.krymo.mongodb.net/${name_db}?retryWrites=true&w=majority`
//     // const uri = `mongodb+srv://u31gxx:u31gxx@misiontic-uis-jas.krymo.mongodb.net/u31_gxx?retryWrites=true&w=majority`
//     // mongoose.connect(uri)
//     // mongoose.connect(process.env.URI_MONGODB)
//     //     .then(function(){console.log("Base de Datos Conectada")})
//     //     .catch(function(e){console.log("Error: " + e)})

//     // // Establecer la conexión con la base de datos
//     // conectarDB();

// });

// router.post('/mensaje', function(req, res){
//     res.send('Mensaje con Método POST');
// });


// router.put('/mensaje', function(req, res){
//     res.send('Mensaje con Método PUT');
// });

// router.delete('/mensaje', function(req, res){
//     res.send('Mensaje con Método DELETE');
// });

// --------------------------------------------------------------------


// Asignación del puerto para el servidor web.
// app.listen(4000);
app.listen(process.env.PORT);


// Mensaje para saber que el servidor web está activo
console.log('Servidor Web Ejecutándose desde: http://localhost:4000/');
console.log('"Ctrl + c" para Finalizar el Servidor Web');
