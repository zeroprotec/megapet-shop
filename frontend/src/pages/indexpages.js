


import { useState } from "react";
import Menu from "../components/menu";

const IndexPages = () => {

    const [producto, setProducto] = useState([])

    const cargarProductos = () => {
        fetch('http://localhost:4000/producto')
            .then(res => res.json())
            .then(todosProd => setProducto(todosProd));
    }

    cargarProductos();

    return (
        <main>
            <Menu />
            <hr />
            <h1>
                Productos 
            </h1>
            

            {producto.map(cadaProd => {
                return (
                    <div className="contProd">
                    <div className="contObj">
                    <div className="card mb-3" style={{ maxWidth: 540 }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={cadaProd.imagen} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Nombre : {cadaProd.Nombre_producto}</h5>
                                    <h3> $  {cadaProd.Precio_venta}</h3>
                                    <h6> Codigo : {cadaProd._id}</h6>
                                    <h6> Tipo : {cadaProd.tipo}</h6>
                                    <h6> Rut Proveedores : {cadaProd.rut_proveedor}</h6>
                                    <h6> Disponibles : {cadaProd.cantidad}</h6>
                                    <p className="card-text"></p>
                                    <p className="card-text"><small className="text-muted">Imagen tomada de Google.com</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>



                );
            })}

        </main>
    );
}

export default IndexPages;