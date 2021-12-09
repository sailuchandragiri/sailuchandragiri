import { createContext } from "react";
import React from "react"
import {useState} from 'react';


export const cartContext = createContext();


export const CartContextProvider = ({children}) => {
    const [data,setData] = useState([]);
    const handleCart = (newData) => {
        setData(newData);
    }
    return (<cartContext.Provider value = {{data,handleCart}}>;{children}</cartContext.Provider>)
}