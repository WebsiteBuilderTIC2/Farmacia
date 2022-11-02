import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import ListaVentas from './listaFarmacia/listaVentas';
import ListaFarmacia from './listaFarmacia/listaFarmacia';
import datosVentasJson from "./listaFarmacia/datos.json"
import datosProductosJson from "./listaFarmacia/productos.json"
import ModificarProductos from './listaFarmacia/modificarProductos';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function App() {

  //if(localStorage.getItem("ventas")==null){
    localStorage.setItem("ventas",JSON.stringify(datosVentasJson))
  //}

  //if(localStorage.getItem("productos")==null){
    localStorage.setItem("productos",JSON.stringify(datosProductosJson))
  //}

  return (
    < >
    <BrowserRouter>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="/productos">Lista productos</Nav.Link>
            <Nav.Link href="/Modificarproductos">Modificar productos</Nav.Link>
            <Nav.Link href="/ventas">Lista ventas</Nav.Link>
          </Nav>
          </Container>
      </Navbar>


      <Routes>
        <Route path='/ventas' element={<ListaVentas/>}/>
        <Route path='/productos' element={<ListaFarmacia/>}/>
        <Route path='/Modificarproductos' element={<ModificarProductos/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
