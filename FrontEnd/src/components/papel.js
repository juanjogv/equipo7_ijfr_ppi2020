import React from 'react';
import {Card, ListGroup,ListGroupItem, Button} from 'react-bootstrap';
import papel from '../img/papel.png'

export default class Papel extends React.Component{
  render(){
    return(
     <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={papel}/>
        <Card.Body>
          <Card.Title>Papel y carton</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Estos se depositan en la caneca gris</ListGroupItem>
          <ListGroupItem>Estos residuos se degrada de 1 a 6 meses</ListGroupItem>
        </ListGroup>
          <Button target="_blank" href="https://www.ecologiaverde.com/como-reciclar-papel-en-casa-paso-a-paso-1285.html" variant="secondary">Mas Informacion</Button> 
      </Card>
    );
  }
}

