import React, { Component } from 'react'
import Grandchild from './Grandchild'

class Child extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "yellow", padding: "10px" }}>
                I'm a Child
                <Grandchild />
            </div>
        )
    }
}

export default Child
