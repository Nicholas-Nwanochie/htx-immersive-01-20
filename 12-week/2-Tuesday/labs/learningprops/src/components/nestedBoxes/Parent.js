import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "green", padding: "10px" }}>
                I'm a Parent
                <Child />
            </div>
        )
    }
}

export default Parent
