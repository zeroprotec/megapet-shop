
// Importar el modulo de expess
// forma convencional nodejs
const express = require("express");
const mongoose = require("mongoose");


// Importar las variables de entorno
require("dotenv").config({path:"var.env"});

// Para establecer las rutas de express
const router = express.Router();

// Importar la ruta de la configuración con la base de datos
const conectarDB = require('./config/cxn_db');

// Importar los CORS
const cors = require('cors');

// Inicializar express
var app = express();

//Manejo de JSON por parte  del body
app.use(express.json());

// Conectar con la BAse de Datos
conectarDB();

// Para usar los metodos http 
app.use(router);

//Importar controladores

const controlProducto = require('./controllers/controlProducto');
const controlUsuario = require('./controllers/controlUsuario');


//------------------------------------------------------------ EndPoints ------------------------------------------

// PRODUCTO
router.get('/producto', controlProducto.consultar);
router.post('/producto/crear', controlProducto.crear);
router.put('/producto/actualizar/:id', controlProducto.actualizar);
router.delete('/producto/borrar/:id', controlProducto.eliminar);
router.get('/producto/ctg/:categoria', controlProducto.findByCategory);

//Usuarios
router.get('/users', controlUsuario.consultar);
router.get('/users/:id', controlUsuario.consultarByID);
router.post('/users/crear', controlUsuario.crear);
router.post('/users/crear/admin', controlUsuario.crearAdmin);
router.put('/users/actualizar/:id', controlUsuario.actualizar);
router.delete('/users/borrar/:id', controlUsuario.eliminar);
router.get('/users/:rol',controlUsuario.findByRol);


// Asignacion del puerto
app.listen(process.env.PORT);

// Mensaje de activacion de servidor web
console.log("Servidor ejecutandose desde: http://localhost:4000/");
console.log("'Ctrl + C' para detener el servidor");
