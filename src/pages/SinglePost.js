import React from "react"
import {Link}  from 'react-router-dom'

const SinglePost = ({posts, match, edit}) => {
    const id = parseInt(match.params.id)
    const post = posts.find((post) => {
        return post.id === id

    })
    ////////////////////////////////////
    ////Style////////////////////////

    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"

    }

    
    return <div style={div}>
        <h1>{post.name}</h1>
        <h2>{post.details}</h2>
        <img src={post.img_url}  style={{width: '50%', height: '50%'}} alt="LEGO Pictures"/>
        <button onClick={(event) => {
            edit(post)
        }}>Edit</button>
        <Link to="/">
        <button>Go to Main</button>
        </Link>
    </div>;
};

export default SinglePost;