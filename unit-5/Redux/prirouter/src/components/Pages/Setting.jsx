import {useContext} from "react";
import {AuthContext} from '../context/AuthContext';
import {Redirect} from "react-router-dom";
export const Setting = () => {
    const {token} = useContext(AuthContext);
    if(!token) {
       return <Redirect to="/login" />
    }
    return <div>Welcome to the Setting</div>;
}