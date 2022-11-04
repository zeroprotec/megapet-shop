

// importar mongoose
const mongoose = require('mongoose');

// establecer el schema del document en la collection
const proveedorSchema = mongoose.Schema({
    id_prov : Number,
    nombre_prov : String,
    telefono_prov : Number,
    direccion_prov : String,
    ciudad_prov : String
},
{
    versionKey : false
});

// exportar para utilizar en otros archivos o script
module.exports = mongoose.model('proveedores', proveedorSchema);
// utilizarlo en el controlador => CRUD