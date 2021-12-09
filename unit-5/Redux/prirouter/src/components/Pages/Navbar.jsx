import {Link} from "react-router-dom";
import "./PageStyles.css";
export const Navbar = () => {
    return <div id="NavbarLayout">
        <Link className="Home" to="/">
            Home
        </Link>
        <Link className="Login" to="/login">
            Login
        </Link>
        <Link className="Dashboard" to="/dashboard">
            Dashboard
        </Link>
        <Link className="Setting" to="/dashboard/setting">Setting</Link>
    </div>
}