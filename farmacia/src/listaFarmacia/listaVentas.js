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

    function sumatoria(){
      let venta = [ ...datosVenta.values()]

      let suma = []
      for(let i = 0; i <= venta.length; i++){
          suma = venta[i].valor + venta[i+1].valor + venta[i+2].valor
          console.log(suma)
          console.log(i)
          return suma
      }
      }

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
      <Table>
        <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>Total</td>
          <td>{sumatoria()}</td>
        </tr>
        </tbody>
      </Table>
      </div>
    )
  }
;


export default ListaVentas;