import './App.css';
import {Navbar} from "./components/Pages/Navbar";
import {Home} from "./components/Pages/Home";
import {Cart} from "./components/Pages/Cart";
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h2>Hello World</h2>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
