import {TodoInput} from "../components/TodoInput";
import {TodoList} from "../components/TodoList";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";


export function Home(){
    const isAuth = useSelector((state)=>state.auth.isAuth)
    const token = useSelector((state)=>state.auth.token)
    console.log(isAuth);
    if(!isAuth)
    {
        return <Redirect to="/login" />
    }
    return (<div>
        <div>{token}</div>
        <TodoInput/>
        <TodoList/>
    </div>)
}