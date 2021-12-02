import {combineReducers, createStore} from "redux";

import {AuthReducer} from "./Auth/reducers.js";


//for the authreducer
const reducer = combineReducers({
    auth:AuthReducer,
});

const store = createStore(reducer);

export default store;