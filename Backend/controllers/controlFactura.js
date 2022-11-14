const modelFactura = require('../models/modelFactura');
const modelUsuarios = require('../models/modelUsuario');
const modelProductos = require('../models/modelProducto');
const { model } = require('mongoose');

//------------------------------------- métodos para crear facturas -----------------------------------------------------

 exports.crear =  async (req, res) => {


    try {
        
        let factura
        factura = new modelFactura(req.body);
        

        const user = await modelUsuarios.findById(factura.idUsuario);
        user.facturas.push(factura._id);
        await user.save()

        let total =  0;

        for (let  i = 0; i < factura.productos.length ; i++){

            const producto =  await modelProductos.findById(factura.productos[i].id_Producto);

            factura.productos[i].precioU = producto.precio.venta;


            let subTotal = producto.precio.venta * factura.productos[i].cantidad;
            total = total + subTotal;

            await modelProductos.findByIdAndUpdate(factura.productos[i].id_Producto,{cantidad : producto.cantidad - factura.productos[i].cantidad });
        };

        
        factura.total = total;
        
        const facturaSaved = await factura.save();
        return res.send(facturaSaved);

    } catch (error) {

        console.log("Error al gurdar datos: " + error);
        return res.status(500).send("Error al guardar el producto");

    };

 };

 //------------------------------------------------ Métodos para consultar -------------------------------------------------
//todas las facturas
exports.consultar = async(req, res) => {

    try {
        
        let factura = await modelFactura.find()
        .populate('idUsuario', '-_id nombre cedula')
        .populate( 'productos.id_Producto', 'nombre categoria Precio_venta -_id').select('-productos._id');

        return res.json(factura);

    } catch (error) {
        
        console.log("Error al gurdar datos: " + error);
        return res.status(500).send("Error al consultar la BD")

    }
};


//Buscar por ID
exports.consultarByID = async(req, res) => {

    try {
        
        let factura = await modelFactura.findById(req.params.id)
        .populate('idUsuario', '-_id nombre cedula')
        .populate( 'productos.id_Producto', 'Nombre_producto categoria Precio_venta -_id').select('-productos._id');
        if(!factura){
            
            return res.status(400).json({ msg : "La factura no existe"});
         }
         else{
            return res.json(factura);
         }
 

        

    } catch (error) {
        
        console.log("Error al gurdar datos: " + error);
        return res.status(500).send("Error al consultar la BD")

    }
    
};

//--------------------------------- Método para eliminar  -------------------------------------
exports.eliminar = async (req, res) => {

    try {
        
        const facturaRemove= await modelFactura.findByIdAndRemove(req.params.id);
        if(!facturaRemove){
            
            return res.status(400).json({ msg : "la factura no existe"});
        }

        else{
            
                const usuario = await modelUsuarios.findById(facturaRemove.idUsuario);
                for (factura in usuario.facturas){
                    if( factura == facturaRemove.id){
                        delete factura;
                    }

                }
            
                return res.json( facturaRemove) ;
        };

    } catch (error) {
        
        console.log("Error al eliminar datos: " + error);
        res.status(500).send("No se pudo eliminar la factura");
    };
};    

//--------------------------------------------------------------Método para actualizar -----------------------------------------------------------
exports.actualizar = async (req, res) => {

    try {
        
        const factura = await modelFactura.findById(req.params.id);        
        if (!factura){
            return res.status(400).json({ msg : "El usuario no existe " });
        }
        else{

            await modelFactura.findByIdAndUpdate( req.params.id , req.body, {new : true})
            .then(result => {
               
                return res.json( result) ;

            });
            
        };


    } catch (error) {
        console.log("Error al actualizar datos: " + error);
        res.status(500).send("No se pudo actualizar el usuario");
    };
};
