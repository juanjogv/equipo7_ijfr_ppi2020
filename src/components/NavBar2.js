import React, { Component } from 'react';
import logo from '../img/r3ai_logo.png';
import * as ReactBootStrap from 'react-bootstrap';
import camara from '../img/NavBar2/camara.png';
import competencia from '../img/NavBar2/competencia.png';
import user from '../img/NavBar2/user.png';
import logout from '../img/NavBar2/logout.png';

export default class NavBar2 extends Component {
    render() {
        return (
            <div>
                <ReactBootStrap.Navbar bg="light" expand="lg" className='color-nav navbar navbar-expand-lg navbar-dark bg-dark fixed-top' bg="dark" variant="dark" >
                    <ReactBootStrap.Navbar.Brand href="#home"><img src={logo} alt="logo" width="45px" /></ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                        <ReactBootStrap.Nav className="mr-auto">
                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav className="mr-auto">
                            <ReactBootStrap.Nav.Link href='/' className="mr-5 ml-5"><img src={user} alt="logo" width="45px" /></ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href='/' className="mr-5 ml-5"><img src={camara} alt="logo" width="45px" /></ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href='/' className="mr-5 ml-5"><img src={competencia} alt="logo" width="45px" /></ReactBootStrap.Nav.Link>

                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav>
                            <ReactBootStrap.Nav.Link href='/' className=""><img src={logout} alt="logo" width="45px" /></ReactBootStrap.Nav.Link>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </div>
        );
    }
}