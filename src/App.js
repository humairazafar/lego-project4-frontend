
import AllPosts from "./pages/AllPosts"
import SinglePost from "./pages/SinglePost"
import Form from "./pages/Form"

import React, {useState, useEffect} from 'react'

import {Route, Switch} from "react-router-dom"

function App() {
  //////////////////////////
  ///Style Objects //////
  ///////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px"

  }

  ////////////////////////
  //State and other Variable
  //////////////////////////
  //API URL

  const url = "https://project4-legos-api.herokuapp.com/nlegos/"

  //state to hold the list of legoSet

const [posts, setPosts] = useState([]);

/////////////////////
//FUNCTION////////
////////////////////////////////

const getlegosets = async() => {
  const response = await fetch(url)
  const data = await response.json()
  setPosts(data)
}

////////////////////////////////
////useEffect////////////////
///////////////////////////
useEffect(() => {getlegosets()}, [])

/////////////////////////////////
//////Returned JSX///////////////
/////////////////////////////////
  return (
    <div className="App">
     <h1 style={h1}>My LEGO Projects</h1>
     <Switch>
       <Route 
         exact 
         path='/'
         render={(rp) => <AllPosts posts={posts}
          {...rp}/>}

       />
        <Route 
         path='/post/:id'
         render={(rp) => <SinglePost posts= {posts} {...rp}/>}

       />
        <Route 
         path='/new'
         render={(rp) => <Form {...rp}/>}
         />
        
         <Route 
         path='/edit'
         render={(rp) => <Form {...rp}/>}
       />
     </Switch>
    </div>
  );
}

export default App;
