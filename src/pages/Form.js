
import React, {useState} from "react"

const Form = ({initialPost, history, handleSubmit, buttonLabel}) => {
    //The Form State
    const [formData, setFormData] = useState(initialPost) 

    //Function

    const handleChange = (event) => {

        //copy of the current 
        // const newState = {...formData}
        // newState[event.target.name] = event.target.value
       //  setFormData = (newState) 
       //instead we wrote the code below

        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        history.push("/")
    }
    return <form class= "form" onSubmit={handleSubmission}>
        <br/>
        <br/>
        <input
         type="text"
         onChange={handleChange}
         value={formData.name}
         name="name"
         placeholder="Project Name"
         />
         <br/>
         <br/>
         <input
          type="text"
          onChange={handleChange}
          value={formData.details}
          name="details"
          placeholder="Project Details"
          class="button-primary"
          />
          <br/>
          <br/>
          <input 
          type="text"
          onChange={handleChange}
          value={formData.img_url}
          name="img_url"
          placeholder="Your Image"
          />
          <br/>
          <br/>
          <input type="submit" class="button-primary" value={buttonLabel}/>
    </form>;
}

export default Form;