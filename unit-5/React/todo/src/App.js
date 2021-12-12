import { useState } from 'react';
import './App.css';



function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo=(newTodo)=>{
    setTodos([...todos,{
      value:newTodo,
      strikeOut:false,
    }
    ]);
    setValue("");
  };


  return (
    <div className="App">
       <input value={value} onChange={(e) => setValue(e.target.value)}></input>
       <button onClick={() => addTodo(value)}> Add</button>
       <br/>
       <br/>
       {todos.map((todo, index)=>(
         <div key={index}>
           <input type="checkbox" onClick={()=> strikeOut(index)}/>
           {todo} </div>
       ))}
    </div>
  );
}

export default App;
