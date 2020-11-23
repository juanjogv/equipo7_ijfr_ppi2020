import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import '../styles/Card.css';
import { Link } from 'react-router-dom';

let num = 1;

class Cards extends React.Component {
    state = {
        ranking: []
    }

    componentDidMount() {
        fetch('https://backend-steel-rho.vercel.app/ranking')
            .then(res => res.json())
            .then(res => this.setState({ ranking: res }))
    }

    render() {
        return (
            <div >
                <Row>

                </Row>
                <Row className="d-flex justify-content-center">
                    {this.state.ranking.map(e =>
                        <Card as={Col} xl={3} lg={3} md={4} sm={6} xs={10} style={{ width: '18rem' }} className="card">
                            <Card.Img variant="top" src={e.foto_usuario} />
                            <Card.Body>
                                <Card.Title>{e.nombre_usuario} {e.apellido_usuario}</Card.Title>
                                <Card.Text>
                                    Puesto: {num++} <br />
                                    escaneos: {e.escaneos_usuario}
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