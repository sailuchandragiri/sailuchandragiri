import { useState } from "react"

export const Test = () => {
    return <div><Parent/></div>
}


//parent to child
/*
const Parent = () => {
    const state = "masaischool";
    return (
        <div>
            <Child1 name={state}/>
        </div>
    );
}

const Child1 = ({name}) => {
    return <div><Child2 name={name}/></div>
}

const Child2 = ({name}) => {
    return <h1>{name}</h1>
}
*/


//child to parent
/*
const Parent = () => {
    const accept = (data) => {
        console.log(data);
    };
    return(
        <div>
            <Child1 func={accept}/>
        </div>
    );
}

const Child1 = ({func}) => {
    const state = "masaischool";
    func(state);
    return(
        <h1>{state}</h1>
    );
}
*/

//sibling to sibling
const Parent = () => {
    const [state, setState] = useState("");
    const acceptData = (data) => {
        setState(data);
    }
    return(
        <div>
            <Sibling1 acceptData={acceptData}   />
            <Sibling2 state={state}/>
        </div>
    );
}

const Sibling1 = ({acceptData}) => {
    const data = "masaischool";
    acceptData(data);
    return(
        <h1>Sibling1</h1>
    );
}

const Sibling2 = ({state}) => {
    return(
        <h1>{state}</h1>
    );
}
