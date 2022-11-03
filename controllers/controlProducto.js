
// importamos el modelo del producto
const modelProducto = require('../models/modelProducto');

// CRUD => Create
exports.crear = async (req, res) => {

    try {
        
        // obtener los datos
        let producto = new modelProducto(req.body);
        // guardar en la base de dotos
        await producto.save();

        // repuesta de verificación
        res.send(producto);

    } catch (error) {
        console.log("Error Guardando Datos: " + error);
        res.status(500).send("Error al Guardar el Producto");
    }
}

// CRUD => Read
exports.obtener = async (req, res) => {

    try {
        
        // consultar en la base de datos
        const producto = await modelProducto.find();
        // el retorno convertir a json
        res.json(producto);

    } catch (error) {
        console.log("Error Obteniendo/Leyendo Datos: " + error);
        res.status(500).send("Error al Obteniendo/Leyendo el Producto");
    }
}

exports.obtenerPorId = async (req, res) => {

    try {
        
        // validar si existe el documento
        console.log("req.params.id : " + req.params.id);
        const producto = await modelProducto.findById(req.params.id);

        // verificar que exista el producto
        if (!producto){
            res.status(404).json({mgs: "El Producto No Existe..."});
        }
        else {
            // consultar en la base de datos
            const producto = await modelProducto.findById(req.params.id);
            // el retorno convertir a json
            res.json(producto);
        }
        

    } catch (error) {
        console.log("Error Obteniendo/Leyendo Datos: " + error);
        res.status(500).send("Error al Obteniendo/Leyendo el Producto");
    }
}


// CRUD => Update
exports.actualizar = async (req, res) => {

    try {
        
        // validar si existe el documento
        const producto = await modelProducto.findById(req.params.id);

        // verificar que exista el producto
        if (!producto){
            res.status(404).json({mgs: "El Producto No Existe..."});
        }
        else {
            await modelProducto.findByIdAndUpdate({_id: req.params.id}, req.body);
            // mensaje de confirmación
            res.json({mgs: "Producto Actualizado Correctamente..."})

        }

    } catch (error) {
        console.log("Error Actualizar Datos: " + error);
        res.status(500).send("Error al Actualizar el Producto");
    }
}


// Delete
exports.eliminar = async (req, res) => {

    try {
        
        // validar si existe el documento
        const producto = await modelProducto.findById(req.params.id);
        console.log('Producto Eliminar : ' + producto);

        // verificar que existe el producto
        if (!producto){
            res.status(404).json({mgs: "El Producto No Existe..."});
        }
        else {
            // sentencia para eliminar productos
            await modelProducto.findByIdAndRemove({_id: req.params.id});
            // mensaje de confirmación
            res.json({mgs: "Producto Eliminado Correctamente..."});
        }

    } catch (error) {
        console.log("Error Eliminar Datos: " + error);
        res.status(500).send("Error al Eliminar el Producto");
    }
}