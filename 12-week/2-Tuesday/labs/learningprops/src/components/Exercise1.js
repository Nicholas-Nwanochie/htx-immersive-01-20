import React, { Component } from 'react';
import Child from './ex1/Child'

class Exercise1 extends Component {
    render() {
        return (
            <div>
                Creating a nested component
                <br />
                <Child />

            </div>
        )
    }
}

export default Exercise1
