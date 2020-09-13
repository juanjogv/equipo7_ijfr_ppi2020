import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';




export default class NavBar extends Component {
    render() {
        return (
            <div>
                <ReactBootStrap.Navbar bg="primary" variant="dark"  >
                    <ReactBootStrap.Navbar.Brand href="#home"></ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link href='/'>Tareas</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href='/mensualidades'>Mensualidad</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href='/posts'>Posts</ReactBootStrap.Nav.Link>
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