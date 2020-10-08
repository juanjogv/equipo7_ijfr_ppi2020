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
                <NavBar2 />
                <ReactBootStrap.Container>
                    <QrReader
                        delay={300}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ maxWidth: '500px' }}
                    />
                    <p>{this.state.result}</p>
                </ReactBootStrap.Container>
            </div>
        )
    }
}