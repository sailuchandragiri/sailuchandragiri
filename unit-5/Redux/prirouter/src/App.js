import './App.css';
import {Switch,Route} from "react-router-dom"
import {Navbar} from "./components/Pages/Navbar";
import {Home} from "./components/Pages/Home";
import {Login} from "./components/Pages/Login";
import {Dashboard} from "./components/Pages/Dashboard";
import {Setting} from "./components/Pages/Setting";
function App() {
  return (
    <div className="App">
      <h2>Welcome to the Private Routes</h2>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/dashboard/setting">
          <Setting/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
