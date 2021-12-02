
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Home} from "./components/Home";
import {About} from "./components/About";
import { Navbar } from './components/Navbar';
import {Contact} from "./components/Contact";
import {Users} from "./components/Users";
import { UserDetail } from './components/UserDetail';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/about">
        <About></About>
      </Route>
      
      <Route  path="/contact">
        <Contact/>
      </Route>
      <Route path="/users">
        <Users/>
      </Route>

      <Route path="/user/:id">
        <UserDetail/>
      </Route>

      <Route>Page not found</Route>
      </Switch>
    </div>
  );
}

export default App;
