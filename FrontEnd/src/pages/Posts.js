import React, { Component } from 'react';
import '../index.css';
import NavBar from '../components/NavBar2';
import Post from '../components/Post';

export default class Posts extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <Post />
            </div>
        )
    }

}