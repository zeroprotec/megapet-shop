const {Schema , model} = require('mongoose');

const productosSCH = new Schema({

    idProducto : Number,
    nombre : String,
    cantidad : Number, 
    descripcion: String,
    precio : {
        costo : Number,
        venta : Number
    },
    img : String,
    categoria : {
        tipoAnimal : String,
        tipoProducto : String
    },
    estado: Boolean
},
{
    versionKey : false
});

module.exports = model('Producto', productosSCH);