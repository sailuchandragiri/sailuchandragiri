import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";


export const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [showFiltered, setshowFiltered] = useState(false);

    const handleAddTodo = (todo) => {
        setTodoList([...todoList, todo])
    };

    const handleToggle = (id) => {
        const updateList = todoList.map(todo => {
            if(todo.id === id){
                todo.status = !todo.status;
            }
            return todo;
        });
        setTodoList(updateList);    
    }
    return (
    <div>
        <TodoInput handleAddTodo={handleAddTodo}/>
        <TodoList list={showFiltered ? todoList.filter(e => !e.status) : todoList} handleToggle={handleToggle}/>
        <button 
        onClick={() => {
            setshowFiltered(!showFiltered);
           // const updated = todoList.filter((e) => !e.status);
            //setTodoList(updated);
        }}
        >{!showFiltered ? "show not completed" : "show all"}</button>
    </div>
   );     
};

