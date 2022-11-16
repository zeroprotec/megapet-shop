const {Schema , model} = require('mongoose');

const facturaSCH = new Schema({

    idUsuario : {
        type : Schema.Types.ObjectId,
        ref : 'Usuario'
    },
    productos : [{
        id_Producto: {
            type : Schema.Types.ObjectId,
            ref : 'Producto'
        },
        cantidad : Number,
        precioU: Number
    }],

    tipoCompra : String,
    
    total: Number
},
{
    versionKey : false
});

//facturaSCH.virtual()
module.exports =   model('Factura', facturaSCH);