import React, { Component } from "react";
import * as ReactBootStrap from 'react-bootstrap';
import logo from '../img/r3ai_logo.png';
export default class Login extends Component {

    StyleForm() {
        return {

            position: 'absolute',
            backgroundColor: 'rgb(240, 242, 245)',
            width: '100%',
            height: '100%'
        }
    }


    render() {
        return (
            <div>
                <div>
                    <ReactBootStrap.Row></ReactBootStrap.Row>
                    <ReactBootStrap.Row style={this.StyleForm()} className='d-flex align-items-center justify-content-center' >
                        <ReactBootStrap.Col md={2} xs={12}></ReactBootStrap.Col>
                        <ReactBootStrap.Col md={3} xs={12}>
                            <ReactBootStrap.Image src={logo} width="90%" fluid />
                            <h1>R3AI</h1>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md={{ span: 5, offset: 0 }} xs={12} style={{ boxShadow: '1px 3px 3px 3px rgba(0, 0, 0, 0.1)', borderRadius: '3%', backgroundColor: 'rgb(255, 255, 255)', paddingBottom: '2%' }}>
                            <ReactBootStrap.Form >
                                <ReactBootStrap.Form.Label><h1>Iniciar sesión</h1></ReactBootStrap.Form.Label>
                                <ReactBootStrap.Form.Group controlId="formBasicEmail">
                                    <ReactBootStrap.Form.Control type="email" placeholder="Enter email" />
                                    <ReactBootStrap.Form.Label></ReactBootStrap.Form.Label>
                                    <ReactBootStrap.Form.Control type="password" placeholder="Password" />
                                </ReactBootStrap.Form.Group>
                                <ReactBootStrap.Form.Group controlId="formBasicCheckbox">
                                    <ReactBootStrap.Form.Check type="checkbox" label="Check me out" />
                                </ReactBootStrap.Form.Group>
                                <ReactBootStrap.Button variant="primary" type="submit">
                                    Submit
                                    </ReactBootStrap.Button>
                            </ReactBootStrap.Form>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md={2} xs={12}></ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                    <ReactBootStrap.Row></ReactBootStrap.Row>

                </div>
            </div >
        );
    }
}