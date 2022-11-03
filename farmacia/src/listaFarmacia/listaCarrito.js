import React, { useState } from 'react';
import styles from './listaVentas.module.css';
import datosCarritoJson from "./carrito.json"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

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
                    <td>2</td>
                    <td>{carrito.nombre}</td>
                    <td>{carrito.precio}</td>
                    <td>{carrito.precio*2}</td>
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
      <button>Finalizar compra</button>
      <button>Cancelar</button>
      </div>
      
    )
  }
;


export default ListaCarrito;