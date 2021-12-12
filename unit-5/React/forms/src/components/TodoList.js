import React, { useEffect, useState } from "react";
import { Todo } from "./Todo";

export const TodoList=()=>{
    const [pageNo, setPageNo] = useState(1);
    const [todos, setTodos] = useState([]);

useEffect(()=>{
    fetch(`http://localhost:3001/todos?_page=${pageNo}`)
    .then((response) => response.json())
    .then((data)=>{
        setTodos(data);
    });
},[pageNo])
    
    return(
        <div>
            <button onClick={()=> setPageNo(pageNo+1)}>Next</button>
            <button onClick={()=> setPageNo(pageNo-1)}
            disabled={pageNo<=1}>Prev</button>
            {todos.map((todo) => (
                  <Todo key={todo.id} data={todo}></Todo>  
            ))}
        </div>
    );
}