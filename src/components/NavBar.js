import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import '../index.css';
import logo from '../img/r3ai_logo.png';




export default class NavBar extends Component {



    render() {
        const Style = {
            background: 'black !important',
        }
        return (
            <div>
                <ReactBootStrap.Navbar className='color-nav navbar navbar-expand-lg navbar-dark bg-dark fixed-top' style={Style} bg="dark" variant="dark"  >
                    <ReactBootStrap.Navbar.Brand href="#home"><img src={logo} alt="logo" width="45px" /></ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link href='/'>Home</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href='/mensualidades'>Project</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href='/posts'>Team</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Form inline>
                        <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <ReactBootStrap.Button variant="outline-light">Search</ReactBootStrap.Button>
                    </ReactBootStrap.Form>
                </ReactBootStrap.Navbar>
            </div>
        )
    }
}