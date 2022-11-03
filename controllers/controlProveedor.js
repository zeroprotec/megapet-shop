
// importar el modelo de proveedor
const modelProveedor = require('../models/modelProveedor');

// podemos exportar directamente cada uno de los métodos del CRUD
// CRUD => Create
exports.crear = async (req, res) => {

    try {
        
        let proveedor;

        // Establecer los datos a guardar
        console.log("req.body = " + req.body);
        proveedor = new modelProveedor(req.body);
        console.log("proveedor = " + proveedor);
        // proveedor = new modelProveedor({
        //     id_prov : 13,
        //     nombre_prov : "UIS",
        //     telefono_prov : 6076344000,
        //     direccion_prov : "Cra. 27 Calle 9",
        //     ciudad_prov : "Bucaramanga"
        // });

        // guardamos en la base de datos
        await proveedor.save();

        // respuesta para verificar la variable
        res.send(proveedor);

    } catch (error) {
        // mensaje de error en consola
        console.log("Error Al Guardar Datos: " + error);
        // mensaje de error en la aplicación
        res.status(500).send("Error al guardar el proveedor...");
    }
}


// CRUD => Read
exports.obtener = async (req, res) => {

    try {
        // consultar a la base de datos
        const proveedor = await modelProveedor.find();
        // Lo que retorna de la base de datos 
        // en la variable proveedor, lo convierto a json.
        res.json(proveedor);

    } catch (error) {
        // mensaje de error en consola
        console.log("Error Al Obtener/Leer Datos: " + error);
        // mensaje de error en la aplicación
        res.status(500).send("Error al Obtener/Leer el proveedor...");
    }
}
// CRUD => Read
exports.obtenerPorId = async (req, res) => {

    try {
        // consultar a la base de datos
        // const proveedor = await modelProveedor.find({nombre_prov: req.params.id});
        const proveedor = await modelProveedor.findById(req.params.id);
        // Lo que retorna de la base de datos 
        // en la variable proveedor, lo convierto a json.
        res.json(proveedor);

    } catch (error) {
        // mensaje de error en consola
        console.log("Error Al Obtener/Leer Datos: " + error);
        // mensaje de error en la aplicación
        res.status(500).send("Error al Obtener/Leer el proveedor...");
    }
}


// CRUD => Update
exports.actualizar = async (req, res) => {

    try {

        console.log("req.body : " + req.body);
        
        // validar dato/registro/documento a actualizar
        const proveedor = await modelProveedor.findById(req.params.id);
        
        console.log("proveedor = " + proveedor);

        // validar si no existe el proveedor
        if (!proveedor){
            res.status(404).json({msg: "El proveedor no existe"});
        }
        else {

            // actualiza los datos
            console.log("req.body : " + req.body);
            await modelProveedor.findByIdAndUpdate({_id: req.params.id}, req.body);
            // await modelProveedor.findByIdAndUpdate({_id: req.params.id}, {nombre_prov: "UIS MisiónTIC 2022"});
            // await modelProveedor.findByIdAndUpdate({_id: req.params.id}, {
            //     "id_prov" : 166,
            //     "nombre_prov" : "JAS",
            //     "telefono_prov" : 6076344066,
            //     "direccion_prov" : "Cra. 27 Calle 9",
            //     "ciudad_prov" : "Bucaramanga"
            // });
            // mensaje de confirmación de la actualización
            res.json({mensaje: 'Proveedor actualizado correctamente...'})
        }

    } catch (error) {
        // mensaje de error en consola
        console.log("Error Al Actualizar Datos: " + error);
        // mensaje de error en la aplicación
        res.status(500).send("Error al Actualizar el proveedor...");
    }
}


// CRUD => Delete
exports.eliminar = async (req, res) => {

    try {
        
        // validor dato/registro/documento a eliminar
        const proveedor = await modelProveedor.findById(req.params.id);

        // Validar si el proveedor no existe
        if (!proveedor){
            res.status(404).json({mensaje: 'El proveedor no existe...'})
        }
        else{
            await modelProveedor.findByIdAndRemove({_id: req.params.id});
            res.json({msg: "Proveedor eliminado correctamente..."});
        }

    } catch (error) {
        // mensaje de error en consola
        console.log("Error Al Eliminar Datos: " + error);
        // mensaje de error en la aplicación
        res.status(500).send("Error al Eliminar el proveedor...");
    }
}