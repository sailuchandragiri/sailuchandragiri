import {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";
export const Login = () => {
    const {handleToken} = useContext(AuthContext);
    return (<div id="loginLayout">
        <input className="Email" type="email" placeholder="Enter the your email"/>
        <input className="Password" type="password" placeholder="Enter your password"/>
        <button className="loginbtn" onClick={()=>{
            handleToken("kiran@1999")
        }}>Login</button>
    </div>);
}