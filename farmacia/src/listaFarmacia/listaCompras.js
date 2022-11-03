import React, { useState } from 'react';
import styles from './listaFarmacia.module.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import datosComprasJson from "./carrito.json"

const ListaCompras = () => 
  {
    const [datosCompras] = useState(datosComprasJson)

    return (
      <div>
        <Row>
          { 
            datosCompras.map(
              (producto)=>{
                return(
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.imgurl} />
                <ListGroup className="list-group-flush">
                  <ListGroup.Item><h2>{producto.nombre}</h2></ListGroup.Item>
                  <ListGroup.Item><p>$ {producto.precio}</p></ListGroup.Item>
                  <ListGroup.Item><p>stock: {producto.stock}</p></ListGroup.Item>
                  <ListGroup.Item><button>Comprar</button></ListGroup.Item>
                </ListGroup>
                </Card>
                );
              }
            )
          }
        </Row>
      </div>
    )
  }
;

export default ListaCompras;
