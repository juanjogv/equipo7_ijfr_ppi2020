import React, { Component } from 'react';

export default class Photo extends Component {

    render() {
        return <div>
            {
                this.props.photos.map(photos => {
                    return <div>
                        <img alt={photos.title} src={photos.url} ></img>
                    </div>
                }

                )
            }
        </div>
    }

}