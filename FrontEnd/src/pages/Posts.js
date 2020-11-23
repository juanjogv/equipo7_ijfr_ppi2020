import React, { Component } from 'react';
import '../index.css';
import NavBar from '../components/NavBar2';
import Post from '../components/Post';
import Publicar from '../components/Publicar';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class Posts extends Component {

    componentDidMount() {
        if (!cookies.get('email_usuario')) {
            window.alert('Necesita iniciar sesion para usar esta función')
            window.location.href = "../login"
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <h2>Publicaciones</h2>
                <Post />
            </div>
        )
    }

}
