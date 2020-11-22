import React from 'react';
import {Card, ListGroup,ListGroupItem, Button} from 'react-bootstrap';
import Plasticos from '../img/plasticos.png';

export default class Plastico extends React.Component{
  render(){
    return(
     <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Plasticos}/>
        <Card.Body>
          <Card.Title>Plastico</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Este residuo se deposita en la caneca azul</ListGroupItem>
          <ListGroupItem>Un producto de platico puede durar miles de años antes de degradarse</ListGroupItem>
        </ListGroup>
        <Button target="_blank" href="https://www.elespanol.com/como/reciclar-plastico-casa-forma-correcta-sencilla/470703907_0.html#:~:text=En%20la%20actualidad%2C%20la%20manera,un%20centro%20de%20reciclaje%20especializado." variant="primary">Mas Informacion</Button> 
      </Card>
    );
  }
}

