import { useState, useEffect } from 'react';


export const Todo=()=>{
    const [data, setData]=useState([]);
  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState(0);
  
  useEffect(() => {
    console.log("Calling useEffect");
    fetch("http://localhost:3002/todos")
      .then(d => d.json()).then(res => {
      console.log("Res", res);
      setData(res);
    });
  },[age,counter]);
  return (
    <div className="App">{data.map(e => <div key={e.id} >{e.title}</div>)}
    <button onClick={() => {
      setCounter(counter+1)
    }}>Update counter</button>
    <button onClick={() => {
      setAge(age+1)
    }}
    >Update age</button>
    </div>
  );
}