import {Login} from "../components/Login"
import {useDispatch,useSelector} from "react-redux";
import {loginSuccess,loginFailure} from "../auth/action";
import {Redirect} from "react-router-dom";


export function Loginpage(){
    const isAuth = useSelector((state)=>state.auth.isAuth);
    const dispatch = useDispatch();
    const handleLogin = ({email, password})=>{
        console.log(email, password);
        if(email === "admin" && password === "admin")
        {
            const action = loginSuccess("faketoken")
            dispatch(action);
        }
        else
        {
            const action = loginFailure("Invalid email or password");
            dispatch(action);
        }
    }
    if(isAuth)
    {
        return <Redirect to="/" />
    }
    return (<div>
        <Login handleLogin={handleLogin} />
    </div>)
}