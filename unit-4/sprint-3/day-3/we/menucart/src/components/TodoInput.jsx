import React, { useState } from "react";
import { nanoid } from 'nanoid';

export const TodoInput = ({handleAddTodo}) =>{
    const [text, setText] = useState("");

    const handleChange = ({target}) => {
        setText(target.value);
    };

    const handleClick = () => {
        const data = {
            id:nanoid(4),
            title:text,
            status:false,
        }
        handleAddTodo(data);
    };

    return (
        <>
        <input 
        type="text" 
        placeholder="Enter Todo" 
        value={text} 
        onChange={handleChange}/>
        <button onClick={handleClick}>Add Todo</button>
        </>
    );
};