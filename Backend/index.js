
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

// Inicializar express
var app = express();

//Manejo de JSON por parte  del body
app.use(express.json());

// Importar los CORS
const cors = require('cors');
app.use(express.json());

var whitelist = ['http://localhost:4000/producto', 'http://localhost:4200/producto']
var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { Origin: true } // reflect (enable) the requested Origin in the CORS response
    } else {
        corsOptions = { Origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}



// Conectar con la BAse de Datos
conectarDB();

// Para usar los metodos http 
app.use(router);

//Importar controladores

const controlProducto = require('./controllers/controlProducto');
const controlUsuario = require('./controllers/controlUsuario');
const controlFactura = require('./controllers/controlFactura');

//------------------------------------------------------------ EndPoints ------------------------------------------

// PRODUCTO
router.get('/producto', cors(corsOptionsDelegate), controlProducto.consultar);
router.get('/producto/:id', cors(corsOptionsDelegate), controlProducto.consultarByID);
router.post('/producto/crear', cors(corsOptionsDelegate), controlProducto.crear);
router.put('/producto/actualizar/:id', cors(corsOptionsDelegate), controlProducto.actualizar);
router.delete('/producto/borrar/:id', cors(corsOptionsDelegate), controlProducto.eliminar);
router.get('/producto/ctg/:categoria', cors(corsOptionsDelegate), controlProducto.findByCategory);

//Usuarios
router.get('/users', cors(corsOptionsDelegate), controlUsuario.consultar);
router.get('/users/:id', cors(corsOptionsDelegate), controlUsuario.consultarByID);
router.get('/users/rol/:rol', cors(corsOptionsDelegate),controlUsuario.findByRol);
router.post('/users/crear', cors(corsOptionsDelegate), controlUsuario.crear);
router.post('/users/crear/admin', cors(corsOptionsDelegate), controlUsuario.crear);
router.put('/users/actualizar/:id', cors(corsOptionsDelegate), controlUsuario.actualizar);
router.delete('/users/borrar/:id', cors(corsOptionsDelegate), controlUsuario.eliminar);


//Factura
router.get('/factura', cors(corsOptionsDelegate), controlFactura.consultar);
router.get('/factura/:id', cors(corsOptionsDelegate), controlFactura.consultarByID);
router.post('/factura/crear', cors(corsOptionsDelegate), controlFactura.crear);
router.put('/factura/actualizar/:id', cors(corsOptionsDelegate), controlFactura.actualizar);
router.delete('/factura/borrar/:id', cors(corsOptionsDelegate), controlFactura.eliminar);

// // PRODUCTO
// router.get('/producto', controlProducto.consultar);
// router.get('/producto/:id', controlProducto.consultarByID);
// router.post('/producto/crear', controlProducto.crear);
// router.put('/producto/actualizar/:id', controlProducto.actualizar);
// router.delete('/producto/borrar/:id', controlProducto.eliminar);
// router.get('/producto/ctg/:categoria', controlProducto.findByCategory);

// //Usuarios
// router.get('/users', controlUsuario.consultar);
// router.get('/users/:id', controlUsuario.consultarByID);
// router.get('/users/rol/:rol',controlUsuario.findByRol);
// router.post('/users/crear', controlUsuario.crear);
// router.post('/users/crear/admin', controlUsuario.crear);
// router.put('/users/actualizar/:id', controlUsuario.actualizar);
// router.delete('/users/borrar/:id', controlUsuario.eliminar);


// //Factura
// router.get('/factura', controlFactura.consultar);
// router.get('/factura/:id', controlFactura.consultarByID);
// router.post('/factura/crear', controlFactura.crear);
// router.put('/factura/actualizar/:id', controlFactura.actualizar);
// router.delete('/factura/borrar/:id', controlFactura.eliminar);

// Asignacion del puerto
app.listen(process.env.PORT);

// Mensaje de activacion de servidor web
console.log("Servidor ejecutandose desde: http://localhost:4000/");
console.log("'Ctrl + C' para detener el servidor");
