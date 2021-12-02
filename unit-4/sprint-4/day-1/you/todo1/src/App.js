//import logo from './logo.svg';
//import { useState, useEffect } from 'react';
import './App.css';
//import {Counter} from "./Components/Counter";
import {Todo} from "./Components/Todo";

function App() {



  return <div className="App">
    <Todo/> 
  </div>
 /*const [age, setAge] = useState(0);
 //const [count, setCount] = useState(0);
 
  
    useEffect(() => {
      console.log("first")
    })
    useEffect(() => {
      console.log("second")
    }, [])
    useEffect(() => {
      console.log("third")
    }, [age])

    return <div className="App">
      <button onClick={() => {setAge(age+1)}}>Change age</button>
      <button onClick={() => {setCount(count+1)}}>Change count</button>
    </div>



  /*const [show, setShow]=useState(true);
 return <div className="App">
   {show ? <>
   <Counter/><button onClick={() => {
     setShow(false);
   }}>
     Hide</button></> : 
   <><button onClick={()=> {
     setShow(true);
   }}>Show</button>
   </>}
   </div>*/
}

export default App;
