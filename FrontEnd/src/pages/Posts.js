import React, { Component } from 'react';
import '../index.css';
import NavBar from '../components/NavBar2';
import Post from '../components/Post';
import Publicar from '../components/Publicar';

export default class Posts extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <h2>Publicaciones</h2>
                <Publicar/>
                <Post />
            </div>
        )
    }

}
