import React from "react";
import {Link}  from 'react-router-dom';

const SinglePost = ({posts, match, edit, deleteLegoSet}) => {
    const id = parseInt(match.params.id)
    const post = posts.find((post) => post.id === id);


    ////////////////////////////////////
    ////Style////////////////////////

    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"

    };

    
    return (
    <div style={div}>
        <h1>{post.name}</h1>
        <p>{post.details}</p>
        <img src={post.img_url}  style={{width: '50%', height: '50%'}} alt="LEGO Pictures"/>
        <br/>
        <button class="button-primary" onClick={(event) => edit(post)}>Edit</button>
        <br>
        </br>
        <button class="button-primary" onClick={(event) => deleteLegoSet(post)}>Delete</button>
        <br>
        </br>
        <Link to="/">
        <button class="button button-primary">Go to Main</button>
        </Link>
    </div>
    );
};

export default SinglePost;