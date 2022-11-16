



import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <ul class="nav nav-pills">
            <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/producto">Productos</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/users">Usuarios</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/factura">Facturas</Link>
            </li>
        </ul>

        // <ul className="nav justify-content-end">
        //     <li className="nav-item">
        //         {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        //         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        //     </li>
        //     <li className="nav-item">
        //         <a className="nav-link" href="/producto">Productos</a>
        //     </li>
        //     <li className="nav-item">
        //         <a className="nav-link" href="/users">Usuarios</a>
        //     </li>
        //     <li className="nav-item">
        //     <a className="nav-link" href="/factura">Facturas</a>
        //     </li>
        // </ul>


    );
}

export default Menu;