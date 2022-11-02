import React, { useState } from 'react';
import styles from './listaFarmacia.module.css';
import datosProductoJson from "./productos.json"
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


const ModificarProductos = () => 
  {
    const [datosProducto] = useState(datosProductoJson)

    const [filtro, setFiltro] = useState("Dolex")

    const filtrarJson = (nom) => {
    const resultado = datosProducto.find( product => product.nombre == nom);
    setFiltro(resultado);
    }

    return (
      <>
      <Row>
        <Col xs={3}>
            <div>
            <ListGroup as="ul">
            {
              datosProducto.map((producto, index)=>{
                return (
                  <ListGroup.Item as="li" onClick={function(event){filtrarJson(event.target.innerHTML)}} key={index}>
                    {producto.nombre}  
                  </ListGroup.Item>
                );
                }
                )
              }
            </ListGroup>
            </div>
        </Col>
        <Col>
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={filtro.imgurl} />
                <Card.Body>
                  <Card.Title>{filtro.nombre}</Card.Title>
                  <Card.Text>
                    {filtro.descripcion}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{filtro.precio}</ListGroup.Item>
                  <ListGroup.Item>{filtro.stock}</ListGroup.Item>
                </ListGroup>
                </Card>
            </div>
        </Col>
      </Row>
      </>
    );
    }

export default ModificarProductos;
