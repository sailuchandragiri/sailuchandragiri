import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Route, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import { Services } from "./components/Services";
export default function App() {
return (
<div className="App">

<Navbar />
<Switch>
<Route exact path="/">
<Home />
</Route>
<Route path="/about">
<About />
</Route>
<Route path="/contact">
<Contact />
</Route>
<Route path="/login">
<Login />
</Route>
<Route path="/services">
<Services />
</Route>
</Switch>
</div>
);
} 