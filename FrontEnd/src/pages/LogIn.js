import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';
import logo from '../img/r3ai_logo.png';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function Login() {

    const StyleForm = {
        position: 'absolute',
        backgroundColor: 'rgb(240, 242, 245)',
        width: '100%',
        height: '100%'
    }



    const [contrasena_usuario, setContrasena_usuario] = useState("");
    const [email_usuario, setEmail_usuario] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (cookies.get('usuario')) {
            history.push("/inicio")
        }
    })

    const callAPI = e => {
        fetch(`http://localhost:4000/login/${email_usuario}`)
            .then(res => res.json())
            .then(res => {

                if (res[0].contrasena_usuario === contrasena_usuario) {
                    history.push("/profile")
                } else {
                    window.alert('Contraseña invalida')
                }
            }, (error) => {
                console.log(error)
            }
            ).catch(error => console.log(error))
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
                        <ReactBootStrap.Form.Label><h1>Iniciar sesión</h1></ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Group controlId="formBasicEmail">
                            <ReactBootStrap.Form.Control type="email" placeholder="Ingresa tu correo" name="email_usuario" onChange={e => setEmail_usuario(e.target.value)} value={email_usuario} />
                            <ReactBootStrap.Form.Label></ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="password" placeholder="Contraseña" name="contrasena_usuario" onChange={e => setContrasena_usuario(e.target.value)} value={contrasena_usuario} />
                        </ReactBootStrap.Form.Group>
                        <ReactBootStrap.Form.Group>
                            <ReactBootStrap.Button variant="success" onClick={onCreate} className='px-4'>
                                Inicar sesión
                                    </ReactBootStrap.Button>
                        </ReactBootStrap.Form.Group>
                        <ReactBootStrap.Form.Group>
                            <ReactBootStrap.Button href='/signin' variant="success" type="submit">
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
