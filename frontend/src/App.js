//import logo from './logo.svg';
import ProductosPages from './pages/productos';
import UsuariosPages from './pages/usuarios';
import IndexPages from './pages/indexpages';
import FacturasPages from './pages/facturas';
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header >
      <img width="600px" src="https://mascotasbichos.vtexassets.com/assets/vtex.file-manager-graphql/images/bf33e587-8032-486c-ace9-7592fb559ed3___ae0fc26e750baf67036da5946ca23ed6.png" alt="logo" />
      </header>
      <div>
        <Routes>
          <Route path='/' element={<IndexPages />} />
          <Route path='/producto' element={<ProductosPages />} />
          <Route path='/users' element={<UsuariosPages />} />
          <Route path='/factura' element={<FacturasPages />} />
        </Routes>


      </div>
    </div>
  );
}

export default App;

