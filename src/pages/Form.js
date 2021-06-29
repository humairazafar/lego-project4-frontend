
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
    return <form onSubmit={handleSubmission}>
        <input
         type="text"
         onChange={handleChange}
         value={formData.name}
         name="name"
         />
         <input
          type="text"
          onChange={handleChange}
          value={formData.details}
          name="details"
          />
          <input 
          type="text"
          onChange={handleChange}
          value={formData.img_url}
          name="img_url"
          />
          <input type="submit" value={buttonLabel}/>
    </form>;
}

export default Form;