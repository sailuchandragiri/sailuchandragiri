import { useState } from "react"

export const Form = () => {
    const [formData, setFormData] = useState({
        username:"",
        age:"",
        email:"",
    });

    const handleChange = (e) =>{
       // console.log(e.target.name);
       const {name, value} = e.target;
       setFormData({
           ...formData,
           [name]:value,    
       })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return <form onSubmit={handleSubmit}>
        <input name="username" 
        onChange={handleChange} 
        type="text" 
        placeholder="Enter name" 
        />

        <input name="age" 
        onChange={handleChange} 
        type="number" 
        placeholder="Enter Age"
        />

        <input
        name="email"
        onChange={handleChange}
        type="email"
        placeholder="Enter email"
        />


        <input type="submit" value="Submit"/>
    </form>
}