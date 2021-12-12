import React, { useState } from "react";

export const AddTodo=()=>{
    const [value, setValue] = useState("");

    const addTodo = (newTodo)=>{
       // setTodos([...todos, newTodo]);
       fetch("http://localhost:3001/todos", {
           method:"POST",
           headers:{
               "content-type":"application/json",
           },
           body:JSON.stringify({
               value:newTodo,
           }),
       }).then((r)=>{
        setValue("");
       });  
    };

    return(
        <div>
            <input value={value} onChange={(e)=>setValue(e.target.value)}></input>
            <button onClick={()=>addTodo(value)}>Add</button>
        </div>
    );
}