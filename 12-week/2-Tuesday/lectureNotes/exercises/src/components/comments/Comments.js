import React, { Component } from 'react'
import data from './commentData';

class Comments extends Component {
    render() {
        return (
            <>
                1. import data to comments 
                2. loop through data
                3. display a comment component for each iteration 
                4. pass data to the component as you loop through 
                
                {data.comments.map((comment, index) => {
                  return <Comment name={comment.name}  description={comment.description}/>
                })}
                
            </>
        )
    }
}

export default Comments
