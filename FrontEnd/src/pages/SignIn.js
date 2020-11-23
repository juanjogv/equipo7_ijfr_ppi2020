import React, { useState, useEffect } from "react";
import * as ReactBootStrap from 'react-bootstrap';
import logo from '../img/r3ai_logo.png';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function SignUp() {

    const history = useHistory();
    const StyleForm = {
        position: 'absolute',
        backgroundColor: 'rgb(240, 242, 245)',
        width: '100%',
        height: '100%'
    }

    useEffect(() => {
        if (cookies.get('email_usuario')) {
            window.location.href = "../profile"
        }
    })

    const [nombre_usuario, setNombre_usuario] = useState("");
    const [contrasena_usuario, setContrasena_usuario] = useState("");
    const [apellido_usuario, setApellido_usuario] = useState("");
    const [email_usuario, setEmail_usuario] = useState("");

    const callAPI = () => {
        fetch(`https://backend-steel-rho.vercel.app/signin/${email_usuario}`)
            .then(res => res.json())
            .then(res => {
                if (res.boolean) {
                    fetch('https://backend-steel-rho.vercel.app/signin', {
                        method: 'POST',
                        body: JSON.stringify({
                            nombre_usuario: nombre_usuario,
                            contrasena_usuario: contrasena_usuario,
                            apellido_usuario: apellido_usuario,
                            email_usuario: email_usuario
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    cookies.set('nombre_usuario', nombre_usuario, { path: "/" })
                    cookies.set('apellido_usuario', apellido_usuario, { path: "/" })
                    cookies.set('email_usuario', email_usuario, { path: "/" })
                    history.push("/profile")
                    window.alert('Usuario Creado')
                } else {
                    window.alert('El correo ya esta registrado')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onCreate = () => {
        callAPI();
    }

    return (
        <div>
            <ReactBootStrap.Row></ReactBootStrap.Row>
            <ReactBootStrap.Row style={StyleForm} className='d-flex align-items-center justify-content-center' >
                <ReactBootStrap.Col md={2} xs={12}></ReactBootStrap.Col>
                <ReactBootStrap.Col md={3} xs={12}>
                    <ReactBootStrap.Image src={logo} width="90%" fluid />
                    <h1>R3AI</h1>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col md={{ span: 5, offset: 0 }} xs={12} style={{ boxShadow: '1px 3px 3px 3px rgba(0, 0, 0, 0.1)', borderRadius: '3%', backgroundColor: 'rgb(255, 255, 255)', paddingBottom: '2%' }}>
                    <ReactBootStrap.Form >
                        <ReactBootStrap.Form.Label><h1>Registrarse</h1></ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Group controlId="formBasicEmail">
                            <ReactBootStrap.Form.Label>Nombre</ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control
                                type="text"
                                placeholder="Ingresa tu nombre"
                                name="nombre_usuario"
                                onChange={e => setNombre_usuario(e.target.value)}
                                value={nombre_usuario} />
                            <ReactBootStrap.Form.Text className="text-muted">
                            </ReactBootStrap.Form.Text>
                        </ReactBootStrap.Form.Group>
                        <ReactBootStrap.Form.Group controlId="formBasicEmail">
                            <ReactBootStrap.Form.Label>Apellido</ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="text" placeholder="Ingresa tu apellido" name="apellido_usuario" onChange={e => setApellido_usuario(e.target.value)} value={apellido_usuario} />
                            <ReactBootStrap.Form.Text className="text-muted">
                            </ReactBootStrap.Form.Text>
                        </ReactBootStrap.Form.Group>
                        <ReactBootStrap.Form.Group controlId="formBasicEmail">
                            <ReactBootStrap.Form.Label>Email</ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="email" placeholder="Ingresa tu correo" name="email_usuario" onChange={e => setEmail_usuario(e.target.value)} value={email_usuario} />
                            <ReactBootStrap.Form.Text className="text-muted">
                            </ReactBootStrap.Form.Text>
                        </ReactBootStrap.Form.Group>
                        <ReactBootStrap.Form.Group controlId="formBasicPassword">
                            <ReactBootStrap.Form.Label>Contraseña</ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="password" placeholder="Contraseña" name="contrasena_usuario" onChange={e => setContrasena_usuario(e.target.value)} value={contrasena_usuario} />
                        </ReactBootStrap.Form.Group>
                        <ReactBootStrap.Form.Group>
                            <ReactBootStrap.Button href='/login' variant="success" type="submit" className='px-4' >
                                Inicar sesión
                                    </ReactBootStrap.Button>
                        </ReactBootStrap.Form.Group>
                        <ReactBootStrap.Form.Group>
                            <ReactBootStrap.Button variant="success" onClick={onCreate}>
                                Crear una cuenta
                                    </ReactBootStrap.Button>
                        </ReactBootStrap.Form.Group>
                    </ReactBootStrap.Form>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col md={2} xs={12}></ReactBootStrap.Col>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row></ReactBootStrap.Row>
        </div>
    );
}