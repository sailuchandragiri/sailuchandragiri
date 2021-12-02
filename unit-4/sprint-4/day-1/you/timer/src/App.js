//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Counter} from "./Components/Counter";

function App() {
  const [show, setShow] = useState(true);
  return<div className="App" id="layout">
    {show ? (<><Counter/><button id="btn" onClick={() => {
      setShow(false);
    }}>Hide</button></>) : 
    (<><button id="btn" onClick={() => {
      setShow(true);
    }}>Show</button></>)}
  </div>
}

export default App;
