// importar mongoose
const {Schema , model} = require('mongoose');

const usuarioSCH = new Schema({

    nombre : String,
    pwd : String,
    cedula: Number,
    rut: String,
    rol: String,
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
    fecha: [Date],
    facturas : [{
        type : Schema.Types.ObjectId,
        ref : 'Factura'
    }]
},
{
    versionKey : false
});

module.exports = model('usuarios', usuarioSCH);