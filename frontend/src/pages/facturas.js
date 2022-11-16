


import { useState } from "react";
import Menu from "../components/menu";
const FacturasPages = () => {

    const [factura, setUsuarios] = useState([])

    const cargarFacturas = () => {
        fetch('http://localhost:4000/factura')
            .then(res => res.json())
            .then(todosFacturas => setUsuarios(todosFacturas));
    }

    cargarFacturas();

    return (
        <main>
            <Menu />
            <hr />
            <h1>
                Lista de Facturas
            </h1>
            <br />
            <h2>
            {factura.map(cadaFactura => {
                    return (
                        <div className="contProd">
                        <div className="contObj">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h4 className="card-title"> {cadaFactura._id}</h4>
                                <h6 className="card-subtitle mb-2 text-muted">  tipo : {cadaFactura.tipoCompra}</h6>
                                <h6 className="card-subtitle mb-2 text-muted"> total : {cadaFactura.total}</h6>
                                <p className="card-text"></p>
                                <a href="/users" className="card-link"></a>
                                <a href="/users" className="card-link"></a>
                            </div>
                        </div>
                        </div>
                        </div>

                    );
                })} 
            </h2>
            <hr /><br />

        </main>
    );
}


export default FacturasPages;