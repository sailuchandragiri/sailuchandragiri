const initialState = {
    todo:[
        {
            id:1,
            title:"Learn Redux",
            status:false
        }
    ]
}
export const reducer = (state=initialState,{type,payload}) =>{
    switch(type){
        case "ADD_TODO":{
            return {
                ...state,
                todo:[...state.todo,payload]
            }
        }
        case "TOGGLE_TODO":{
            return {
                ...state,
                todo:[...state.todo,payload]
            }
        }
        default:
            return state;
    }
}