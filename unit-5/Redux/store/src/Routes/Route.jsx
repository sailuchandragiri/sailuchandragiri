import {Link,Switch,Route} from 'react-router-dom';
import {Home} from "./Home";
import {Loginpage} from "./Loginpage";
import "./Navbar.css";
export function Routes(){
    return (<div>
        <div id="navbarlayout">
            <span>Navbar</span>
            <Link className="home" to="/">Home</Link>
            <Link className="login" to="/login">Login</Link>
        </div>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/login">
                <Loginpage />
            </Route>
        </Switch>
    </div>)
}