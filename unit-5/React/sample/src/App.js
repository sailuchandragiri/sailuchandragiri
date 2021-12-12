import './App.css';
import {useState} from "react";
import { Todo } from './Todo';

function App() {
  const [value, setValue] = useState({
    title:"",
    strikeOut:false,
  });
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo)=>{
    setTodos([...todos, newTodo]);
    setValue({
      title:"",
      strikeOut:false,
    })
  };

 

  return (
    <div className="App">
     <input value={value.title}  onChange={(e) => 
      setValue({
        title:e.target.value,
        strikeOut:false,
      })} />
     <button onClick={()=> addTodo(value)}>Add</button>
     <br/>
     <br/>
     {todos.map((todo, index) => (
       <div key={index}>
        <Todo {...todo}/>
         </div>
     ))}
    </div>
  );
}

export default App;
