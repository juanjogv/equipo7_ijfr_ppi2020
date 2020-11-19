import React, { Component } from 'react';
import posts from '../sample/MOCK_DATA.json';
import '../styles/Post.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default class Post extends Component {

    state = {
        posts: posts,
    }

    render() {
        return (
            <div>
                <h1 className="publicaciones">Publicaciones</h1>
                {
                    this.state.posts.map(post => {
                        return <div className="contenedor" key={post.id}>
                            <div className="caja">
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                                <div className="imagen">
                                    <img src={post.url} alt={post.imageId} className="img-fluid" ></img>
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