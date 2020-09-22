import React, { Component } from 'react';
import Post from './Post'
import Photo from './Photo';

export default class Posts extends Component {

    state = {
        posts: [],
        photos: []
    }


    async componentDidMount() {
        const postsAns = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postsData = await postsAns.json();
        this.setState({ posts: postsData });

        const photosAns = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photosData = await photosAns.json();
        this.setState({ photos: photosData });

    }


    render() {
        return (
            <div>
                <h1>Publicaciones & post</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
                {
                    this.state.photos.map(photos => {
                        return <div key={photos.id}>
                            <img alt={photos.title} src={photos.url} ></img>
                        </div>
                    })
                }
            </div>
        )
    }
}