// importar mongoose
const mongoose = require('mongoose');

// importar las variables de entorno
require('dotenv').config('../var.env');

// Establecer la conexión en una función
const conexionDB = async () => {
    try {
        // await espera la petición de la función asíncrona => conexión con la base de datos
        await mongoose.connect(process.env.URI_MONGODB);

        console.log("Base de Datos Conectada...");

    } catch (error) {
        
        console.log("Error: " + error);
        // para salir del proceso de conexión
        process.exit(1);
    }
}

// exportar para que sea visible desde otros archivos/script
module.exports = conexionDB;
