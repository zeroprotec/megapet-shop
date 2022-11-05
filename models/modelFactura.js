// importar mongoose
const mongoose = require('mongoose');

// establecer el schema del document en la collection
const proveedorSchema = mongoose.Schema({
    id_factura : Number,
    id_usuario : [mongoose.Types.ObjectId],
    id_producto: [mongoose.Types.ObjectId],
    tipo_compra : String,
    fecha : Datetime,
    hora : datetime,
    Total : Number
},
{
    versionKey : false
});

// exportar para utilizar en otros archivos o script
module.exports = mongoose.model('facturas', proveedorSchema);
// utilizarlo en el controlador => CRUD