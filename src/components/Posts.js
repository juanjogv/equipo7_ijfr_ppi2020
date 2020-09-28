import React, { Component } from 'react';
import posts from '../sample/MOCK_DATA.json';

export default class Posts extends Component {

    state = {
        posts: posts,
    }

    render() {
        return (
            <div>
                <h1>Publicaciones</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                            <img src={post.url} alt={post.imageId}></img>
                        </div>
                    })
                }
            </div>
        )
    }
}