import React from 'react';
import {Card, ListGroup,ListGroupItem, Button} from 'react-bootstrap';
import ordinario from '../img/ordinarios.png';

export default class Ordinario extends React.Component{
  render(){
    return(
     <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ordinario}/>
        <Card.Body>
          <Card.Title>Ordinario</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Estos residuos son los que por lo general se desechan en los domicilios y se depositan en la caneca verde</ListGroupItem>
          <ListGroupItem>Tambien se pueden catalogar de residuos ordinarios los que son de desecho industrial o de limpieza de areas publicas</ListGroupItem>
        </ListGroup>
          <Button target="_blank" href="http://proyectos.andi.com.co/es/GAI/GuiInv/MedAmb/Paginas/GIRS.aspx" variant="success">Mas Informacion</Button> 
      </Card>
    );
  }
}

