const modelProductos = require('../models/modelProducto');
                        // ------------------------------ CRUD -------------------------------------

                                                    // Método para crear nuevos documentos                        
exports.crear = async (req, res) => {

    try {
        
        let producto;
        producto = new modelProductos(req.body);
        await producto.save();
        return res.send(producto);

    } catch (error) {

        console.log("Error al gurdar datos: " + error);
        return res.status(500).send("Error al guardar el producto");

    };
};

                                                   // Método para consultar documentos                        
//todos
exports.consultar = async(req, res) => {

    try {
        
        const producto = await modelProductos.find();
        return res.json(producto);

    } catch (error) {
        
        console.log("Error al gurdar datos: " + error);
        return res.status(500).send("Error al consultar la BD")

    }
};
//Por ObjectID
exports.consultarByID = async(req, res) => {

    try {
        
        const producto = await modelProductos.findById(req.params.id);
        return res.json(producto);

    } catch (error) {
        
        console.log("Error al gurdar datos: " + error);
        return res.status(500).send("Error al consultar la BD")

    }
};
                                                    // Método para actualizar documentos                        
exports.actualizar = async (req, res) => {

    try {
        
        const producto = await modelProductos.findById(req.params.id);        
        if (!producto){
            return res.status(400).json({ msg : "El producto no existe " });
        }
        else{

            await modelProductos.findByIdAndUpdate( req.params.id , req.body, {new : true})
            .then(result => {
               
                return res.json( result) ;

            });
            
        };


    } catch (error) {
        console.log("Error al actualizar datos: " + error);
        res.status(500).send("No se pudo actualizar el producto");
    };
};

                                                    // Método para eliminar documentos   
exports.eliminar = async (req, res) => {

    try {
        
        const producto = await modelProductos.findById(req.params.id);
        res.json(producto);
        if(!producto){
            
            return res.status(400).json({ msg : "el producto no existe"});
        }

        else{
            await modelProductos.findByIdAndRemove(req.params.id)
            .then(result => {
               
               return res.json( result) ;
            
            });
           
             
        };

    } catch (error) {
        
        console.log("Error al eliminar datos: " + error);
        res.status(500).send("No se pudo eliminar el producto");
    };
};    

                                                    //Método para buscar por categoria
exports.findByCategory = async (req, res) => {

    try {
        
        const producto = await modelProductos.find({categoria : req.params.categoria})
        .select({Nombre_producto:1 , tipo:1, _id:0});
        
        if(!producto){
            
           return res.status(400).json({ msg : "el producto no existe"});
        }

        else{

            return res.json(producto);
        };

    } catch (error) {
        
        console.log("Error al encontrar datos: " + error);
        res.status(500).send("No se pudo encontrar el producto por categoría");
        
    }
};