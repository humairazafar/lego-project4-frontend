import React from "react"

import {Link} from "react-router-dom"


const post = ({post}) => {
    ///////////////////////
    /////Style Object//////
    ///////////////////////

    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%"
    }

    const picStyle = {
        imageSize: "200px"
    }
    return <div style={div}>
        <Link to={`/post/${post.id}`}>
            <h1>{post.name}</h1>
        </Link>
        <h2>{post.details}</h2>
        <img style={picStyle} src={post.img_url}  style={{width: '30%', height: '30%'}} alt="LEGO Pictures"/>
    </div>
}

export default post;
