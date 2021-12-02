import {SET_LOGIN_STATUS} from "./actionTypes";


//Login credentionals
export const setLogin = (data) => {
    return {type:SET_LOGIN_STATUS, payload:data};
};
