import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import '../index.css';
import logo from '../img/r3ai_logo.png';


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <ReactBootStrap.Navbar bg="light" expand="lg" className='color-nav navbar navbar-expand-lg navbar-dark bg-dark fixed-top' bg="dark" variant="dark" >
                    <ReactBootStrap.Navbar.Brand href="#home"><img src={logo} alt="logo" width="45px" /></ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                        <ReactBootStrap.Nav className="mr-auto">
                            <ReactBootStrap.Nav.Link href='/'>Home</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href='/mensualidades'>Project</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href='/posts'>Team</ReactBootStrap.Nav.Link>
                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav>
                            <ReactBootStrap.Nav.Link href='/login'>Log In</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href='/signin'>Sign In</ReactBootStrap.Nav.Link>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </div>
        )
    }
}