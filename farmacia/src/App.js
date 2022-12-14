import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import ListaVentas from './listaFarmacia/listaVentas';
import ListaFarmacia from './listaFarmacia/listaFarmacia';
import ListaCarrito from './listaFarmacia/listaCarrito';
import ListaCompras from './listaFarmacia/listaCompras';
import ModificarProductos from './listaFarmacia/modificarProductos';
import datosVentasJson from "./listaFarmacia/datos.json"
import datosProductosJson from "./listaFarmacia/productos.json"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function App() {

  //if(localStorage.getItem("ventas")==null){
    localStorage.setItem("ventas",JSON.stringify(datosVentasJson))
  //}

  //if(localStorage.getItem("productos")==null){
    localStorage.setItem("productos",JSON.stringify(datosProductosJson))
  //}

  return (
    <>
    <div>
    <Button variant="primary" type="submit" href="/productos">
        Administrador
    </Button>
    <Button variant="primary" type="submit" href="/compras">
        Cliente
    </Button>
    </div>
    <div>
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

    </div>
    <div>
    <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="me-auto">
              <Nav.Link href="/compras">Lista productos</Nav.Link>
              <Nav.Link href="/carrito">Carrito</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
  
  
        <Routes>
          <Route path='/compras' element={<ListaCompras/>}/>
          <Route path='/carrito' element={<ListaCarrito/>}/>
        </Routes>
      </BrowserRouter>
      </div>
      </>
      );
}

export default App;
