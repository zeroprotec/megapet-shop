const modelUsuarios = require('../models/modelUsuario');
const bcrypt = require('bcrypt');

                    // ------------------------------ CRUD -------------------------------------

// Método para crear nuevos documentos                        
exports.crear = async (req, res) => {

try {
    
    let user;
    user = new modelUsuarios(req.body);
    await user.save();
    return res.send(user);

} catch (error) {

    console.log("Error al gurdar datos: " + error);
    return res.status(500).send("Error al guardar el producto");

};
};

exports.crearAdmin = async (req, res) => {

try {
    
    let  {
            nombre,
            pwd,
            rol = 'administrador',
            cedula
    } = req.body;

    
     pwd = await bcrypt.hash(pwd,10)

    const admin = new modelUsuarios ({ 
        nombre,
        pwd,
        rol,
        cedula
    });


    await admin.save();
    return res.send(admin);

} catch (error) {

    console.log("Error al guardar datos: " + error);
    return res.status(500).send("Error al guardar el administrador");

};
};

//Método para consultar todos los usuarios
exports.consultar = async(req, res) => {

try {
    
    const user = await modelUsuarios.find();
    return res.json(user);

} catch (error) {
    
    console.log("Error al gurdar datos: " + error);
    return res.status(500).send("Error al consultar la BD")

}
};

exports.consultarByID = async(req, res) => {

try {
    
    const user = await modelUsuarios.findById(req.params.id);
    return res.json(user);

} catch (error) {
    
    console.log("Error al gurdar datos: " + error);
    return res.status(500).send("Error al consultar la BD")

}
};

//Método para actualizar 
exports.actualizar = async (req, res) => {

try {
    
    const user = await modelUsuarios.findById(req.params.id);        
    if (!user){
        return res.status(400).json({ msg : "El usuario no existe " });
    }
    else{

        await modelUsuarios.findByIdAndUpdate( req.params.id , req.body, {new : true})
        .then(result => {
           
            return res.json( result) ;

        });
        
    };


} catch (error) {
    console.log("Error al actualizar datos: " + error);
    res.status(500).send("No se pudo actualizar el usuario");
};
};

//Método para eliminar 
exports.eliminar = async (req, res) => {

try {
    
    const user = await modelUsuarios.findById(req.params.id);
    if(!user){
        
        return res.status(400).json({ msg : "el usuario no existe"});
    }

    else{
        await modelUsuarios.findByIdAndRemove(req.params.id)
        .then(result => {
           
           return res.json( result) ;
        
        });
       
         
    };

} catch (error) {
    
    console.log("Error al eliminar datos: " + error);
    res.status(500).send("No se pudo eliminar el usuario");
};
};    

//Método para buscar por rol
exports.findByRol = async (req, res) => {

try {
    
    const user = await modelUsuarios.find({rol : req.params.rol})
    .select({nombre:1 , rol:1, facturas :1, _id:0});

    if(!user){
        
       return res.status(400).json({ msg : "el usuario no existe"});
    }

    else{
        return res.json(user);
    };

} catch (error) {
    
    console.log("Error al encontrar datos: " + error);
    res.status(500).send("No se pudo encontrar el producto por categoría");
    
}
};