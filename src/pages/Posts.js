import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import '../index.css';
import logo from '../img/r3ai_logo.png';
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