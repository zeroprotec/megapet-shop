<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
//import logo from './logo.svg';
import ProductosPages from './pages/productos';
import UsuariosPages from './pages/usuarios';
import IndexPages from './pages/indexpages';
import FacturasPages from './pages/facturas';
import './App.css';
import {Routes, Route} from 'react-router-dom';
>>>>>>> 995ae5bd732e89311852b0c62a8d2e7286eb8dde

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
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
>>>>>>> 995ae5bd732e89311852b0c62a8d2e7286eb8dde
    </div>
  );
}

export default App;
