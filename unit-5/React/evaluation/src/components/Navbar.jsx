import React from "react";
import {Link} from "react-router-dom";

//Navbar for home and cart
export const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}