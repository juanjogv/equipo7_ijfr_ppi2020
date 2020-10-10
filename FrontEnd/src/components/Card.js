import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import '../styles/Card.css';
import ranking from '../sample/ranking.json';

class Cards extends React.Component {
    state = {
        ranking: ranking
    }
    render() {
        return (
            <div >
                <Row ClassName="d-flex justify-content-center">
                    {this.state.ranking.map(e =>
                        <Card as={Col} xl={3} lg={3} md={4} sm={6} xs={10} style={{ width: '18rem' }} className="card">
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{e.nombre}</Card.Title>
                                <Card.Text>
                                    puntaje: {e.puntaje}
                                </Card.Text>
                                <Button variant="primary">Ver</Button>
                            </Card.Body>
                        </Card>
                    )}
                </Row>
            </div>

        );
    }
}

export default Cards;