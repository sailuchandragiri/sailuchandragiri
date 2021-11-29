import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import { setLogin } from "../Redux/Auth/action";
import {Redirect} from "react-router-dom";


//Login page of the website
export const Login= () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const authState = useSelector((store) => store.auth);
    const token = localStorage.getItem("token");
    if(token){
        return <Redirect to="/dashboard"/>;
    }
    const getData = async()=>{
        try{
            console.log(email,password);
            var{
                data:{token},
            }=await axios.post("https://reqres.in/api/login",{
                email:"eve.holt@reqres.in",
                password:"cityslicka",
            });
            console.log(token);
            dispatch(setLogin(token));
            console.log("authState getData", authState);

        }catch(error){
            console.log(error);
        }
    };
    return(
        <div className="login">
            <h1>Login</h1>
            <label>email</label>
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            type="text"
            ></input>
            <label>Password</label>
            <input
            value={password}
            onChange={(e)=> {
                setPassword(e.target.value);
            }}
            type="password"
            ></input>
            <input onClick={getData} type="submit" value="LOGIN TO DASHBOARD"></input>
        </div>
    );
};