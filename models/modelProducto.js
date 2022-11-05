
// importar mongoose
const mongoose = require('mongoose');

// establecer el schema del documento en la collection
const productoSchema = mongoose.Schema({
    id_prod : Number,
    nombre_prod : String,
    cant_stock_prod : Number,
    precio_prod : {precio_compra:Number,
        precio_venta:Number},
    categoria_prod : {tipo_mascota:String,
    tipo_producto:String},
    imagen:String,
},
{
    versionKey : false
});


// exportar 
module.exports = mongoose.model('productos', productoSchema);

