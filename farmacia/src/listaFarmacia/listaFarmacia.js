import React, { useState } from 'react';
import styles from './listaFarmacia.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import datosProductoJson from "./productos.json"
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';

const ListaFarmacia = () => {
  const [datosProducto] = useState(datosProductoJson)

  return (
    <div>
      <Row>
        {
          datosProducto.map(
            (producto) => {
              return (
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={producto.imgurl} />
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item><h2>{producto.nombre}</h2></ListGroup.Item>
                    <ListGroup.Item><p>$ {producto.precio}</p></ListGroup.Item>
                    <ListGroup.Item><p>stock: {producto.stock}</p></ListGroup.Item>
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

export default ListaFarmacia;
