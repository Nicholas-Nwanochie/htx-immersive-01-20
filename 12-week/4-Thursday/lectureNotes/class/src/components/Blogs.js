import React from 'react'

const Blogs = (props) => {
    return (
        <>
            I'm a blog
            <br /><br />
            {props.match.params.blogID}

            <br /><br />
            {props.location.pathname}

            {/* {props.location.pathname} */}
        </>
    )
}

export default Blogs
