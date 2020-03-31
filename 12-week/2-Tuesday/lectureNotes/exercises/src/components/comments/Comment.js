import React, { Component } from 'react'
import { Media } from 'react-bootstrap';

class Comment extends Component {
    render() {
        return (
            <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="holder.js/64x64"
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <h5>{this.props.name}</h5>
                    <p>
                        {this.props.description}
                    </p>
                </Media.Body>
            </Media>
        )
    }
}

export default Comment
