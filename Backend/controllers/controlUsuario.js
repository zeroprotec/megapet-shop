    const modelUsuarios = require('../models/modelUsuario');
    const bcrypt = require('bcrypt');


                        // ------------------------------ CRUD -------------------------------------
  
// Método para crear nuevos documentos                        
exports.crear = async (req, res) => {

    try {

        const rol = req.body.rol;
        

        if( rol.toLowerCase() == 'usuario'){

             let user;
             user = new modelUsuarios(req.body);
             user.pwd = await bcrypt.hash(req.body.pwd,10);
            await user.save();
            return res.send(user);

        }
        
        else if (rol.toLowerCase() == 'administrador'){
            
            let  {
                nombre,
                pwd,
                rol = 'administrador',
                cedula, 
        } = req.body;

        
        pwd = await bcrypt.hash(pwd,10)

        

        const admin = new modelUsuarios ({ 
            nombre,
            pwd,
            rol,
            cedula
        });

        admin.facturas = undefined;
        admin.fecha = undefined;

        await admin.save();
        return res.send(admin);

        }
    } catch (error) {

        console.log("Error al gurdar datos: " + error);
        return res.status(500).send("Error al guardar el producto");

    };
};


//--------------------------------------------------- Método para consultar -------------------------------------------

//todos los usuarios
exports.consultar = async(req, res) => {

    try {
        
        let user = await modelUsuarios.find().populate('facturas', '_id total');
        if (user.rol == "administrador"){
            
            const admin = user.select('-fecha -facturas');
            console.log(admin);
            res.json(admin);
        }
        return res.json(user);

    } catch (error) {
        
        console.log("Error al gurdar datos: " + error);
        return res.status(500).send("Error al consultar la BD")

    }
};

//Buscar por ID
exports.consultarByID = async(req, res) => {

    try {
        
        const user = await modelUsuarios.findById(req.params.id)
        .populate('facturas', '_id total');
    
        const rol = user.rol.toLocaleLowerCase();
        

        // if (rol == "administrador"){
            
        //     //---------- arreglar select ------------------------------

        //     // const admin = await modelUsuarios.findById(req.params.id)
        //     // .populate('facturas', '_id total').select({fecha:0, facturas :0});
            

        //     return res.json(admin);
        // }
        return res.json(user);
        

    } catch (error) {
        
        console.log("Error al gurdar datos: " + error);
        return res.status(500).send("Error al consultar la BD")

    }
};
//Busar por rol
exports.findByRol = async (req, res) => {

    try {
        
        const user = await modelUsuarios.find({ "rol" : req.params.rol.toLowerCase()})
        .select({nombre:1 , rol:1, facturas :1});
  
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
//------------------------------------------------------- Método para actualizar ------------------------------------------------------
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

//--------------------------------- Método para eliminar  -------------------------------------
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

 
 
