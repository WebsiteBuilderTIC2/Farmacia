import React, { useState } from 'react';
import styles from './listaFarmacia.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import datosProductoJson from "./productos.json"
import Table from 'react-bootstrap/Table';

const ListaFarmacia = () => 
  {
    const [datosProducto] = useState(datosProductoJson)

    return (
      <div>
      <Table striped bordered hover>

        
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Precio Und</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
        
          { 
            datosProducto.map(
              (producto)=>{
                return(
                  <tr>
                    <td>{producto.nombre}</td>
                    <img src={producto.imgurl}></img>
                    <td>{producto.precio}</td>
                    <td>{producto.stock}</td>
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
      </div>
    )
  }
;

export default ListaFarmacia;
