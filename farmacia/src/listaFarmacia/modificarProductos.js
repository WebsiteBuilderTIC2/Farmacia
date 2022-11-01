import React, { useState } from 'react';
import styles from './listaFarmacia.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import datosProductoJson from "./productos.json"
import Table from 'react-bootstrap/Table';

const ModificarProductos = () => 
  {
    const [datosProducto] = useState(datosProductoJson)

    return (
      <div>
          { 
            datosProducto.map(
              (producto)=>{
                return (
                  <li>
                    <lo>{producto.nombre}</lo>
                  </li>
                );
              }
            )
          }
      </div>
    )
  }
;

export default ModificarProductos;
