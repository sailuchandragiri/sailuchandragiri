import {useState} from "react";
import "./style.css"


export function Login({handleLogin}){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        let payload = {email,password}
        handleLogin(payload);
    }


    return (
    <div id="loginlayout">
        <form id="formlayout" onSubmit={handleSubmit}>
            <div className="loginText"> Login </div>
            <input className="email" onChange={(e)=>setEmail(e.target.value)}type="text" 
            placeholder="Enter your email address"/>
            <br/>
            <input className="password" onChange={(e)=>setPassword(e.target.value)}type="password" 
            placeholder="Enter your password"/>
            <br/>
            <input className="btn" type="submit" value="submit"/>
        </form>
    </div>
    );
}