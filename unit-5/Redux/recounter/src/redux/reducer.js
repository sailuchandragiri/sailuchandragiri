import { INC_COUNT,DEC_COUNT } from "./actionType"

const initState = {
    counter:1
}

const reducer = (state=initState,{type,payload}) =>{
    console.log(state,type,payload)
switch(type){

    case INC_COUNT:
        return ({
            ...state,
            counter:state.counter+payload
        })
        
    case DEC_COUNT:
        return ({
            ...state,
            counter:state.counter-payload
        })
    default:
        return state;
}
}
export {reducer}