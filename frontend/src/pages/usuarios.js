


import { useState } from "react";
import Menu from "../components/menu";


const UsuariosPages = () => {

    const [users, setUsuarios] = useState([])

    const cargarUsuarios = () => {
        fetch('http://localhost:4000/users')
            .then(res => res.json())
            .then(todosUsers => setUsuarios(todosUsers));
    }

    cargarUsuarios();


    return (
        <main>
            <Menu />
            <hr />
            <h1>
                Lista de Usuarios
            </h1>
            <hr />
            <div className="contProd">
            <h2>
                {users.map(cadaUsers => {
                    return (
                        
                        <div className="contProd2">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h4 className="card-title"> {cadaUsers.nombre}</h4>
                                <h6 className="card-subtitle mb-2 text-muted"> CC : {cadaUsers.cedula}</h6>
                                <p className="card-text"></p>
                                <a href="/users" className="card-link"></a>
                                <a href="/users" className="card-link"></a>
                            </div>
                        </div>
                        </div>
                        

                    );
                })} 
            </h2>
            <hr /><br />
            </div>
        </main>
        
    );
}
export default UsuariosPages;