import { SET_LOGIN_STATUS } from "./actionTypes";

const initState = {
    auth:{
        isAuth:false,
        token:"",
    },
};


//Data to store the token
const saveToken = (token)=>{
    localStorage.setItem("token", JSON.stringify(token));
};

const AuthReducer = (state = initState, {type, payload})=>{
    switch(type){
        case SET_LOGIN_STATUS:
            saveToken(payload);
            return {
                ...state,
                auth:{
                    ...state.auth,
                    isAuth:true,
                    token:payload,
                },
            };
            default:
                return{...state};
    }
    
};

export {AuthReducer};