import './App.css';
import {useState} from "react";

function App() {
  const [mousePosition, setMousePosition] = useState('');
  return (
    <div className="App">
      <div

      onMouseMove={(e)=>{
        setMousePosition(`${e.clientX}-${e.clientY}`);
      }}

      onContextMenu={(e)=>{
        e.preventDefault();
        alert("Right clicked not allowed");
      }}

      style={{
        width:200,
        height:200,
        backgroundColor:"coral",
        color:"white",
      }}
      >Mouse:{mousePosition}
      </div>
    </div>
  );
}

export default App;
