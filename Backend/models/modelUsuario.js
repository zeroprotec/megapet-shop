const {Schema , model} = require('mongoose');

const usuarioSCH = new Schema({

    nombre : String,
    pwd : String,
    cedula: Number,
    rut: String,
    rol: {
            type: String,
            default : 'cliente'        
    },
    infoFinanciera:{
        banco: String,
        cuenta: Number,
        tipoCuenta: String,
        cv2: Number
    },
    ubicacion : {
        pais: String,
        ciudad: String,
        barrio: String
    },
    fecha: [{ 
         type: Date,
         default: Date.now }],
    facturas : [{
        type : Schema.Types.ObjectId,
        ref : 'Factura'
    }]
},
{
    versionKey : false
});

module.exports = model('Usuario', usuarioSCH);