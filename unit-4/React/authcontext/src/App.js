import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { First } from './components/first';

function App() {
  const [age, setAge]=useState(10);
  return (
    <div className="App">
      {/*Hello, your age is :{age}
      <First age={age}/>*/}
      Hello 
    </div>
  );
}

export default App;
