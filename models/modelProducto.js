
// importar mongoose
const mongoose = require('mongoose');

// establecer el schema del documento en la collection
const productoSchema = mongoose.Schema({
    id_prod : Number,
    nombre_prod : String,
    cant_stock_prod : Number,
    categoria_prod : String,
    precio_prod : Number,
    id_proveedor : [mongoose.Types.ObjectId]
},
{
    versionKey : false
});


// exportar 
module.exports = mongoose.model('productos', productoSchema);

