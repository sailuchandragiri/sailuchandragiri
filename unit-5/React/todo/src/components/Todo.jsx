import React, { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import {v4 as uuid} from "uuid";

export const Todo=()=>{
    const [data, setData] = useState([]);
    const [isStricked, setIsStricked]=useState(false);

    const handleAdd = (title) => {
        const payload = {
            title,
            status:false,
            id:uuid()
        };
        setData([...data, payload]);
    };

    const handleDelete = (id) => {

    };

    const handleToggle = (id) => {
        const updatedTodo = data.map(item => item.id === id ? 
            {...item, status:!item.status} : item);
            setData(updatedTodo);
    };

    return(
        <div>
            <TodoInput onClick={handleAdd}/>
            {data.map((item)=> (       
                <TodoList 
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                key={item.id} {...item}/>
            ))}
        </div>
    );
}