import React from 'react'
import Grandchild from './Grandchild'

const Child = () => {
    return (
        <>
            I am a child<br />
            <Grandchild />
        </>
    )
}

export default Child
