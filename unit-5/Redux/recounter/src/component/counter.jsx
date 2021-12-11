import {store} from "../redux/store"
import {useState} from "react";
import {incCounter,decCounter} from "../redux/action";
import "./style.css";


export const Counter = () => {
    const [state,setState] = useState(0)
    const {counter} = store.getState();
    const {dispatch} = store;
    const forceState = () => setState(state+1);

    const handleinc = () =>{
        dispatch(incCounter(1))
        setState(prev=>prev+1)
        forceState();
    }
    
    const handledec = () =>{
        dispatch(decCounter(1))
        setState(prev=>prev-1)
        forceState();
    }



    return (
    <div id="Layout">
    <div className="CounterContent">Counter : {counter}</div>
    <button className="Add" onClick={handleinc}>Add</button>
    <button className="sub" onClick={handledec}>Sub</button>
    </div>
    )
}