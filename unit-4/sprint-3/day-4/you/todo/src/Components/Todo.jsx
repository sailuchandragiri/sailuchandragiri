
import { useState } from "react";
import {TodoInput} from "./TodoInput";
import { TodoList } from "./TodoList";


export const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [showFiltered, setShowFiltered] = useState(false);

    const handleAddTodo=(todo) => {
        setTodoList([...todoList, todo])
    };

    const handleToggle = (id) => {
        const updateList = todoList.map(todo => {
            if(todo.id === id){
                todo.status =! todo.status;
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
                setShowFiltered(!showFiltered);
            }}
            >{!showFiltered ? "completed" : "all"}</button>
        </div>
    );
};