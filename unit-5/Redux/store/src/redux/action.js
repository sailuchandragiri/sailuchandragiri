import {ADD_TODO,TOGGLE_TODO} from "./actionType.js";

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const ToggleTodo = (payload) => {
    return {
        type: TOGGLE_TODO,
        payload
    }
}