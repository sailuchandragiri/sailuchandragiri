import React from "react";
import {Link} from "react-router-dom";


export const Navbar=()=>{
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/services">Services</Link>
        </>
    );
}