import {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/action.js";
import {v4 as uuid} from 'uuid';
import "./style.css";


export const TodoInput = () =>{
    const [title,setTitle] = useState("");
    const dispatch = useDispatch();
    const handleAdd = () =>{
        const payload = {
            title,
            status:false,
            id:uuid()
        }
        const AddTodoaction = addTodo(payload);
        dispatch(AddTodoaction)
    }
    return (
    <div>
        <div id="Heading">Add Todos</div>
        <input className="text"value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder="Enter the task"/>
        <button className="btn" onClick={handleAdd}>ADD</button>
    </div>
    );
}