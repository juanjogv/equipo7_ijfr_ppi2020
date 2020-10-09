import React, { Component } from 'react';
import Navbar2 from '../components/NavBar2';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//images
import Profile_bgUp from '../img/profile_bgUp.jpg';
import Profile_pp from '../img/profile_pp.jpg';

export default class Profile extends Component {

    render() {

        const images = {
            width:'100%',
            height:'100px'
        }

        return (
            <div>
                <Navbar2 />
                <div style={{height:'67px'}}/>
                <Row>
                    <Col lg={2} xs={12}/>
                    <Col id="contenedorImages" className="mt-4" lg={8} xs={12}>
                        <div style={{images}} style={{position:'absolute', zIndex:'-1'}}>
                            <img src={Profile_bgUp} style={{width:'100%', height:'180px'}} alt="bgUp"/>
                        </div>
                        <div>
                            <img src={Profile_pp} style={{width:'180px', borderRadius:'50%', border:'3px solid white', marginTop:'90px'}}alt="pp"/>
                            <h3>Juan Rivera</h3>
                        </div>
                    </Col>
                    <Col lg={2} xs={12}/>
                </Row>
                <div className="mt-5">
                    <Row>
                        <Col lg={4} md={3} xs={12}/>
                        <Col lg={4} md={6} xs={12}>
                            <Link to="/">
                                <Button variant="" type="submit" style={{background:'#00b33e', width:'100%'}}>
                                    <strong>
                                    <svg 
                                        width="1em" 
                                        height="1em" 
                                        viewBox="0 0 16 16" 
                                        className="bi bi-bookmark-plus mr-2" 
                                        fill="currentColor" 
                                        xmlns="http://www.w3.org/2000/svg">

                                        <path 
                                            fillRule="evenodd" 
                                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                        <path 
                                            fillRule="evenodd" 
                                            d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                    Escanear
                                    </strong>
                                </Button>
                            </Link>
                        </Col>
                        <Col lg={4} md={3} xs={12}/>
                    </Row>
                </div>
                <div className="mt-5">
                    <Row>
                        <Col lg={5} md={4} xs={12}/>
                        <Col lg={2} md={4} xs={12}>
                            <div className="p-1" style={{background:'#00b33e', width:'100%', borderRadius:'5px'}}>
                                <strong>
                                    Escaneos: 15
                                </strong>
                            </div>
                        </Col>
                        <Col lg={5} md={4} xs={12}/>
                    </Row>
                </div>
            </div>
        )
    }
}


