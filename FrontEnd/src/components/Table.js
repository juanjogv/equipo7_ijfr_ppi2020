import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import '../styles/Card.css';
import ranking from '../sample/ranking.json';
import { Link } from 'react-router-dom';

class Cards extends React.Component {
    state = {
        ranking: ranking
    }
    render() {
        return (
            <div >
                <Row>

                </Row>
                <Row className="d-flex justify-content-center">
                    {this.state.ranking.map(e =>
                        <Card as={Col} xl={3} lg={3} md={4} sm={6} xs={10} style={{ width: '18rem' }} className="card">
                            <Card.Img variant="top" src={e.img} />
                            <Card.Body>
                                <Card.Title>{e.name}</Card.Title>
                                <Card.Text>
                                    puntaje: {e.puesto}
                                </Card.Text>
                                <Link to="/profile">
                                    <Button variant="primary">Ver</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    )}
                </Row>
            </div>

        );
    }
}

export default Cards;