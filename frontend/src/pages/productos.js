


import Menu from "../components/menu";


let anchoImg = "300px"
const ProductosPages = () => {

    return (
        <main>
            <Menu />
            <hr />
            <h1>
                Lista de Productos
            </h1>
            <img width={anchoImg} alt="Imagen No disponible" src="https://mascotasbichos.vtexassets.com/assets/vtex.file-manager-graphql/images/bf33e587-8032-486c-ace9-7592fb559ed3___ae0fc26e750baf67036da5946ca23ed6.png" />
            <br />
            <a href="./producto">Ver Productos</a>
            <br /> <br />
            <br /> <br />
        </main>
    );
}


export default ProductosPages;