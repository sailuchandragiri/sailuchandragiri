import React from "react";
import {Link} from "react-router-dom";

//Navbar created with home and login button
export const Navbar = () => {
    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}