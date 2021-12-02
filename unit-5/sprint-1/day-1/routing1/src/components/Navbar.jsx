import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            width:"500px",
            marginLeft:"30%"
        }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/users">Users</Link>
        </div>
    );
}