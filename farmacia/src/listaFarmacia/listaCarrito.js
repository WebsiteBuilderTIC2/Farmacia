import React, { useState } from 'react';
import './listaFarmacia.module.css';
import datosCarritoJson from "./carrito.json"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const ListaCarrito = () => 
  {
    const [datosCarrito] = useState(datosCarritoJson)

    return (
      <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Cantidad</th>
            <th>Producto</th>
            <th>Valor</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
        
          { 
            datosCarrito.map(
              (carrito)=>{
                return(
                  <tr>
                    <td><img src={carrito.imgurl}></img></td>
                    <td>{carrito.cantidad}</td>
                    <td>{carrito.nombre}</td>
                    <td>{carrito.precio}</td>
                    <td>{carrito.precio*carrito.cantidad}</td>
                  </tr>
                );
              }
            )
          }
           <tr>
            <td>
            </td>  
          </tr> 
        </tbody>
      </Table>
        <div class="Botones">
          <ButtonGroup>
            <Button variant="info">Finalizar compra</Button>
            <Button variant="danger">Cancelar</Button>
          </ButtonGroup>
        </div>
      </div>
      
    )
  }
;


export default ListaCarrito;