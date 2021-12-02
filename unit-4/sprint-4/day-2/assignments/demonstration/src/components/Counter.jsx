import { useState } from "react";


export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncreament = (value) => {
    setCounter(counter+value);
  }

  const handleDecreament =(value) => {
    setCounter(counter-value);
  }

  return (
    <div className="App">
     <h1>Counter</h1>
     <h3>{counter}</h3>
     <button onClick={() => {handleIncreament(1)}}>INC</button>
     <button disabled={counter===0} onClick={() => {handleDecreament(1)}}>Dec</button>
    </div>
  );
}

//export Counter;