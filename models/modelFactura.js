const {Schema , model} = require('mongoose');

const facturaSCH = new Schema({

    idFactura : Number,
    idUsuarios : {
        type : Schema.Types.ObjectId,
        ref : 'Usuario'
    },
    idProductos : [{
        type : Schema.Types.ObjectId,
        ref : 'Producto'
    }],
    tipoCompra : String,
    //por terminar
    precio : {
    costo : Number,
    estado: Boolean
}
},
{
    versionKey : false
});

module.exports =   model('Factura', facturaSCH);