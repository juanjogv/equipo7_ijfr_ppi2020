import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import * as ReactBootStrap from 'react-bootstrap';
import NavBar2 from '../components/NavBar2';
import Plastico from '../components/plastico';
import Papel from '../components/papel';
import Ordinario from '../components/ordinario';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
let prueba = false;
export default class Test extends Component {
    state = {
        result: 'No result'
    }

    componentDidUpdate() {
        if (!prueba) {

            fetch(`https://backend-steel-rho.vercel.app/scanner/${cookies.get('id_usuario')}`)
                .then(res => res.json())
                .then(res => {
                    const num = res[0].escaneos_usuario++;
                    fetch(`https://backend-steel-rho.vercel.app/scanner/ola`, {
                        method: 'POST',
                        body: JSON.stringify({
                            id_usuario: cookies.get('id_usuario'),
                            num: num
                        }
                        ), headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(console.log('hola krnal'))
                    prueba = true;
                })
        }

    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
        }
    }
    handleError = err => {
        console.error(err)
    }
    render() {
        if (this.state.result === 'plastico') {
            return (
                <div>
                    <ReactBootStrap.Container>
                        <ReactBootStrap.Row>
                            <NavBar2 />
                            <ReactBootStrap.Col xs={12} md={6} >
                                <QrReader
                                    delay={300}
                                    onError={this.handleError}
                                    onScan={this.handleScan}
                                    style={{ maxWidth: '500px' }}
                                />
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col className="mt-6 pt-4" xs={12} md={6} >
                                <Plastico />
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                    </ReactBootStrap.Container>
                </div>
            )
        } else if (this.state.result === 'papel') {
            return (
                <div>
                    <ReactBootStrap.Container>
                        <ReactBootStrap.Row>
                            <NavBar2 />
                            <ReactBootStrap.Col xs={12} md={6} >
                                <QrReader
                                    delay={300}
                                    onError={this.handleError}
                                    onScan={this.handleScan}
                                    style={{ maxWidth: '500px' }}
                                />
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col className="mt-6 pt-4" xs={12} md={6} >
                                <Papel />
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                    </ReactBootStrap.Container>
                </div>
            );
        } else if (this.state.result === 'ordinario') {
            return (
                <div>
                    <ReactBootStrap.Container>
                        <ReactBootStrap.Row>
                            <NavBar2 />
                            <ReactBootStrap.Col xs={12} md={6} >
                                <QrReader
                                    delay={300}
                                    onError={this.handleError}
                                    onScan={this.handleScan}
                                    style={{ maxWidth: '500px' }}
                                />
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col className="mt-6 pt-4" xs={12} md={6} >
                                <Ordinario />
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                    </ReactBootStrap.Container>
                </div>
            );
        } else {
            return (
                <div>
                    <ReactBootStrap.Container>
                        <ReactBootStrap.Row>
                            <NavBar2 />
                            <ReactBootStrap.Col xs={12} md={6} >
                                <QrReader
                                    delay={300}
                                    onError={this.handleError}
                                    onScan={this.handleScan}
                                    style={{ maxWidth: '500px' }}
                                />
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col className="mt-6 pt-4" xs={12} md={6} >
                                <h4> Por favor escanear un codigo QR</h4>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                    </ReactBootStrap.Container>
                </div>
            );
        }


    }
}
