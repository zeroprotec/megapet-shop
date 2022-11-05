// importar mongoose
const mongoose = require('mongoose');

// establecer el schema del document en la collection
const proveedorSchema = mongoose.Schema({
    nombre_usuario : String,
    contraseña:String,
    cedula: Number,
    Rol:String,
    RUT:Number,
    NIT:Number,
    info_financiera:{Num_cuenta:Number,Banco:String,Num_Tarjeta:Number,Tipo_cuenta:String,CVV:Number},
    contacto_usuario : {telefono:Number,celular:Number,correo:String},
    direccion_usuario : {Pais:String,Cuidad:String,direccion:String},
    fecha:{fecha_entrada:datetime,fecha_salida:datetime}
},
{
    versionKey : false
});

// exportar para utilizar en otros archivos o script
module.exports = mongoose.model('usuarios', proveedorSchema);
// utilizarlo en el controlador => CRUD