import {createStore,combineReducers} from 'redux';
import {Authreducer} from "../auth/reducer.js"
import {reducer} from "./reducer.js"
const rootReducer = combineReducers({
    auth:Authreducer,
    app:reducer
})
// import {reducer} from "./reducer.js";
export const store = createStore(rootReducer);
console.log(store.getState())