import React from "react";
import {Redirect, Route} from "react-router-dom";


//Router for the privaterouter
export const PrivateRoute = ({children, path})=>{
    const token = localStorage.getItem("token");
    if(!token){
        return <Redirect to="/login"></Redirect>;
    }
    return <Route path={path}>{children}</Route>;
};

