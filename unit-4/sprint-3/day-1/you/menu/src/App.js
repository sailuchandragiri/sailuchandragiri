import { Contactus } from "./components/Contactus";
import { Download } from "./components/Download";
import {Help} from "./components/Help";
import {Joinus} from "./components/Joinus";
import {Login} from "./components/Login";
import {Search} from "./components/Search";
import {Settings} from "./components/Settings";
import {Home} from "./components/Home";
import './App.css';


var style1 = {
  fontSize: '20px',
  borderRadius: 20,
  width:"150px"
}


function App() {
  return <div>
    <div id="layout">
    <p><Joinus/></p>
    <p><Settings/></p>
    <p><Login/></p>
    <p><Contactus/></p>
    <p><Search/></p>
    <p><Help/></p>
    <p><Home/></p>
    <p><Download/></p>
  </div><hr/>
  <div id="layout">
    <div><button  style={{...style1, background:"skyblue"}}>JOIN US</button></div>
    <div><button  style={{...style1, background:"gray"}}>SETTINGS</button></div>
    <div><button  style={{...style1, background:"orange"}}>LOGIN</button></div>
    <div><button  style={{...style1, background:"pink"}}>CONTACT US</button></div>
    <div><button  style={{...style1, background:"green"}}>SEARCH</button></div>
    <div><button  style={{...style1, background:"violet"}}>HELP</button></div>
    <div><button  style={{...style1, background:"pink"}}>HOME</button></div>
    <div><button  style={{...style1, background:"brown"}}>DOWNLOAD</button></div>
  </div>
  </div>
}

export default App;
