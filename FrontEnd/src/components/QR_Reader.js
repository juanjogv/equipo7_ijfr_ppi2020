import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import * as ReactBootStrap from 'react-bootstrap';
import NavBar2 from '../components/NavBar2';

export default class Test extends Component {
    state = {
        result: 'No result'
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
                            <p>{this.state.result}</p>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Container>
            </div>
        )
    }
}