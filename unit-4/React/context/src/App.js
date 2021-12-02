import './App.css';
//import { useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { useContext } from 'react';
import { First } from './components/first';

function App() {
  const {token, handleTokenChange} = useContext({AuthContext});

  if(!token){
    return(
      <div className="App">
        <h4>User not logged in.  Please login to continue:</h4>
        <input type="text"/>
        <input type ="password"/>
        <button onClick={() => {
          handleTokenChange("qpindk24jiknal");
        }}>Submit</button>
      </div>
    );
  }

  return (
    <div className="App">
     <First/>
    </div>
  );
}

export default App;
