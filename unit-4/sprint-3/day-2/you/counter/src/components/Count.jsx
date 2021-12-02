import {useState} from 'react';
import "./style.css";


function Counter({init}) {
    const [counter, setCounter] = useState(init);

//destructing
//React.useState => [value, setValue]

const handleIncreament = (value) => {
  setCounter(counter + value);
  //console.log(counter+value);
};


return (
  <div id="layout">
    <h1>COUNTER</h1>
    <h2>{counter}</h2>
    <button id="btn1" onClick={() => handleIncreament(1)}>ADD</button>
    <button id="btn"
    onClick={()=> {
        setCounter(counter-1);
    }}
    >REDUCE</button>
    <button id="btn"
    onClick = {()=> {
        setCounter(counter*2);
    }}
    >DOUBLE</button>
  </div>
);
}

export {Counter};

