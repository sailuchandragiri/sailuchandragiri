import { useState, useEffect } from 'react';
//import { TodoList } from './TodoList';


export const Todo = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  //const [showFiltered, setshowFiltered] = useState(false);


  //const [counter, setCounter] = useState(0);
  //const [age, setAge] = useState(0);
  
  useEffect(() => {

    getTodos()
   // console.log("calling useEffects")
    //fetch("http://localhost:3001/todos")
    //.then((d) => d.json())
    //.then((res) => {
      //console.log("Res", res);
     // setData(res);
    //});
  },[page]);

  const getTodos = () => {
    fetch(`http://localhost:3001/todos?_page=${page}&_limit=2`)
    .then((d) => d.json())
    .then(setData).then(()=> {
      setLoading(false)
    });
  };

  const handleAddTodo = () => {
    fetch("http://localhost:3001/todos", {
      method:"POST",
      body:JSON.stringify({
        title:text,
        status:false,
      }),
      headers:{
        "Content-Type":"application/json"
      }
    }).then(getTodos);
  }


  //const handleDelete = (id) => {
    //fetch(`http://localhost:3001/todos/${id}`, {
      //method:"DELETE",
    //}).then(getTodos);
  //}

  //const handleToggle = (id) => {
  // const updateList = data.map(todo => {
   //     if(data.id === id){
        //    data.status = !data.status;
        //}
        //return data;
    //});
    //setData(updateList);    
//}

    //async function getData(){
      //const res = await fetch("http://localhost:3001/todos").then((d) => 
      //d.json()
      //);
      //setData(res);
    //}
    //getData();
 // },[age,counter]);

  return loading ? <h1>Loading.....</h1> : (
    <div className="App">
      <input type="text" onChange={(e) => setText(e.target.value)}/>
      <button onClick = {handleAddTodo}>Add todo</button>
      

      {data.map((e) => (<div key={e.id}>{e.title}
      </div>))}
    <button onClick={() => {
      setPage(page-1);
    }}
    >Prev</button>
    <button
    onClick={() => {
      setPage(page+1);
    }}
    >Next</button>

    </div>
  );
    
}
