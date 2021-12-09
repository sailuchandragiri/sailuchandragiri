import {LOGIN_SUCCESS,LOGIN_FAILURE} from "./actionType"
function loginSuccess({token}){
    console.log(token);
    return {
        type:LOGIN_SUCCESS,
        payload:token
    }
}

function loginFailure(err){
    return { 
        type:LOGIN_FAILURE,
        payload:err
    }
}

export {loginSuccess, loginFailure}