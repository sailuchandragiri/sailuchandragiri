import {useSelector} from "react-redux";
import {useState,useEffect} from "react";
import "./style.css"


export const TodoList = () =>{
    const [showtask,setShowtask] = useState(false);
    const [todos,setTodos] = useState([]);
    //const dispatch = useDispatch();
    const todo = useSelector((state)=>state.app.todo);
    useEffect(()=>{
      setTodos(todo);
      console.log(todos);
    },[todo])
    const handleToggle = id => {
        const test = todo.map(item => item.id === id?{...item,status:!item.status}:item);
        setTodos(test);
        //dispatch(test);
      }
    return <div id="TodoLayout">
        {/* {todo.map(item=><div key={item.id}>{item.title}</div>)} */}
        {
          todos.filter(item=>showtask?true:!item.status).map((item)=><>
        <button onClick={()=>handleToggle(item.id)}>
          <div style={{marginRight:"20px"}}>{item.title}<span style={{paddingLeft:"330px",textAlign:"right",float:"right"}}>{item.status? "Done":'Not Done'}</span></div>
        </button>
        </>)
      }
      <button style={{width: '80%',margin:'auto',height:"50px",fontSize:"30px",backgroundColor:"#00838F"}} onClick={()=>setShowtask(!showtask)}>{showtask?"SHOW NOT COMPELETED TASKS":"SHOW ALL TASK"}</button>

    </div>
}