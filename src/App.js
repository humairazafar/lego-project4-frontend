
import AllPosts from "./pages/AllPosts"
import SinglePost from "./pages/SinglePost"
import Form from "./pages/Form"

import React, {useState, useEffect} from 'react'

import {Route, Switch, Link} from "react-router-dom"

function App(props) {
  //////////////////////////
  ///Style Objects //////
  ///////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px"

  }

  const button = {
    backgroundColor: "navy",
    display: "block",
    margin: "auto"

  }

  ////////////////////////
  //State and other Variable
  //////////////////////////
  //API URL

  const url = "https://project4-legos-api.herokuapp.com/nlegos/"

  //state to hold the list of legoSet

const [posts, setPosts] = useState([]);

const nullLegoSet = {
  subject: "",
  details: "",

} 

const [targetLegoSet, setTargetLegoSet] = useState(nullLegoSet)

/////////////////////
//FUNCTION////////
////////////////////////////////

const getlegosets = async() => {
  const response = await fetch(url)
  const data = await response.json()
  setPosts(data)
}

const addLegoSets = async (newLegoSet) => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newLegoSet)
  })


  getlegosets()
}

const getTargetLegoSet = (legoset) => {
  setTargetLegoSet(legoset)
  props.history.push("/edit")
}
//Function to edit legoset on form submission
const updateLegoSet = async (legoset) => {
  const response = await fetch(url + legoset.id + 
    "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(legoset),
  });
   getlegosets();
};

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
     <Link to="/new"><button style={button}>Create New LEGO Project</button></Link>
     <Switch>
       <Route 
         exact 
         path='/'
         render={(rp) => <AllPosts posts={posts}
          {...rp}/>}

       />
        <Route 
         path='/post/:id'
         render={(rp) => <SinglePost 
          posts= {posts} 
          edit={getTargetLegoSet}
          {...rp}/>}

       />
        <Route 
         path='/new'
         render={(rp) => <Form 
          initialPost={nullLegoSet}
         handleSubmit={addLegoSets}
         buttonLabel="Create New Project"
          {...rp}/>}
         />
        
         <Route 
         path='/edit'
         render={(rp) => ( 
         <Form 
         {...rp}
         initialPost={targetLegoSet}
         handleSubmit={updateLegoSet}
         buttonLabel="Update Project"
       />
         )}
         />
     </Switch>
    </div>
  );
}

export default App;
