import React, { Component } from 'react';
import '../styles/Post.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class Post extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        fetch(`https://backend-steel-rho.vercel.app/posts/${cookies.get('id_usuario')}`)
            .then(res => res.json())
            .then(res => this.setState({ posts: res }));
    }


    render() {
        return (
            <div>
                <h1 className="publicaciones"></h1>
                {
                    this.state.posts.map(post => {
                        return <div className="contenedor" key={post.id_publicacion}>
                            <div className="caja">
                                <h1>{post.titulo_publicacion}</h1>
                                <p>{post.body_publicacion}</p>
                                <div className="imagen">
                                    <img src={post.img_publicacion} alt={post.id_publicacion} className="img-fluid" ></img>
                                </div>
                            </div>
                            <div className="comentario">
                                <div className="Form">
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Enter your commentary" />
                                        </Form.Group>
                                        <Button variant="success" type="submit">
                                            comment
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}