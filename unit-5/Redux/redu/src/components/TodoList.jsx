import {useSelector} from "react-redux";
import {useState,useEffect} from "react";
import "./style.css"

export const TodoList = () =>{

    const [showtask,setShowtask] = useState(false);
    const [todos,setTodos] = useState([]);
    const todo = useSelector((state)=>state.todo)

    useEffect(()=>{
      setTodos(todo);
      console.log(todos);
    },[todo])

    const handleToggle = id => {
        const test = todo.map(item => item.id === id?{...item,status:!item.status}:item);
        setTodos(test);
    }

    return <div id="Layout">
    
        {
          todos.filter(item=>showtask?true:!item.status).map((item)=><>
        <button onClick={()=>handleToggle(item.id)}>
          <div style={{marginRight:"20px"}}>{item.title}<span 
          style={{paddingLeft:"330px",textAlign:"right",float:"right"}}>
              {item.status? "Done":'Not Done'}</span></div>
        </button>
        </>
        )
      }
      <button className="lbtn" 
      onClick={()=>setShowtask(!showtask)}>{showtask?"SHOW NOT COMPELETED TASKS":"SHOW ALL TASK"}
      </button>

    </div>
}