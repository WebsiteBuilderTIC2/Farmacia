import React, { useState } from 'react';
import styles from './listaVentas.module.css';
import datosVentaJson from "./datos.json"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
const ListaVentas = () => 
  {
    const [datosVenta] = useState(datosVentaJson)


    /* const valores = datosVenta.map((venta)=>{
      for (let i = 0; i < datosVenta.map.length; i++){
      let valor= venta.valor
      console.log(valor)
      console.log(datosVenta.length)
      return valor
    }
    }) */

    return (
      <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>idVenta</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
        
          { 
            datosVenta.map(
              (venta)=>{
                return(
                  <tr>
                    <td>{venta.fecha}</td>
                    <td>{venta.idventa}</td>
                    <td>{venta.valor}</td>
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


export default ListaVentas;