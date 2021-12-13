import {combineReducers, createStore} from "redux";

import {AuthReducer} from "./Auth/reducers.js";

//For the auth reducers
const reducers = combineReducers({
    auth:AuthReducer,
});

const store = createStore(reducers);

export default store;

