import './App.css';
import {Switch, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Dashboard} from "./Pages/Dashboard";
import {Home} from "./Pages/Home";
import {Login} from "./Pages/Login";
import {PrivateRoute} from "./Routes/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar id="nav"></Navbar>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/dashboard"><Dashboard></Dashboard></PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
