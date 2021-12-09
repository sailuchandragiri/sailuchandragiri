import {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/action"
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
    return (<div>
        <div id="HeadingaboutTodo">Add Todo</div>
        <input id="input" value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder="Enter the task"/>
        <button id="addbtn" onClick={handleAdd}>ADD</button>
    </div>)
}